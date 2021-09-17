import React from 'react';

import hufsimage from '../../static/images/hufs.jpeg';

function Ask() {
    return (
        <section className="text-gray-700 body-font relative">
            <div className="overflow-hidden mx-auto absolute inset-0 bg-gray-300">
                <img className="w-full h-full" src={hufsimage} alt="hufs" />
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        문의하기
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        이메일로 직접 문의할수 있습니다.
                    </p>
                    <input
                        className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                        placeholder="이메일 주소"
                        type="email"
                    />
                    <textarea
                        className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                        placeholder="내용"
                        defaultValue={''}
                    />
                    <a href="mailto:이메일주소입력바람">
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            보내기
                        </button>
                    </a>
                    <p className="text-xs text-gray-500 mt-3">
                        아래 실시간 채팅을 사용하시면 더 빠른 답변을 받아보실수
                        있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Ask;
