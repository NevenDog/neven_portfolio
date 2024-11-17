import {useGLTF} from "@react-three/drei";
import {useMemo, useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {Float} from "@react-three/drei";
import {random} from "gsap/gsap-core";

const Target = (props) => {
    const targetRef = useRef();
    const model = useGLTF("/assets/models/Gondola.glb");
    const scene = useMemo(() => {
        return model.scene.clone()
    }, [model]);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min +1 )) + min;
    }

    useGSAP(()=>{
        const tl = gsap.timeline({repeat: -1})
        tl.to(targetRef.current.position, {
            y: targetRef.current.position.y + getRandomInt(-20,20),
            x: targetRef.current.position.x + getRandomInt(-20,20),
            z: targetRef.current.position.z + getRandomInt(-20,20),
            ease: "power1.inOut",
            duration: 6,
        })
        tl.to(targetRef.current.position, {
            y: targetRef.current.position.y,
            x: targetRef.current.position.x,
            z:targetRef.current.position.z,
            ease: "power1.inOut",
            duration:6,
        })
    });



    return (
        <Float floatIntensity={2} rotationIntensity={1} floatingRange={[-1,1]} speed={0.5}>
        <mesh {...props} ref={targetRef} rotation={[0, getRandomInt(1,2), 0]} scale={0.1}>
            <primitive object={scene}/>
        </mesh>
        </Float>
    )
}
export default Target;