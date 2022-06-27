import { Engine } from "./engine";
import type { IOptions } from "./Options/Interfaces/IOptions";
import type { RecursivePartial } from "./Types/RecursivePartial";

/**
 * The exposed tsParticles instance
 */
const tsParticles = new Engine();

tsParticles.init();

export * from "./Core/Interfaces/Colors";
export * from "./Core/Interfaces/Gradients";
export * from "./Core/Interfaces/IBounds";
export * from "./Core/Interfaces/IBubbleParticleData";
export * from "./Core/Interfaces/ICircleBouncer";
export * from "./Core/Interfaces/IContainerInteractivity";
export * from "./Core/Interfaces/IContainerPlugin";
export * from "./Core/Interfaces/ICoordinates";
export * from "./Core/Interfaces/IDelta";
export * from "./Core/Interfaces/IDimension";
export * from "./Core/Interfaces/IDistance";
export * from "./Core/Interfaces/IExternalInteractor";
export * from "./Core/Interfaces/IInteractor";
export * from "./Core/Interfaces/IMouseData";
export * from "./Core/Interfaces/IMovePathGenerator";
export * from "./Core/Interfaces/IParticle";
export * from "./Core/Interfaces/IParticleColorStyle";
export * from "./Core/Interfaces/IParticleHslAnimation";
export * from "./Core/Interfaces/IParticlesInteractor";
export * from "./Core/Interfaces/IParticleLife";
export * from "./Core/Interfaces/IParticleRetinaProps";
export * from "./Core/Interfaces/IParticleRoll";
export * from "./Core/Interfaces/IParticleUpdater";
export * from "./Core/Interfaces/IParticleValueAnimation";
export * from "./Core/Interfaces/IParticleWobble";
export * from "./Core/Interfaces/IParticlesMover";
export * from "./Core/Interfaces/IPlugin";
export * from "./Core/Interfaces/IRangeValue";
export * from "./Core/Interfaces/IRectSideResult";
export * from "./Core/Interfaces/IShapeDrawer";
export * from "./Core/Interfaces/IShapeValues";
export * from "./Core/Utils/Circle";
export * from "./Core/Utils/CircleWarp";
export * from "./Core/Utils/Constants";
export * from "./Core/Utils/EventListeners";
export * from "./Core/Utils/ExternalInteractorBase";
export * from "./Core/Utils/FrameManager";
export * from "./Core/Utils/InteractionManager";
export * from "./Core/Utils/ParticlesInteractorBase";
export * from "./Core/Utils/Plugins";
export * from "./Core/Utils/Point";
export * from "./Core/Utils/QuadTree";
export * from "./Core/Utils/Range";
export * from "./Core/Utils/Rectangle";
export * from "./Core/Utils/Vector";
export * from "./Core/Utils/Vector3d";
export * from "./Core/Canvas";
export * from "./Core/Container";
export * from "./Core/Loader";
export * from "./Core/Particle";
export * from "./Core/Particles";
export * from "./Core/Retina";
export * from "./Enums/Directions/MoveDirection";
export * from "./Enums/Directions/RotateDirection";
export * from "./Enums/Directions/OutModeDirection";
export * from "./Enums/Modes/ClickMode";
export * from "./Enums/Modes/DestroyMode";
export * from "./Enums/Modes/DivMode";
export * from "./Enums/Modes/HoverMode";
export * from "./Enums/Modes/CollisionMode";
export * from "./Enums/Modes/OutMode";
export * from "./Enums/Modes/SizeMode";
export * from "./Enums/Modes/ThemeMode";
export * from "./Enums/Modes/ResponsiveMode";
export * from "./Enums/Types/AlterType";
export * from "./Enums/Types/DestroyType";
export * from "./Enums/Types/GradientType";
export * from "./Enums/Types/InteractorType";
export * from "./Enums/Types/ParticleOutType";
export * from "./Enums/Types/StartValueType";
export * from "./Enums/Types/DivType";
export * from "./Enums/Types/EasingType";
export * from "./Enums/AnimationStatus";
export * from "./Enums/InteractivityDetect";
export { Engine, Engine as Main };
export * from "./Options/Classes/AnimatableColor";
export * from "./Options/Classes/Gradients/AnimatableGradient";
export * from "./Options/Classes/Gradients/AnimatableGradientColor";
export * from "./Options/Classes/Gradients/GradientAngle";
export * from "./Options/Classes/Gradients/GradientAngleAnimation";
export * from "./Options/Classes/Gradients/GradientColorOpacity";
export * from "./Options/Classes/Gradients/GradientColorOpacityAnimation";
export * from "./Options/Classes/AnimationOptions";
export * from "./Options/Classes/Background/Background";
export * from "./Options/Classes/BackgroundMask/BackgroundMask";
export * from "./Options/Classes/BackgroundMask/BackgroundMaskCover";
export * from "./Options/Classes/ColorAnimation";
export * from "./Options/Classes/FullScreen/FullScreen";
export * from "./Options/Classes/HslAnimation";
export * from "./Options/Classes/Interactivity/Events/ClickEvent";
export * from "./Options/Classes/Interactivity/Events/DivEvent";
export * from "./Options/Classes/Interactivity/Events/ClickEvent";
export * from "./Options/Classes/Interactivity/Events/DivEvent";
export * from "./Options/Classes/Interactivity/Events/Events";
export * from "./Options/Classes/Interactivity/Events/HoverEvent";
export * from "./Options/Classes/Interactivity/Events/Parallax";
export * from "./Options/Classes/Interactivity/Interactivity";
export * from "./Options/Classes/Interactivity/Modes/Attract";
export * from "./Options/Classes/Interactivity/Modes/Bounce";
export * from "./Options/Classes/Interactivity/Modes/Bubble";
export * from "./Options/Classes/Interactivity/Modes/BubbleBase";
export * from "./Options/Classes/Interactivity/Modes/BubbleDiv";
export * from "./Options/Classes/Interactivity/Modes/Connect";
export * from "./Options/Classes/Interactivity/Modes/ConnectLinks";
export * from "./Options/Classes/Interactivity/Modes/Grab";
export * from "./Options/Classes/Interactivity/Modes/GrabLinks";
export * from "./Options/Classes/Interactivity/Modes/Light";
export * from "./Options/Classes/Interactivity/Modes/LightArea";
export * from "./Options/Classes/Interactivity/Modes/LightGradient";
export * from "./Options/Classes/Interactivity/Modes/LightShadow";
export * from "./Options/Classes/Interactivity/Modes/Modes";
export * from "./Options/Classes/Interactivity/Modes/Push";
export * from "./Options/Classes/Interactivity/Modes/Remove";
export * from "./Options/Classes/Interactivity/Modes/Repulse";
export * from "./Options/Classes/Interactivity/Modes/RepulseBase";
export * from "./Options/Classes/Interactivity/Modes/RepulseDiv";
export * from "./Options/Classes/Interactivity/Modes/Slow";
export * from "./Options/Classes/Interactivity/Modes/Trail";
export * from "./Options/Classes/ManualParticle";
export * from "./Options/Classes/Motion/Motion";
export * from "./Options/Classes/Motion/MotionReduce";
export * from "./Options/Classes/Options";
export * from "./Options/Classes/OptionsColor";
export * from "./Options/Classes/Particles/Bounce/ParticlesBounce";
export * from "./Options/Classes/Particles/Bounce/ParticlesBounceFactor";
export * from "./Options/Classes/Particles/Collisions/Collisions";
export * from "./Options/Classes/Particles/Collisions/CollisionsOverlap";
export * from "./Options/Classes/Particles/Destroy/Destroy";
export * from "./Options/Classes/Particles/Destroy/Split";
export * from "./Options/Classes/Particles/Destroy/SplitFactor";
export * from "./Options/Classes/Particles/Destroy/SplitRate";
export * from "./Options/Classes/Particles/ParticlesOptions";
export * from "./Options/Classes/Particles/Shadow";
export * from "./Options/Classes/Particles/Stroke";
export * from "./Options/Classes/Particles/Links/Links";
export * from "./Options/Classes/Particles/Links/LinksShadow";
export * from "./Options/Classes/Particles/Links/LinksTriangle";
export * from "./Options/Classes/Particles/Move/MoveAttract";
export * from "./Options/Classes/Particles/Move/Move";
export * from "./Options/Classes/Particles/Move/MoveAngle";
export * from "./Options/Classes/Particles/Move/MoveGravity";
export * from "./Options/Classes/Particles/Move/OutModes";
export * from "./Options/Classes/Particles/Move/Path/MovePath";
export * from "./Options/Classes/Particles/Move/Path/MovePathDelay";
export * from "./Options/Classes/Particles/Move/Spin";
export * from "./Options/Classes/Particles/Move/MoveTrail";
export * from "./Options/Classes/Particles/Number/ParticlesNumber";
export * from "./Options/Classes/Particles/Number/ParticlesDensity";
export * from "./Options/Classes/Particles/Opacity/Opacity";
export * from "./Options/Classes/Particles/Opacity/OpacityAnimation";
export * from "./Options/Classes/Particles/Repulse/ParticlesRepulse";
export * from "./Options/Classes/Particles/Rotate/Rotate";
export * from "./Options/Classes/Particles/Rotate/RotateAnimation";
export * from "./Options/Classes/Particles/Shape/Shape";
export * from "./Options/Classes/Particles/Size/Size";
export * from "./Options/Classes/Particles/Size/SizeAnimation";
export * from "./Options/Classes/Particles/ZIndex/ZIndex";
export * from "./Options/Classes/Responsive";
export * from "./Options/Classes/Theme/Theme";
export * from "./Options/Classes/Theme/ThemeDefault";
export * from "./Options/Classes/ValueWithRandom";
export * from "./Options/Interfaces/Background/IBackground";
export * from "./Options/Interfaces/BackgroundMask/IBackgroundMask";
export * from "./Options/Interfaces/BackgroundMask/IBackgroundMaskCover";
export * from "./Options/Interfaces/FullScreen/IFullScreen";
export * from "./Options/Interfaces/IAnimatable";
export * from "./Options/Interfaces/IAnimatableColor";
export * from "./Options/Interfaces/IAnimatableGradient";
export * from "./Options/Interfaces/IAnimation";
export * from "./Options/Interfaces/IColorAnimation";
export * from "./Options/Interfaces/IHslAnimation";
export * from "./Options/Interfaces/IManualParticle";
export * from "./Options/Interfaces/IOptionLoader";
export * from "./Options/Interfaces/IOptions";
export * from "./Options/Interfaces/IOptionsColor";
export * from "./Options/Interfaces/IOptionsGradient";
export * from "./Options/Interfaces/IResponsive";
export * from "./Options/Interfaces/IValueWithRandom";
export * from "./Options/Interfaces/Interactivity/Events/IClickEvent";
export * from "./Options/Interfaces/Interactivity/Events/IDivEvent";
export * from "./Options/Interfaces/Interactivity/Events/IEvents";
export * from "./Options/Interfaces/Interactivity/Events/IHoverEvent";
export * from "./Options/Interfaces/Interactivity/Events/IParallax";
export * from "./Options/Interfaces/Interactivity/Modes/IAttract";
export * from "./Options/Interfaces/Interactivity/Modes/IBounce";
export * from "./Options/Interfaces/Interactivity/Modes/IBubble";
export * from "./Options/Interfaces/Interactivity/Modes/IBubbleBase";
export * from "./Options/Interfaces/Interactivity/Modes/IBubbleDiv";
export * from "./Options/Interfaces/Interactivity/Modes/IConnect";
export * from "./Options/Interfaces/Interactivity/Modes/IConnectLinks";
export * from "./Options/Interfaces/Interactivity/Modes/IGrab";
export * from "./Options/Interfaces/Interactivity/Modes/IGrabLinks";
export * from "./Options/Interfaces/Interactivity/Modes/ILight";
export * from "./Options/Interfaces/Interactivity/Modes/ILightArea";
export * from "./Options/Interfaces/Interactivity/Modes/ILightGradient";
export * from "./Options/Interfaces/Interactivity/Modes/ILightShadow";
export * from "./Options/Interfaces/Interactivity/Modes/IModeDiv";
export * from "./Options/Interfaces/Interactivity/Modes/IModes";
export * from "./Options/Interfaces/Interactivity/Modes/IPush";
export * from "./Options/Interfaces/Interactivity/Modes/IRemove";
export * from "./Options/Interfaces/Interactivity/Modes/IRepulse";
export * from "./Options/Interfaces/Interactivity/Modes/IRepulseBase";
export * from "./Options/Interfaces/Interactivity/Modes/IRepulseDiv";
export * from "./Options/Interfaces/Interactivity/Modes/ISlow";
export * from "./Options/Interfaces/Interactivity/Modes/ITrail";
export * from "./Options/Interfaces/Interactivity/IInteractivity";
export * from "./Options/Interfaces/Motion/IMotion";
export * from "./Options/Interfaces/Motion/IMotionReduce";
export * from "./Options/Interfaces/Particles/Bounce/IParticlesBounce";
export * from "./Options/Interfaces/Particles/Collisions/ICollisions";
export * from "./Options/Interfaces/Particles/Collisions/ICollisionsOverlap";
export * from "./Options/Interfaces/Particles/Destroy/IDestroy";
export * from "./Options/Interfaces/Particles/Destroy/ISplit";
export * from "./Options/Interfaces/Particles/IParticlesOptions";
export * from "./Options/Interfaces/Particles/IShadow";
export * from "./Options/Interfaces/Particles/IStroke";
export * from "./Options/Interfaces/Particles/Links/ILinks";
export * from "./Options/Interfaces/Particles/Links/ILinksShadow";
export * from "./Options/Interfaces/Particles/Links/ILinksTriangle";
export * from "./Options/Interfaces/Particles/Move/IMoveAttract";
export * from "./Options/Interfaces/Particles/Move/IMove";
export * from "./Options/Interfaces/Particles/Move/IMoveAngle";
export * from "./Options/Interfaces/Particles/Move/IMoveGravity";
export * from "./Options/Interfaces/Particles/Move/Path/IMovePath";
export * from "./Options/Interfaces/Particles/Move/IOutModes";
export * from "./Options/Interfaces/Particles/Move/ISpin";
export * from "./Options/Interfaces/Particles/Move/IMoveTrail";
export * from "./Options/Interfaces/Particles/Number/IParticlesDensity";
export * from "./Options/Interfaces/Particles/Number/IParticlesNumber";
export * from "./Options/Interfaces/Particles/Opacity/IOpacity";
export * from "./Options/Interfaces/Particles/Opacity/IOpacityAnimation";
export * from "./Options/Interfaces/Particles/Repulse/IParticlesRepulse";
export * from "./Options/Interfaces/Particles/Rotate/IRotate";
export * from "./Options/Interfaces/Particles/Rotate/IRotateAnimation";
export * from "./Options/Interfaces/Particles/Shape/ICharacterShape";
export * from "./Options/Interfaces/Particles/Shape/IImageShape";
export * from "./Options/Interfaces/Particles/Shape/IPolygonShape";
export * from "./Options/Interfaces/Particles/Shape/IShape";
export * from "./Options/Interfaces/Particles/Shape/IShapeValues";
export * from "./Options/Interfaces/Particles/Shape/IStarShape";
export * from "./Options/Interfaces/Particles/Size/ISize";
export * from "./Options/Interfaces/Particles/Size/ISizeAnimation";
export * from "./Options/Interfaces/Particles/ZIndex/IZIndex";
export * from "./Options/Interfaces/Theme/ITheme";
export * from "./Options/Interfaces/Theme/IThemeDefault";
export * from "./Types/RangeValue";
export * from "./Types/RecursivePartial";
export * from "./Types/ShapeData";
export * from "./Types/ShapeDrawerFunctions";
export * from "./Types/SingleOrMultiple";
export * from "./Types/PathOptions";
export * from "./Utils/CanvasUtils";
export * from "./Utils/ColorUtils";
export * from "./Utils/NumberUtils";
export * from "./Utils/OptionsUtils";
export * from "./Utils/Utils";
export { tsParticles };

/**
 * tsParticles source options alias type, supporting partial objects
 */
export type ISourceOptions = RecursivePartial<IOptions>;
export { IParticleTransformValues } from "./Core/Interfaces/IParticleTransformValues";
