import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BadgeModal from "./Badge";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, leetcode100, leet50, leetjuly } from "../assets";

const lightThemeColor = "#915eff"; // Your desired text color for the light theme
const lightThemeShadowColor = "rgba(145, 94, 255, 0.3)"; // Adjust the shadow color's alpha (opacity) as needed for light theme

// For dark theme
const darkThemeColor = "#ffffff"; // Your desired text color for the dark theme
const darkThemeShadowColor = "rgba(255, 255, 255, 0.3)"; // Adjust the shadow color's alpha (opacity) as needed for dark theme

const textStyle = {
  fontSize: '2em',
  cursor: 'pointer',

};

const spanStyle = {
  textShadow: `0 0 5px ${lightThemeShadowColor}, 0 0 15px ${lightThemeShadowColor}, 0 0 20px ${lightThemeShadowColor}, 0 0 40px ${lightThemeShadowColor}, 0 0 60px ${lightThemeShadowColor}, 0 0 10px ${lightThemeShadowColor}, 0 0 98px ${lightThemeShadowColor}`,
  color: lightThemeColor,



};

const ggg = {
  textShadow: `0 0 5px ${lightThemeShadowColor}, 0 0 15px ${lightThemeShadowColor}, 0 0 20px ${lightThemeShadowColor}, 0 0 40px ${lightThemeShadowColor}, 0 0 60px ${lightThemeShadowColor}, 0 0 10px ${lightThemeShadowColor}, 0 0 98px ${lightThemeShadowColor}`,
  color: lightThemeColor,



};


const onuStyle = {
  textShadow: `0 0 5px ${darkThemeShadowColor}, 0 0 15px ${darkThemeShadowColor}, 0 0 20px ${darkThemeShadowColor}, 0 0 40px ${darkThemeShadowColor}, 0 0 60px ${darkThemeShadowColor}, 0 0 10px ${darkThemeShadowColor}, 0 0 98px ${darkThemeShadowColor}`,
  color: darkThemeColor,

};

const badges = [
  { src: leetcode100, alt: 'leet100' },
  { src: leet50, alt: 'leet50' },
  { src: leetjuly, alt: 'leetjuly' },
  // Add more badges as needed
];


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);

  const handleBadgeClick = (badgeSrc) => {
    setSelectedBadge(badgeSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBadge(null);
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black/20 `}>
      <div className='w-full flex justify-between items-center max-w-7x mx-auto'>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setAct("")
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
          {/* <p className="text-white text-[18px] font-bold cursor-pointer flex relative" style={textStyle}> <span className="text-[30px]">S</span><span className="flex absolute left-5 top-3 ">onu</span> &nbsp;
          <span className="sm:block hidden">  </span></p> */}
          <div className="text-white ">
            <p className="cursor-pointer " style={textStyle}>
              <span className="text-[40px] font-bold flex absolute top-[.2em]  " style={spanStyle}>S</span>
              <span style={onuStyle} className="flex absolute top-[.5em] left-[2.6em]" >onu.</span>
              {/* <span className=" w-[4.3em] h-[1.5px] flex absolute  bg-white/50 left-[.5em] top-[1.8em]"></span> */}
              <span className=" w-[1.2em] h-[1.2em] flex absolute  bg-white/50 rounded-full border-2 border-white-100 left-[.5em] top-[.5em] justify-center " style={ggg}>🧑‍💻</span>
              {/* <span className="z-5"> 🧑‍💻</span> */}
            </p>
          </div>
        </Link>




        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {badges.map((badge, index) => (
            <img
              key={index}
              src={badge.src}
              alt={badge.alt}
              onClick={() => handleBadgeClick(badge.src)}
              style={{ cursor: 'pointer', maxWidth: '40px', maxHeight: '100px' }}

            />
          ))}


          {navLinks.map((nav) => (

            <li key={nav.id}

              className={`${active === nav.title ?
                "text-white"
                : "text-secondary"} hover:text-white text-[18px]
          font-medium cursor-pointer` }
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>

          ))}

        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28x] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {toggle && <div className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] 7-10 rounded-xl">
            <ul className='list-none flex justify-end items-start flex-col gap-4 '>
              {navLinks.map((nav) => (

                <li key={nav.id}

                  className={`${active === nav.title ?
                    "text-white"
                    : "text-secondary"} hover:text-white text-[18px]
          font-medium cursor-pointer font-poppins font-medium cursor-pointer text-[16x]` }

                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }
                  }
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>

              ))}
            </ul>


          </div>
          }

        </div>
      </div>
      <BadgeModal isOpen={modalIsOpen} onClose={closeModal} badgeSrc={selectedBadge} />
    </nav>
  )
}

export default Navbar;

