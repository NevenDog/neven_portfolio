import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

const Medal = (props) => {
    const { nodes, materials } = useGLTF("./Models/Medal.glb")
    const groupRef = useRef()

    function spin(){
            gsap.to(groupRef.current.rotation, {
                z: "+=" + Math.PI * 2,
                duration: 1,
                ease: "none"
            })
    }

    // useGSAP(() => {
    //     gsap.to(groupRef.current.rotation, {
    //         z: Math.PI * 2,
    //         duration: 4,
    //         repeat: 1,
    //         ease: "none"
    //     })
    // })

    return (
        <group ref={groupRef} {...props} dispose={null} onClick={spin}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Medal_Baked.geometry}
                material={materials['Medal_Baked.003']}
                position={[0, -0.075, 0]}
            />
        </group>
    )
}

useGLTF.preload("./Models/Medal.glb")

export default Medal;