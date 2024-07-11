import Image from "next/image";

export default function ImageFlip(props: {src: string, delay: string, size: string}) {
    
    return (
        <div className="perspective-1000">
            <div className={`transform-style-3d animate-flip ${props.delay}`}>
                <div className="bg-offwhite backface-hidden"></div>
                <div className={`backface-hidden rotate-y-180 rotate-90 ${props.size} overflow-hidden relative`}><Image src={props.src} alt="" fill={true} sizes="(max-width: 768px) 33.33vw (max-width: 1200px) 12.5vw" className="object-cover"/></div>
            </div>
        </div>
    );
}