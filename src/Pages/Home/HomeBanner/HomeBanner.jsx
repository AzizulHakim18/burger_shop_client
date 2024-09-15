import React from 'react';
import './HomeBanner.css'
import { Link } from 'react-router-dom';


const HomeBanner = () => {
    return (
        <div>
            <section className='absolute  h-screen top-0 z-0'>
                <div className="scroll text1">
                    <div>
                        BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span>
                    </div>
                    <div>
                        BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span>
                    </div>
                </div>
                <div className="scroll text2">
                    <div>
                        BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span>
                    </div>
                    <div>
                        BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span>
                    </div>
                </div>
                <div className="scroll text3">
                    <div>
                        BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span>
                    </div>
                    <div>
                        BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span>
                    </div>
                </div>
                <div className="scroll text4">
                    <div>
                        BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span>
                    </div>
                    <div>
                        BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span>
                    </div>
                </div>
                <div className="scroll text5">
                    <div>
                        BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span>
                    </div>
                    <div>
                        BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span> BURGER <span>SHOP - </span>
                    </div>
                </div>
                <div className='flex justify-center items-center'> <Link to="/menu" className="mouse">Get Start</Link></div>
            </section>
        </div>
    );
};

export default HomeBanner;