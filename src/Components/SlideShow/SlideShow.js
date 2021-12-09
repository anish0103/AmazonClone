import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./SlideShow.css"

const slideImages = [
    "https://m.media-amazon.com/images/I/61oybxyYQIL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61QBE9aVaXL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61A8sLNUoyL._SX3000_.jpg"
];

const SlideShow = () => {
    return (
        <div>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>

                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>

                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>

                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}>

                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default SlideShow
