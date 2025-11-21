import React from 'react'
import './VideoBackground.css'

const VideoBackground = () => {
    return (
        <div className="video-background">
            <div className="video-overlay"></div>
            <video autoPlay loop muted playsInline className="video-content">
                <source src="/Minimalist_Green_Leaf_Animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default VideoBackground
