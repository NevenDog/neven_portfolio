import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {Environment, PerspectiveCamera, Stars} from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader.jsx";
//import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../Constants/index.js";
import Target from "../Components/Target.jsx";
import Button from "../Components/Button.jsx";

const Hero = () => {
    // const controls = useControls("Room", {
    //     positionX:{value:2.5, min: -10, max: 10},
    //     positionY:{value:2.5, min: -10, max: 10},
    //     positionZ:{value:2.5, min: -10, max: 10},
    //     rotationX:{value:0,min:-10,max:10},
    //     rotationY:{value:0,min:-10,max:10},
    //     rotationZ:{value:0,min:-10,max:10},
    //     scale:{value:1,min:0.1,max:10},
    // })

    const isSmall = useMediaQuery({maxWidth:440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth:768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min +1 )) + min;
    }

    return (
        <section className="min-h-screen w-full flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 absolute top-1/2 inset-0 -translate-y-1/2 z-20">
                <p className="sm:text-5xl text-2xl font-medium text-white text-center font-generalsans">Hi, I'm Neven <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">ASPIRING 3D DEVELOPER</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/*<Leva/>*/}
                <Canvas className="w-full h-full">
                        <PerspectiveCamera makeDefault position={[0,0,20]}/>
                    <Suspense fallback={<CanvasLoader/>}>
                        {/*<Room*/}
                        {/*    scale={sizes.deskScale}*/}
                        {/*    position={sizes.deskPosition}*/}
                        {/*    rotation={[0, -Math.PI, 0]}*/}
                        {/*    //position={[controls.positionX, controls.positionY, controls.positionZ]}*/}
                        {/*    //rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}*/}
                        {/*    //scale={[controls.scale, controls.scale, controls.scale]}*/}
                        {/*    />*/}

                        <group>

                                <Environment preset={"sunset"}/>
                                <Stars radius={10} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                                <Target position={[getRandomInt(-10,10),getRandomInt(-10,10),getRandomInt(-5,5)]}/>
                                <Target position={[getRandomInt(-10,10),getRandomInt(-10,10),getRandomInt(-5,5)]}/>
                                <Target position={[getRandomInt(-10,10),getRandomInt(-10,10),getRandomInt(-5,5)]}/>
                                <Target position={[getRandomInt(-10,10),getRandomInt(-10,10),getRandomInt(-5,5)]}/>
                                <Target position={[getRandomInt(-10,10),getRandomInt(-10,10),getRandomInt(-5,5)]}/>
                                {/*<Cube position={sizes.cubePosition}/>*/}
                                {/*<Rings position={sizes.ringPosition}/>*/}

                        </group>
                    </Suspense>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10,10,10]} intensity={0.5}/>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Learn more about me!" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}
export default Hero