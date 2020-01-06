import React, {useState} from 'react'
import styled from 'styled-components';
import { MobileView } from "react-device-detect";
import MobileNavOpened from './MobileNavOpened';
import MobileBottomNavigation from './MobileBottomNavigation';

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  height: 50px;
  width: 100%;
  background: #363333;
  color: #fff;
  box-shadow: 0 2px 3px -1px rgba(0,0,0,.6);
`;

const Wrapper = styled.div`

  height: 50px;
  display: flex; flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 10px;
  &>div{
    background: #433838;
  }
  .mobile-logo{
    width: 45px; height: 45px;
    border-top-right-radius: 10px;
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile-business-name{
    padding: 2.5px 10px;
    border: 2px solid #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .mobile-hamburger{

    .menu-btn{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px; height: 45px;
      cursor: pointer;
      transition: all .5s ease-in-out;
      border-top-left-radius: 10px;
      border: 2px solid #fff;

      &__burger{
        width: 30px;
        height: 4px;
        background: #fff;
        border-radius: 5px;
        transition: all .5s ease-in-out;
        &::before, &::after{
          content: '';
          position: absolute;
          width: 30px;
          height: 4px;
          background: #fff;
          border-radius: 5px;
          transition: all .5s ease-in-out;
        }
        &::before{
          transform: translateY(-12px);
        }
        &::after{
          transform: translateY(12px);
        }
      }
    }

    /* ANIMATION */
    .burger-open .menu-btn__burger{
      transform: translateX(-50px);
      background: transparent;
    }
    .burger-open .menu-btn__burger::before{
      transform: rotate(45deg) translate(35px, -35px);
    }
    .burger-open .menu-btn__burger::after{
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }
`;

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closedModal, setClosedModal] = useState(false);
  const [block, setBlock] = useState(false);

  const openMobileMenu = () => {
    if(block) return

    setBlock(true);

    setTimeout(()=>{
      setBlock(false);
    }, 750);

    if(!menuOpen){
      setMenuOpen(true);
      setClosedModal(true);
    }    

    if(menuOpen && closedModal){
      setMenuOpen(false);
      setTimeout(()=>{
        setClosedModal(false);
      }, 500)
    }
  }

  // console.log(menuOpen);
  return (
    <MobileView>
      <Container>

        <Wrapper isOpen={menuOpen}>

          <div className="mobile-logo">logo</div>
          <div className="mobile-business-name"><h2>Business_name</h2></div>
          <div className="mobile-hamburger" onTouchEnd={openMobileMenu}>
            <div className={`menu-btn ${menuOpen ? 'burger-open' : null}`}>
              <div className="menu-btn__burger"></div>
            </div>
          </div>

        </Wrapper>

      </Container>

      {/* modal */}
      { (menuOpen || closedModal) && ( <MobileNavOpened setMenuOpen={setMenuOpen} menuOpen={menuOpen} openMobileMenu={openMobileMenu} />) }

      {/* bottom menu */}
      <MobileBottomNavigation />
    </MobileView>
  )
}

export default MobileNav
