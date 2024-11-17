import React, {Suspense, useState} from 'react';
import Globe from "react-globe.gl";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import Neco from "../Components/Neco.jsx";
import Medal from "../Components/Medal.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("DOG");

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    return (
        <section className="c-space py-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="w-full sm:h-[276px] h-fit object-contain">
                            <Canvas>
                            <ambientLight intensity={2}/>
                            <spotLight position={[10, 10, 10]} angle={0.15} penubra={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={1}/>
                            <Suspense fallback={<CanvasLoader/>}>
                                <Medal scale={3} rotation={[Math.PI/2,0,0]}/>
                            </Suspense>
                            </Canvas>
                        </div>
                        {/*<img src="/assets/funny%20painting.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>*/}
                        <div>
                            <p className="grid-headtext">Hi, I'm Neven</p>
                            <p className="grid-subtext">Welcome to my portfolio, here you can find more info about
                                myself. If you're looking for my works just scroll a bit down below.</p>
                            <p className="grid-subtext">Also, try clicking my face :)</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/3D_Dev.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Blender, Unity and a bit of front end dev</p>
                            <p className="grid-subtext">That's what I specialize in, always striving for improvement</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm-h-[326px] h-fit flex justify-center items-center">
                            <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            // labelsData={[{lat:0, lng: 0, text:"I'm here!",color:"white",size:20}]}
                            />
                        </div>
                        <div>
                           <p className="grid-headtext">Open for work anytime</p>
                           <p className="grid-subtext">I'm based in Italy but I'm available for remote work in any part of the globe, or even non remote, I would love to travel around.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">My passion for 3D Development</p>
                            <p className="grid-subtext">Aspiring 3D Developer specializing in interactive experiences and digital content creation. With expertise in Blender, Unity, and front-end development, I bridge the gap between 3D artistry and technical implementation to create engaging digital solutions. Whether it's crafting detailed 3D assets, developing interactive applications, or building web-based experiences, I bring ideas to life across the full development pipeline.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/neco_mail.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object.top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Copy my e-mail!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;