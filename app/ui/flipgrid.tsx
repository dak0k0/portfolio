'use client'

import ImageFlip from "./imageflip";
import { useState, useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery'

export default function FlipGrid() {
    const delays = {
        0: "animation-delay-[0s]",
        1: "animation-delay-[0.1s]",
        2: "animation-delay-[0.2s]",
        3: "animation-delay-[0.3s]",
        4: "animation-delay-[0.4s]",
        5: "animation-delay-[0.5s]",
        6: "animation-delay-[0.6s]",
        7: "animation-delay-[0.7s]",
        8: "animation-delay-[0.8s]",
        9: "animation-delay-[0.9s]",
    }

    const imagePaths = [
        {"key": 0, "path": "/homepage/resized/1T7A9612.jpg", delay: 0}, 
        {"key": 1, "path": "/homepage/resized/96EAF42E-818B-4BD2-9948-4269460DC4C0.JPG", delay: 0}, 
        {"key": 2, "path": "/homepage/resized/CB15A4B8-5E9D-4264-AECB-A591128FFBC3.JPG", delay: 0}, 
        {"key": 3, "path": "/homepage/resized/Copy of IMG_0647.jpg", delay: 0}, 
        {"key": 4, "path": "/homepage/resized/Copy of IMG_5858.JPG", delay: 0}, 
        {"key": 5, "path": "/homepage/resized/Copy of IMG_7649.JPG", delay: 0}, 
        {"key": 6, "path": "/homepage/resized/IMG_0261.jpg", delay: 0}, 
        {"key": 7, "path": "/homepage/resized/IMG_0404.jpg", delay: 0}, 
        {"key": 8, "path": "/homepage/resized/IMG_0415.jpg", delay: 0}, 
        {"key": 9, "path": "/homepage/resized/IMG_0668.jpg", delay: 0}, 
        {"key": 10, "path": "/homepage/resized/IMG_0676.jpg", delay: 0}, 
        {"key": 11, "path": "/homepage/resized/IMG_0731.jpg", delay: 0}, 
        {"key": 12, "path": "/homepage/resized/IMG_0963.jpg", delay: 0}, 
        {"key": 13, "path": "/homepage/resized/IMG_1059.jpg", delay: 0}, 
        {"key": 14, "path": "/homepage/resized/IMG_1068.jpg", delay: 0}, 
        {"key": 15, "path": "/homepage/resized/IMG_1231.jpg", delay: 0}, 
        {"key": 16, "path": "/homepage/resized/IMG_1263.jpg", delay: 0}, 
        {"key": 17, "path": "/homepage/resized/IMG_1308.jpg", delay: 0}, 
        {"key": 18, "path": "/homepage/resized/IMG_1373.jpg", delay: 0}, 
        {"key": 19, "path": "/homepage/resized/IMG_1514.JPG", delay: 0}, 
        {"key": 20, "path": "/homepage/resized/IMG_1674.jpg", delay: 0}, 
        {"key": 21, "path": "/homepage/resized/IMG_1725.jpg", delay: 0}, 
        {"key": 22, "path": "/homepage/resized/IMG_6622.jpg", delay: 0}, 
        {"key": 23, "path": "/homepage/resized/IMG_7294.jpg", delay: 0}, 
    ]

    function setDelays(columns : number){
        for(let i = 0; i < imagePaths.length; i++){
            imagePaths[i].delay = (Math.floor(imagePaths[i].key / columns) + (imagePaths[i].key % columns))
        }
    }
    
    const matches1 = useMediaQuery('(max-width: 768px)');
    const matches2 = useMediaQuery('(max-width: 1024px)');

    if(matches1) {
        setDelays(3)
        return (
            <div className="fixed z-[-1] h-[86vh] grid grid-cols-3 overflow-hidden auto-rows-max">
                {imagePaths.map((image) => {
                    return(<ImageFlip key={image.key} src={image.path} delay={delays[image.delay as keyof typeof delays]} size={'size-[33.33vw]'}/>)
                })}
            </div>
        )
    } else if(matches2) {
        setDelays(4)
        return (
            <div className="h-[86vh] grid grid-cols-4 overflow-hidden auto-rows-max">
                {imagePaths.map((image) => {
                    return(<ImageFlip key={image.key} src={image.path} delay={delays[image.delay as keyof typeof delays]} size={'size-[25vw]'}/>)
                })}
            </div>
        )
    } else {
        setDelays(8)
        return (
            <div className="h-[calc(100vh-11rem)] grid grid-cols-8 overflow-hidden auto-rows-max">
                {imagePaths.map((image) => {
                    return(<ImageFlip key={image.key} src={image.path} delay={delays[image.delay as keyof typeof delays]} size={'size-[12.5vw]'}/>)
                })}
            </div>
        )
    }

    
}