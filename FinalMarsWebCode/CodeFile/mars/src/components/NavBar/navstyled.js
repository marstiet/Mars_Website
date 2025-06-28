import styled from 'styled-components';

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(17, 17, 17, 1);
  display: flex;
  justify-content: center;
  z-index: 10;
  @media (max-width: 768px) {
    background-color: rgba(17, 17, 17, 0.95);
    backdrop-filter: blur(10px);
  }
`;

export const NavHolder = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 2rem;
  font-size: clamp(0.9rem, 1.1vw, 1.2rem);
  color: white;
  border-bottom-left-radius: 220vw 200vw;
  border-bottom-right-radius: 220vw 200vw;
  position: relative;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0.5rem 1rem;
    border-radius: 0;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    height: 50px;
  }

  .nav-links {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .desktop-only {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Hamburger = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 100;

    span {
      width: 28px;
      height: 3px;
      background: #fff;
      margin: 3px 0;
      border-radius: 2px;
      transition: all 0.3s;
      display: block;
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100vw;
    background: rgba(17, 17, 17, 0.99);
    gap: 1.5rem;
    padding: 1.5rem 0;
    z-index: 99;
    align-items: center;
    box-shadow: 0 4px 32px rgba(0,0,0,0.18);
    animation: fadeIn 0.3s;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;

export const MarkNameHolder = styled.div`
  width: 20vw;
  min-width: 120px;
  border-top: 110px solid #f16837;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 60px;
    border-top: 30px solid #f16837;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    margin: 0;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    width: 50px;
    border-top: 25px solid #f16837;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
  }

  @media (max-width: 360px) {
    width: 45px;
    border-top: 22px solid #f16837;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;

export const NameHoder = styled.div`
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 1px;
    width: 70%;
  }

  @media (max-width: 480px) {
    top: 1px;
    width: 75%;
  }

  @media (max-width: 360px) {
    top: 0px;
    width: 80%;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const NavHeading = styled.span`
  font-size: 1.2em;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0 0.8em;
  color: inherit;
  @media (max-width: 480px) {
    font-size: 1em;
    padding: 0 0.5em;
  }
`;
