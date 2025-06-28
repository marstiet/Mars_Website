import React ,{useState}from 'react';
import { NavWrapper,NavHolder , MarkNameHolder, NameHoder , NavHeading, Img } from './navstyled';
import { Link } from 'react-router-dom';
import MarkImg from '../../assest/MarkImg.png'

export const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
      if (window.scrollY >= 260) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }
  };
  window.addEventListener("scroll", changeNavbarColor);
    return (
        <NavWrapper style={{display:colorChange?'none' : ''}}>
        <NavHolder>
        <Link to='/' style={{textDecoration:'none' , color:'white'}} > <NavHeading>HOME</NavHeading></Link>
            <Link to='/achievement' style={{textDecoration:'none' , color:'white'}} ><NavHeading> ACHIEVEMENT </NavHeading></Link>
            <MarkNameHolder>
                <NameHoder>
                    <Img src={MarkImg} alt="Img" />
                </NameHoder>
            </MarkNameHolder>
            <Link to='/irc' style={{textDecoration:'none' , color:'white'}} ><NavHeading> IRC </NavHeading></Link>
            <Link to='/Ourteam' style={{textDecoration:'none' , color:'white'}} ><NavHeading> Our Team </NavHeading></Link>
        </NavHolder>
        </NavWrapper>
    )
}
