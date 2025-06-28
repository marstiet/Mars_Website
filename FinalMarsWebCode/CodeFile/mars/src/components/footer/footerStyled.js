import styled from "styled-components";
import NulshockBold from '../../assest/font/nulshock bd.ttf';

export const FooterImgHolder = styled.div`
  width: 200px;
  height: 200px;

  @media (max-width: 600px) {
    width: 100px;
    height: 150px;
  }
`

export const FooterImage = styled.img`
  width: 280px;
  height: 300px;

  @media (max-width: 600px) {
    width: 160px;
    height: 200px;
  }
`

export const FooterDiv = styled.div`
  height: 100px;
  color: white;

  @media (max-width: 600px) {
    height: 80px;
  }
`

export const FooterEnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -150px;

  @media (max-width: 600px) {
    margin-top: -120px;
  }
`

export const FooterHead = styled.h1`
  font-family: 'Nulshock';
  src: url(${NulshockBold}) format('truetype');
  font-size: 26px;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-top: 5px;
  }
`

export const FooterSubHead = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  font-family: "poppins";

  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 24px;
  }
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

  @media (max-width: 600px) {
    width: 100px;
    height: 32px;
    font-size: 13px;
    padding: 3px;
  }
`

export const ImgFooter = styled.img`
  width: 100%;
  height: 100%;
  margin-top: -20px;

  @media (max-width: 600px) {
    margin-top: -10px;
  }
`

export const MarsImgHolder = styled.div`
  width: 80px;
  height: 90px;

  @media (max-width: 600px) {
    width: 45px;
    height: 50px;
  }
`
