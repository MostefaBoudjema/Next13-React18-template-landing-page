import React from 'react';
import infos from '../../data/infos'
function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">{infos.zigzag_span}</div>
            <h1 className="h2 mb-4">{infos.zigzag_title}</h1>
            <p className="text-xl text-gray-400">{infos.zigzag_desc}</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
          {infos.zigzag_list.map((item, index) => (
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" key={item.id}>
              {/* Image */}
              <div className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 ${item.img_left ? 'md:order-1' : 'rtl'}`} data-aos="fade-up">
                  <img className="max-w-full mx-auto md:max-w-none h-auto" src={item.img} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">{item.span} </div>
                  <h3 className="h3 mb-3">{item.title} </h3>
                  <p className="text-xl text-gray-400 mb-4">{item.desc} </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                  {item.points.map((element, index) => (
                    <li className="flex items-center mb-2" key={element.id}>
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{element.text} </span>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            ))}
            

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;