import React from 'react'
import { FooterImgHolder , FooterDiv , FooterEnd ,FooterImage , FooterBtn , MarsImgHolder , ImgFooter, FooterHead, FooterSubHead} from './footerStyled'
import FooterLines from '../../assest/lines.png';
import MarsFooter from '../../assest/marsfooter.png'


export const Footer = () =>{
    return (
        <FooterDiv>
            <FooterImgHolder>
        <FooterImage src={FooterLines} alt="" />
            </FooterImgHolder>
        <FooterEnd>
            <MarsImgHolder>
                <ImgFooter src={MarsFooter} alt="" />
            </MarsImgHolder>
        <FooterHead>Mechatronics & Robotics Society</FooterHead>
        <FooterSubHead>Join our growing community of Robotics Enthusiasts</FooterSubHead>
        <FooterBtn>Join Now</FooterBtn>
        </FooterEnd>
      </FooterDiv>
    )
}