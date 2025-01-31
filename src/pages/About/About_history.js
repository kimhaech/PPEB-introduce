import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const About_history = () => {
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
                    <button className="text-gray-600 bg-white border-b-2 border-indigo-400 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        연혁
                    </button>
                </Link>

                <Link to="/About_leader">
                    <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        학회장
                    </button>
                </Link>
                <Link to="/About_professor">
                    <button className="text-gray-600 bg-white border-b-2 py-2 px-8 hover:text-indigo-600 hover:border-indigo-600 text-lg">
                        교수
                    </button>
                </Link>
            </div>
    </div>
    <section
      id="about_history"
      className="text-gray-700 body-font border-t border-gray-200"
    >
        
        <div class="container flex flex-col md:flex-row md:my-6">
            <Fade bottom>
                    <div class="container w-full h-full">
                        <div class="relative wrap overflow-hidden h-full">
                            <div
                                class="border-10-10 border-indigo-400 absolute h-full border"
                                style={{
                                right: '80%',
                                borderRadius: '10%',
                                }}
                            ></div>

                            <div
                                class="border-10-10 border-indigo-400 absolute h-full border"
                                style={{
                                left: '20%',
                                borderRadius: '10%',
                                }}
                            ></div>

                            
                            <div class="mb-8 flex items-center w-full justify-between space-x-10">
                                <div class="order-1 w-1/5"></div>
                                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                                    </div>
                                <div class="order-1 rounded-lg z-10 border border-gray-200 shadow-md w-full px-8 py-4 text-left">
                                    <p class="mb-3 text-base text-indigo-500">
                                        2022
                                    </p>
                                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                                        학회 서버내의 독립적인 PnP 공식 홈페이지 개설
                                    </h4>
                                    <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                        PnP Web Project Team이 학교 서버를 이용하여 공식 홈페이지를 개설하였습니다.
                                        <br/>개발팀장 : 이지석
                                        <br/>개발팀원 : 김대원, 김주원, 김태우
                                    </p>
                                
                                </div>
                            </div>

                            <div class="mb-8 flex md:flex-shrink-0 items-center w-full space-x-10">
                                <div class="order-1 w-1/5"></div>
                                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
                                    </div>
                                <div class="order-1 rounded-lg z-10 border border-gray-200 shadow-md order-1 w-full px-8 py-4 text-left">
                                    <p class="mb-3 text-base text-indigo-500">
                                        2021
                                    </p>
                                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                                        PnP 공식 홈페이지 개설
                                    </h4>
                                    <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                        2021-2021 학회장님이 공식홈페이지를 개설하였습니다.
                                        <br/>개발자 : 허성일
                                    </p>
                                </div>
                            </div>

                            <div class="mb-8 flex md:flex-shrink-0 items-center w-full space-x-10">
                                <div class="order-1 w-1/5"></div>
                                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                                    </div>
                                <div class="order-1 rounded-lg z-10 border border-gray-200 shadow-md order-1 w-full px-8 py-4 text-left">
                                    <p class="mb-3 text-base text-indigo-500">
                                        2020
                                    </p>
                                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                                        컴퓨터공학부 소속
                                    </h4>
                                    <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                        한국외대 컴퓨터전자시스템공학부가 컴퓨터공학부로 명칭이 변경되어 학회 소속도 변경 되었습니다.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="mb-8 flex md:flex-shrink-0 items-center w-full space-x-10">
                                <div class="order-1 w-1/5"></div>
                                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
                                    </div>
                                <div class="order-1 rounded-lg z-10 border border-gray-200 shadow-md order-1 w-full px-8 py-4 text-left">
                                    <p class="mb-3 text-base text-indigo-500">
                                        2015
                                    </p>
                                    <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">
                                        컴퓨터전자시스템공학부 소속
                                    </h4>
                                    <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                        디지털정보공학과와 컴퓨터공학과가 컴퓨터전자시스템공학부로 학부가 통합되었습니다.
                                    </p>
                                </div>    
                            </div>

                            <div class="mb-8 flex md:flex-shrink-0 items-center w-full space-x-10">
                                <div class="order-1 w-1/5"></div>
                                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 class="mx-auto font-semibold text-lg text-white">5</h1>
                                    </div>
                                <div class="order-1 rounded-lg z-10 border border-gray-200 shadow-md order-1 w-full px-8 py-4 text-left">
                                    <p class="mb-3 text-base text-indigo-500">
                                        2012
                                    </p>
                                    <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">
                                        소프트웨어 중심 활동
                                    </h4>
                                    <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                        소프트웨어 산업이 활발해지면서 PnP의 전반적인 활동이 소프트웨어 중심으로 이루어졌습니다.
                                    </p>
                                </div>
                            </div>

                            <div class="mb-8 flex md:flex-shrink-0 items-center w-full space-x-10">
                                <div class="order-1 w-1/5"></div>
                                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 class="mx-auto font-semibold text-lg text-white">6</h1>
                                    </div>
                                <div class="order-1 rounded-lg z-10 border border-gray-200 shadow-md order-1 w-full px-8 py-4 text-left">
                                    <p class="mb-3 text-base text-indigo-500">
                                        ~2011
                                    </p>
                                    <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">
                                        하드웨어 중심 활동
                                    </h4>
                                    <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                        2011년까지 하드웨어를 중심으로 다양한 프로젝트에 참여하여 활동을 진행하였습니다.
                                    </p>
                                </div>
                            </div>

                            <div class="mb-8 flex md:flex-shrink-0 items-center w-full space-x-10">
                                <div class="order-1 w-1/5"></div>
                                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 class="mx-auto font-semibold text-lg text-white">7</h1>
                                    </div>
                                <div class="order-1 rounded-lg z-10 border border-gray-200 shadow-md order-1 w-full px-8 py-4 text-left">
                                    <p class="mb-3 text-base text-indigo-500">
                                        2000
                                    </p>
                                        <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">                                            지도교수 이재혁 교수님 부임
                                    </h4>
                                    <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                        이재혁 교수님께서 2000년부터 한국외대 과학기술 학회 PnP의 지도교수님으로 부임하여 현재까지 지도교수님을 맡아주고 계십니다.
                                    </p>
                                </div>
                            </div>

                            <div class="mb-8 flex md:flex-shrink-0 items-center w-full space-x-10">
                                <div class="order-1 w-1/5"></div>
                                    <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                        <h1 class="mx-auto font-semibold text-lg text-white">8</h1>
                                    </div>
                                <div class="order-1 rounded-lg z-10 border border-gray-200 shadow-md order-1 w-full px-8 py-4 text-left">
                                    <p class="mb-3 text-base text-indigo-500">
                                        1999
                                    </p>
                                    <h4 class="mb-3 font-bold  text-lg md:text-2xl text-left">
                                        한국외국어대학교 과학기술학회 PnP설립
                                    </h4>
                                    <p class="text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                        1999년 PnP가 한국외국어대학교 디지털정보공학과소속 학회로 설립되었습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </Fade>
        </div>
    </section>
    <Footer />
    </div>
  );
};

export default About_history;
