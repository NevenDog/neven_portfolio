import React, {useEffect, useRef} from 'react'
import {useAnimations, useFBX ,useGLTF} from '@react-three/drei'

const Neco = ({animationName = "idle", ...props}) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('src/Models/NecoArc/Neco.glb')

    const {animations:idleAnimation}= useFBX("src/Models/NecoArc/Idle.fbx");

    idleAnimation[0].name = "idle";

    const {actions} = useAnimations([idleAnimation[0]], group);

    useEffect(() => {
        actions[animationName].reset().play();

        return () => actions[animationName];
    }, [animationName])

    return (
        <group {...props} dispose={null} ref={group}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.None}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.None}
                />
            </group>
        </group>
    )
}

useGLTF.preload('src/Models/NecoArc/Neco.glb')

export default Neco;


