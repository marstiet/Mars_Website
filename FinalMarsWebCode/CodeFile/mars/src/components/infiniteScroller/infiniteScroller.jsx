import React from 'react'
import './infiniteScroller.css'
import { Banner } from "./Banner";
import ScrollerImgOne from './InfiniteScrollerImg/WhatsApp Image 2025-04-02 at 10.55.21 PM (1).jpeg'
import ScrollerImgTwo from './InfiniteScrollerImg/WhatsApp Image 2025-04-02 at 10.55.21 PM (2).jpeg'
import ScrollerImgThree from './InfiniteScrollerImg/WhatsApp Image 2025-04-02 at 10.55.21 PM.jpeg'
import ScrollerImgFour from './InfiniteScrollerImg/WhatsApp Image 2025-04-02 at 10.55.22 PM.jpeg'
import ScrollerImgFive from './InfiniteScrollerImg/WhatsApp Image 2025-04-02 at 10.55.23 PM.jpeg'


export const InfiniteScroller = ()=>{
    const images = [
        ScrollerImgOne,
        ScrollerImgTwo,
        ScrollerImgThree,
        ScrollerImgFour,
        ScrollerImgFive,
        ScrollerImgOne,
        ScrollerImgTwo,
        ScrollerImgThree,
        ScrollerImgFour,
        ScrollerImgFive
            ].map((image) => ({
                id: crypto.randomUUID(),
                image
              }));
    return(
        <>
      <Banner images={images} speed={5000} />
        </>

    )
}