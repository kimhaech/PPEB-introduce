import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const About_leader = () => {
  return (
    <div>
        <Header />
        <div class="mt-24">
            <div className="flex flex-col text-center w-full">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                About
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                학회소개
              </h1>
            </div>
            <div className="flex flex-row place-content-center mt-8">
                <Link to="/About">
                    <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        학회소개
                    </button>
                </Link>
                <Link to="/About_activity">
                    <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        학회활동
                    </button>
                </Link>
                    <Link to="/About_history">
                    <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        연혁
                    </button>
                </Link>

                <Link to="/About_leader">
                    <button className="text-gray-600 bg-white border-b-2 border-indigo-400 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        학회장
                    </button>
                </Link>
            </div>
        </div>
        
      <section>

      </section>
      <Footer />
    </div>
  );
};

export default About_leader;
