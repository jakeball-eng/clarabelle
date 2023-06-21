import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpa } from '@fortawesome/free-solid-svg-icons'

export default function LoginLogo() {

    const [circleWidth, setCircleWidth] = useState(window.innerWidth);
    const [circleTop, setCircleTop] = useState(0);
    const [circleLeft, setCircleLeft] = useState(0);
    const [iconLeft, setIconLeft] = useState(0);
    const [iconSize, setIconSize] = useState(64);
    const [iconTop, setIconTop] = useState(0);

    useEffect(() => {
        const handleResize = () => {

            const newCircleWidth = window.innerWidth * 1.5;

            setCircleLeft((newCircleWidth - window.innerWidth) / 2);
            setCircleWidth(newCircleWidth);
            setCircleTop(newCircleWidth * 0.7);
            setIconLeft((window.innerWidth - iconSize) / 2);
            setIconTop(((newCircleWidth - window.innerWidth) / 2) - iconSize)
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        // Clean up function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>
        <div style={{
            width: `${circleWidth}px`,
            height: `${circleWidth}px`,
            top: `-${circleTop}px`,
            left: `-${circleLeft}px`
        }} className="absolute rounded-full bg-primary">
        </div>
            <FontAwesomeIcon className="absolute text-white h-16" icon={faSpa} style={{
                left: `${iconLeft}px`,
                height: `${iconSize}px`,
                top: `${iconTop}px`
            }} />
    </>
}