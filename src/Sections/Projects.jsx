import React, {Suspense, useState} from 'react';
import {myProjects} from "../Constants/index.js";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import DemoComputer from "../Components/DemoComputer.jsx";

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

    const [selectedProjectImageIndex, setSelectedProjectImageIndex] = useState(0)
    
    const currentProject = myProjects[selectedProjectIndex];

    const imageCount = currentProject.image.length ? currentProject.image.length : 0;

    const currentImage = currentProject.image[selectedProjectImageIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectImageIndex(0);
        setSelectedProjectIndex((prevIndex) => {
            if(direction === "previous"){
                return prevIndex === 0 ? projectCount -1 : prevIndex -1;
            } else {
                return prevIndex === projectCount -1 ? 0 : prevIndex + 1;
            }
        })
    }

    const handleImageNav = (direction) => {
        setSelectedProjectImageIndex((prevIndex) => {
            if(direction === "previous"){
                return prevIndex === 0 ? imageCount -1 : prevIndex -1;
            } else {
                return prevIndex === imageCount -1 ? 0 : prevIndex + 1;
            }
        })
    }

    return (
        <section className="c-space py-20" id="work">
            <p className="head-text">My Work!</p>

            <div className="grid lg:grid-cols-3 grid-cols-1 mt-12 gap-5 w-full">
                <div className="lg:col-span-1 flex flex-col gap-5 relative sm:10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name}/>
                                </div>
                                ))}
                        </div>

                        <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" className="h-3 w-3" alt="arrow" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-16">
                        <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation("next")}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                </div>

                <div className="relative lg:col-span-2 border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <img className="absolute object-contain h-full w-full" src={currentImage ? currentImage.path : "public/assets/Failsafe.jpg"} alt={currentProject.title}/>

                    <div className="absolute w-full flex justify-between items-center bottom-0 p-4">
                        <button className="arrow-btn" onClick={() => handleImageNav("previous")}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
                        </button>
                        <button className="arrow-btn" onClick={() => handleImageNav("next")}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Projects;