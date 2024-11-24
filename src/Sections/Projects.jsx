import React, { Suspense, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { myProjects } from "../Constants/index.js";

const projectCount = myProjects.length;

// Memoized carousel image component with prop types
const LazyCarouselImage = memo(({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading="eager"
        />
    );
});

LazyCarouselImage.displayName = 'LazyCarouselImage';
LazyCarouselImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string
};

// Memoized carousel video component with prop types
const LazyCarouselVideo = memo(({ src, className, controls, onPlay, onPause, onEnded }) => {
    return (
        <video
            src={src}
            className={className}
            controls={controls}
            onPlay={onPlay}
            onPause={onPause}
            onEnded={onEnded}
            preload="auto"
        >
            Your browser does not support the video tag.
        </video>
    );
});

LazyCarouselVideo.displayName = 'LazyCarouselVideo';
LazyCarouselVideo.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    controls: PropTypes.bool,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onEnded: PropTypes.func
};

// Loading placeholder component with display name
const CarouselLoadingPlaceholder = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-black-200">
        <div className="animate-pulse w-12 h-12 rounded-full border-4 border-white border-t-transparent"/>
    </div>
);

CarouselLoadingPlaceholder.displayName = 'CarouselLoadingPlaceholder';

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const [selectedProjectImageIndex, setSelectedProjectImageIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentProject = myProjects[selectedProjectIndex];
    const mediaCount = currentProject.media?.length || 0;
    const currentMedia = currentProject.media?.[selectedProjectImageIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectImageIndex(0);
        setIsPlaying(false);
        setSelectedProjectIndex((prevIndex) => {
            if(direction === "previous"){
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const handleMediaNav = (direction) => {
        setIsPlaying(false);
        setSelectedProjectImageIndex((prevIndex) => {
            if(direction === "previous"){
                return prevIndex === 0 ? mediaCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === mediaCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const renderCarouselMedia = () => {
        if (!currentMedia) {
            return (
                <Suspense fallback={<CarouselLoadingPlaceholder />}>
                    <LazyCarouselImage
                        src="/assets/Failsafe.jpg"
                        alt="fallback"
                        className="absolute object-contain h-full w-full"
                    />
                </Suspense>
            );
        }

        if (currentMedia.type === 'video') {
            return (
                <Suspense fallback={<CarouselLoadingPlaceholder />}>
                    <LazyCarouselVideo
                        src={currentMedia.path}
                        className="absolute object-contain h-full w-full"
                        controls={true}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => setIsPlaying(false)}
                    />
                </Suspense>
            );
        }

        return (
            <Suspense fallback={<CarouselLoadingPlaceholder />}>
                <LazyCarouselImage
                    src={currentMedia.path}
                    alt={currentProject.title}
                    className="absolute object-contain h-full w-full"
                />
            </Suspense>
        );
    };

    return (
        <section className="c-space py-20" id="work">
            <p className="head-text">My Work!</p>

            <div className="grid lg:grid-cols-3 grid-cols-1 mt-12 gap-5 w-full">
                <div className="lg:col-span-1 flex flex-col gap-5 relative sm:10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img
                            src={currentProject.spotlight}
                            alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img
                            src={currentProject.logo}
                            alt="logo"
                            className="w-10 h-10 shadow-sm"
                        />
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

                        <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p>Check out more!</p>
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
                    {renderCarouselMedia()}

                    <div className="absolute w-full flex justify-between items-center bottom-40 p-4">
                        <button
                            className="arrow-btn"
                            onClick={() => handleMediaNav("previous")}
                            disabled={isPlaying}
                        >
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4"/>
                        </button>
                        <button
                            className="arrow-btn"
                            onClick={() => handleMediaNav("next")}
                            disabled={isPlaying}
                        >
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

Projects.displayName = 'Projects';

export default Projects;