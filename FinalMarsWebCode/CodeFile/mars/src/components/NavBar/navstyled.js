import styled from 'styled-components'
import NulshockBold from '../../assest/font/nulshock bd.ttf';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  font-family: 'Nulshock';
  src: url(${NulshockBold}) format('truetype');
  z-index: 2;
`;

export const NavHolder = styled.div`
  width: 75%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  border-bottom-left-radius: 220px 200px;
  border-bottom-right-radius: 200px 200px;
  background-color: rgba(17,17,17,255);
  padding: 0px 45px;
  color: white;

  @media screen and (max-width: 1200px) {
    width: 75%;
  }
  @media screen and (max-width: 1080px) {
    width: 85%;
  }
  @media screen and (max-width: 720px) {
    width: 98%;
    font-size: 15px;
    padding: 0px 20px;
    height: 60px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 13px;
    padding: 0px 5px;
    height: 50px;
    border-bottom-left-radius: 120px 100px;
    border-bottom-right-radius: 100px 100px;
  }
`;

export const MarkNameHolder = styled.div`
  width: 350px;
  border-top: 110px solid #f16837;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px) {
    width: 200px;
    border-top:12px solid #f16837;
    border-top-width: 60px;
    border-left-width: 25px;
    border-right-width: 25px;
  }
  @media screen and (max-width: 500px) {
    width: 120px;
        border-top:12px solid #f16837;
    border-top-width: 36px;
    border-left-width: 10px;
    border-right-width: 10px;
  }
`;

export const NameHoder = styled.div`
  position: fixed;
  top: 20px;
  width: 150px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px) {
    width: 90px;
    height: 34px;
    top: 10px;
  }
`;

export const Img = styled.img`
  width: 110%;
  height: 100%;
  margin-top: 20px;

  @media screen and (max-width: 720px) {
    width: 80%;
    margin-top: 10px;
  }
`;

export const NavHeading = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
  font-weight: 800;
  &:hover {
    color: #f16837;
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    margin-top: 10px;
    font-size: 12px;
  }
`;
