import React, { useState,useEffect,useRef } from 'react';
import {AiOutlineRightCircle,AiOutlineLeftCircle} from "react-icons/ai";

const featuredImages = [
    "images/about-bg.jpg",
    "images/bg.jpg",
];
 
let count = 0;
let slideInterval;
export default function Slider() {
    const [currentIndex, setCurrentIndex] =useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    }

    useEffect(() => {
        slideRef.current.addEventListener("animationed", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return() => {
            pauseSlider();
        }
    }, []);
    
    const startSlider = () => {
        slideInterval = setInterval(() => {
        handleOnNextClick();
        }, 4000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    }
        const handleOnNextClick = () => {
            count = (count + 1) % featuredImages.length;
            setCurrentIndex(count);

            slideRef.current.classList.add("fade-anim");
        };
        const handleOnPrevClick = () => {
            const productLength = featuredImages.length;
            count = (currentIndex + productLength - 1) % productLength;
            setCurrentIndex(count);
            slideRef.current.classList.add("fade-anim");    
        }; 
    return(
        <div ref={slideRef} className="w-full select-none mx-auto relative">
            <div className=" asspect-w-16 asspect-h-9" >
            <img className="" src={featuredImages[currentIndex]} alt="Hero" style={{width: "1920px"}} /> 
            </div>
            <div className="text-white absolute mx w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button onClick={handleOnPrevClick}><AiOutlineLeftCircle size={30} />
                </button>
                <button onClick={handleOnNextClick}>
                    <AiOutlineRightCircle size={30} />
                </button>
            </div>

        </div>

    ) 
    
}
