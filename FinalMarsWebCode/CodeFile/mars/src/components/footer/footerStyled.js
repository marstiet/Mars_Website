import styled from "styled-components";
import NulshockBold from '../../assest/font/nulshock bd.ttf';

export const FooterImgHolder = styled.div`
width: 200px;
height: 200px;
`

export const FooterImage = styled.img`
width: 280px;
height: 300px;
`

export const FooterDiv = styled.div`
height: 100px;
color: white;
`

export const FooterEnd = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: -150px;
`
export const FooterHead = styled.h1`
font-family: 'Nulshock';
    src: url(${NulshockBold}) format('truetype');
    font-size: 26px;
    margin-top: 10px;
`
export const FooterSubHead = styled.h2`
font-size: 20px;
font-weight: 600;
line-height: 40px;
font-family: "poppins";
`

export const FooterBtn = styled.button`
padding: 15px;
background-color: #fe6e3a;
border-radius: 5px;
width: 150px;
height: 40px;
font-weight: bold;
font-size: 17px;
border: none;
padding: 5px;
margin-top: 14px;
font-family: 'Nulshock';
    src: url(${NulshockBold}) format('truetype');
`

export const ImgFooter = styled.img`
width: 100%;
height: 100%;
margin-top: -20px;
`
export const MarsImgHolder = styled.div`
width: 80px;
height: 90px;
`