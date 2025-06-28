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
    flex-direction: row;
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
  height: auto;
  max-height: 80px;
  object-fit: contain;

  @media (max-width: 768px) {
    max-height: 20px;
  }

  @media (max-width: 480px) {
    max-height: 18px;
  }

  @media (max-width: 360px) {
    max-height: 16px;
  }
`;

export const NavHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;
  white-space: nowrap;

  &:hover {
    color: #f16837;
  }

  @media (max-width: 768px) {
    font-size: clamp(0.8rem, 3vw, 1rem);
    padding: 0.25rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.7rem, 3.5vw, 0.9rem);
    letter-spacing: 0.01em;
  }

  @media (max-width: 360px) {
    font-size: clamp(0.65rem, 4vw, 0.8rem);
  }
`;

// Additional helper component for better mobile navigation
export const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0.8rem;
    flex-wrap: wrap;
    justify-content: flex-end;
    flex: 1;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    font-size: 0.8rem;
  }
`;

// Mobile menu toggle (if you need a hamburger menu later)
export const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: ${props => props.showOnMobile ? 'block' : 'none'};
  }
`;
