import { useVideoConfig, useCurrentFrame } from "remotion";
import karol from "./karol18.png";
import face from "./karol_head.png"
export const MyComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();
	const frame = useCurrentFrame();
	const rotate = frame % 2 === 0 ? '12%' : '17%';
	function scale (number:number, inMin:number, inMax:number, outMin:number, outMax:number) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
	const deg = scale(frame,1,60,0,360)
	const hFace = scale(frame,1,60,783,3000) 
	const left = scale(frame,1,60,1,90)
	const top = scale(frame,1,60,1,30)
 	return (
		<div style={{fontSize: '90px'}}>
		<img src={karol} alt="" style={{height: '100%', objectFit: 'cover'}}/>
		<img src={face} alt="" style={{position: 'absolute',top:`${15-top}%`,left:`${20 - left}%`,transform: `rotate(${deg}deg)`, height: hFace+`px`}}/>
		{/* transform: `rotate(${rotate}deg)` */}
		</div>
	)
};
