import React from 'react'
import Lottie from 'react-lottie';
import animationData1 from '../assets/lottie/animation_ln2hx9ej.json';
import animationData2 from '../assets/lottie/animation_ln2hxi7q.json';
import animationData3 from '../assets/lottie/animation_ln2hxojr.json';
import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { TypeAnimation } from 'react-type-animation';
import { key, code, lap, lap2, exp, pc, tech } from '../assets'
const textColor = "#915eff"; // Your desired text color
const shadowColor = "rgba(145, 94, 255, .4)"; // Adjust the shadow color's alpha (opacity) as needed
const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3, // Delay before the animation starts
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 1, // Delay before the animation starts
    },
  },
};
const textStyle = {
  textShadow: `0 0 5px ${shadowColor}, 0 0 15px ${shadowColor}, 0 0 20px ${shadowColor}, 0 0 40px ${shadowColor}, 0 0 60px ${shadowColor}, 0 0 10px ${shadowColor}, 0 0 98px ${shadowColor}`,
  color: textColor,
  fontSize: '1.8em',

};
const name = "{Sonu}"

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <section className='relative  w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-w-7x1 mx-auto flex flow-row items-start justify-start gap-5 `}>

        <div className='w-1/2 h-1/2 flex gap-5 mx-auto'>
          <div className='flex flex-col justify-center items-center mt-5'>


          </div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.div initial="hidden"
              animate="show"
              variants={containerVariants}>
              <TypeAnimation
                className="mt-5 text-[#915eff]"
                style={textStyle}
                sequence={[
                  // Types 'One'
                  'Hello World',
                  1000,
                  () => {
                    console.log('Sequence completed');
                  },
                ]}
                wrapper="span"
              />
              <motion.h1 initial="hidden"
                animate="show"
                variants={containerVariants} className={`${styles.heroHeadText}`}>I'm <span className="text-[#915eff]">{name}</span></motion.h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>NIT Kurukshetra | CSE Student</p>
              <span className="mx-1 text-[2em]"> &gt; </span>
              <TypeAnimation
                className="mt-5 text-[#915eff] "
                style={textStyle}
                sequence={[
                  // Types 'One'
                  'Frontend Developer',
                  1000,
                  'Backend Developer',
                  1000,
                  'Problem Solver',
                  1000,
                  () => {
                    console.log('Sequence completed');
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </motion.div>
            <div className='transition duration-200 delay-100 gap-10 mt-10  ' >
              <div className='flex flex-col justify-center w-[100%] gap-2'>
                <h1 className='text-[#915eff] font-bold text-[30px] text-center'>Looking for internship.</h1>

                <div className='duration-300 delay-75 flex justify-center hover:mt-1 mt-5 '>

                  <div className='flex justify-center green-pink-gradient rounded-md  z-[100]   w-1/2 h-1/2'>

                    {/* <button className='transition ease-in delay-50  duration-300 bg-tertiary w-full  rounded-md m-[1px] hover:color-tertiary  p-3 font-bold '>DOWNLOAD RESUME</button>
                     */}

                    <a href='https://drive.google.com/file/d/1kPK1M_IOWosGk-Xz31vb9M3vtk1HvMZe/view?usp=sharing' className='transition ease-in delay-50  duration-300 bg-tertiary w-full  rounded-md m-[1px] hover:animate-bounce  p-3 font-bold text-center' >DOWNLOAD NOW </a>



                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        <div className='hidden xl:flex  xl:absolute  xl:bottom-[-500px] xl:right-0  justify-center content-center mix-blend-color-dodge brightness-50 animate-pulse'>
          <img className=' flex ' src={lap2}></img>
        </div>



        <div className='w-1/2 xl:w-1/4 fixed left-[-50px] bottom-[-50px] z-[0] opacity-40' >
          <Lottie
            options={defaultOptions}



          />
        </div>
        <div className='w-1/2 flex opacity-75 '>
          <div className='justify-center content-center w-full ' >
            <Lottie

              options={defaultOptions2}



            />
          </div>

        </div>


        {/* <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerVariants}
            >
              <TypeAnimation
                className="mt-5 text-[#915eff]"
                style={textStyle}
                sequence={[
                  // Types 'One'
                  'Hello World',
                  1000,
                  () => {
                    console.log('Sequence completed');
                  },
                ]}
                wrapper="span"
              />
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={staggerVariants}
              className={`${styles.heroHeadText}`}
            >
              I'm <span className="text-[#915eff]">{name}</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={staggerVariants}
              className={`${styles.heroSubText} mt-2 text-white-100`}
            >
              NIT Kurukshetra | CSE Student
            </motion.p>

            <motion.span
              initial="hidden"
              animate="show"
              variants={staggerVariants}
              className="mx-1 text-[2em]"
            >
              {' > '}
            </motion.span>

            <motion.div
              initial="hidden"
              animate="show"
              variants={staggerVariants}
              className="w-1/2 h-1/2 flex justify-start items-start bg-black"
            >
              <div className="badge-base LI-profile-badge mx-auto p-0 flex justify-center bg-black items-center" data-locale="en_US" data-size="large" data-theme="dark" data-type="verticle" data-vanity="sonu-singh-5a602a119" data-version="v1">
                <a className="badge-base__link LI-simple-link hidden p-0 m-0 bg-black" href="https://in.linkedin.com/in/sonu-singh-5a602a119?trk=profile-badge">Sonu Singh</a>
              </div>
            </motion.div>
          </motion.div>

        </div> */}


        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            {/* <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={
                  {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }
                }
                className='w-3 h-3 rounded-full bg-secondary mb-1 '
              />
            </div> */}

          </a>
        </div>
      </div>

    </section >

  )
}

export default Hero;