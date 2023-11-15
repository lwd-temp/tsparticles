import {
    type Container,
    type ICoordinates,
    type IEffectDrawer,
    type IShapeDrawData,
    type IShapeValues,
    type Particle,
    type RangeValue,
    getDistance,
    getRangeValue,
} from "@tsparticles/engine";

type TrailStep = {
    color: string | CanvasGradient | CanvasPattern;
    position: ICoordinates;
};

type TrailParticle = Particle & {
    trail?: TrailStep[];
    trailLength?: number;
    trailMaxWidth?: number;
    trailMinWidth?: number;
};

interface ITrailData extends IShapeValues {
    length: RangeValue;
    maxWidth: RangeValue;
    minWidth: RangeValue;
}

export class TrailDrawer implements IEffectDrawer<TrailParticle> {
    draw(data: IShapeDrawData<TrailParticle>): void {
        const { context, radius, particle } = data,
            pxRatio = particle.container.retina.pixelRatio,
            currentPos = particle.getPosition();

        if (!particle.trail || !particle.trailLength) {
            return;
        }

        const pathLength = particle.trailLength;

        particle.trail.push({
            color: context.fillStyle ?? context.strokeStyle,
            position: {
                x: currentPos.x,
                y: currentPos.y,
            },
        });

        if (particle.trail.length < 2) {
            return;
        }

        if (particle.trail.length > pathLength) {
            particle.trail.shift();
        }

        const trailLength = Math.min(particle.trail.length, pathLength),
            offsetPos = {
                x: currentPos.x,
                y: currentPos.y,
            };

        let lastPos = particle.trail[trailLength - 1].position;

        for (let i = trailLength; i > 0; i--) {
            const step = particle.trail[i - 1],
                position = step.position;

            if (getDistance(lastPos, position) > radius * 2) {
                continue;
            }

            context.beginPath();
            context.moveTo(lastPos.x - offsetPos.x, lastPos.y - offsetPos.y);
            context.lineTo(position.x - offsetPos.x, position.y - offsetPos.y);

            const width = Math.max((i / trailLength) * radius * 2, pxRatio, particle.trailMinWidth ?? -1);

            context.lineWidth = particle.trailMaxWidth ? Math.min(width, particle.trailMaxWidth) : width;

            context.strokeStyle = step.color;

            context.stroke();

            lastPos = position;
        }
    }

    particleInit(container: Container, particle: TrailParticle): void {
        particle.trail = [];

        const effectData = particle.effectData as ITrailData | undefined;

        particle.trailLength = getRangeValue(effectData?.length ?? 10) * container.retina.pixelRatio;
        particle.trailMaxWidth = effectData?.maxWidth
            ? getRangeValue(effectData.maxWidth) * container.retina.pixelRatio
            : undefined;
        particle.trailMinWidth = effectData?.minWidth
            ? getRangeValue(effectData.minWidth) * container.retina.pixelRatio
            : undefined;
    }
}
