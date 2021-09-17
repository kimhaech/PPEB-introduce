import React from 'react';
import MainImage from '../../static/images/main.png';

function Main() {
    return (
        <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        열정을 가진 자들이&nbsp;
                        <br className="hidden lg:inline-block" />
                        모여 세상을 개척한다.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        컴퓨터공학부 학부생들이 개발자로 성장하기 위해 자신의
                        목표를 찾고 같은 목표를 가지고 있는 학우들과 함께 학습
                        및 연구를 통해 자신의 프로젝트를 완성해나가고 있습니다.
                        학회원들이 서로의 활동을 공유하며 함께 성장할 수 있는
                        기회를 만들어갑니다.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            더보기
                            <svg
                                class="w-6 h-6 mt-0.5 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={MainImage}
                    />
                </div>
            </div>
        </section>
    );
}

export default Main;
