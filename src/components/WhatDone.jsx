import React, { useState } from 'react';
import Experience from './Experience';
import Experience2 from './Experience2';
import Experience3 from './Experience3';
import { Link } from 'react-router-dom';
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

function WhatDone() {
    const [activeTab, setActiveTab] = useState("Education");



    return (


        <div>
            <div variants={textVariant()} className='mb-5'>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>

            </div>

            <div className='flex flex-row justify-evenly text-white font-bold text-[30px] '>

                <h1
                    className={` transition-shadow  hover:border-b-2 hover:border-[#915eff]   cursor-pointer ${activeTab === 'Education' ? 'border-b-2  border-[#915eff]' : ''
                        }`}
                    onClick={() => setActiveTab('Education')}
                >
                    Education
                </h1>

                <h1
                    className={` transition-shadow hover:border-b-2  hover:border-[#915eff]  cursor-pointer ${activeTab === 'Certification' ? 'border-b-2 border-[#915eff]' : ''
                        }`}
                    onClick={() => setActiveTab('Certification')}
                >
                    Certification
                </h1>
                <h1
                    className={` transition-shadow hover:border-b-2  hover:border-[#915eff] cursor-pointer ${activeTab === 'Work Experience' ? 'border-b-2  border-[#915eff]' : ''
                        }`}
                    onClick={() => setActiveTab('Work Experience')}
                >
                    Work Experience
                </h1>
            </div>

            <div className='m-5 mb-10'>




                {activeTab === 'Education' && <Experience />}
                {activeTab === 'Certification' && <Experience2 />}
                {activeTab === 'Work Experience' && <Experience3 />}

            </div>
        </div >
    );
}


export default WhatDone;
