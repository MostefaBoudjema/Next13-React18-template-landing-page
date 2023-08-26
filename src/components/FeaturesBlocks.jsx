import React from 'react';

import infos from '../data/infos';
function FeaturesBlocks() {
  return (
    <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">{infos.feature_title}</h2>
                        <p className="text-xl text-gray-400">
                            {infos.feature_desc}
                        </p>
                    </div>

                    {/* Items */}
                    <div
                        className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                        data-aos-id-blocks
                    >
                        {infos.feature_list.map((item) => (
                            <div
                                className="relative flex flex-col items-center"
                                data-aos="fade-up"
                                data-aos-anchor="[data-aos-id-blocks]"
                                key={item.id}
                            >
                                <svg
                                    className="w-16 h-16 mb-4"
                                    viewBox="0 0 64 64"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        className="fill-current text-purple-600"
                                        width="64"
                                        height="64"
                                        rx="32"
                                    />
                                    <path
                                        className="stroke-current text-purple-100"
                                        d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                                        strokeLinecap="square"
                                        strokeWidth="2"
                                        fill="none"
                                        fillRule="evenodd"
                                    />
                                    <path
                                        className="stroke-current text-purple-300"
                                        d="M43 42h-9M43 37h-9"
                                        strokeLinecap="square"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <h4 className="h4 mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-lg text-gray-400 text-center">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
  );
}

export default FeaturesBlocks;
