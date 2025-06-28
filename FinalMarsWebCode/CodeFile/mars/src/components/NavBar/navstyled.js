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

`

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
color:white;
@media screen and (max-width: 1200px ) {
    width: 75%;
}
@media screen and (max-width: 1080px ) {
    width: 85%;
}
@media screen and (max-width: 720px ) {
    width: 95%;
}
`

export const MarkNameHolder = styled.div`
width: 350px;
background-color: orange;
border-top: 110px solid #f16837;
border-left: 50px solid transparent;
border-right: 50px solid transparent;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
`

export const NameHoder = styled.div`
position: fixed;
top: 20px;
width: 150px;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
`
export const Img = styled.img`
width: 110%;
height: 100%;
margin-top: 20px;
`

export const NavHeading = styled.div`
margin-top:30px;
display: flex;
justify-content: center;
letter-spacing: 1px;
font-weight: 800;
&:hover{
color: #f16837;
cursor: pointer;
}
`
