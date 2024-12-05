import React from 'react'
import Image from 'next/image';

const Card1 = () => {
  return (
    <div className="mt-10 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 scroll-mt-32" id="card1">
      <h1 className="text-center text-xl lg:text-3xl font-bold font-serif text-white cursor-pointer
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 lg:p-5 shadow-lg">
        PAKISTAN NO.1 F-COMMERCE Fragrance Brand
      </h1>
      <div className="flex items-center flex-col gap-8 lg:flex-row justify-center mt-6">
        {/* Card 1 */}
        <div className="lg:w-2/12 w-9/12 md:w-6/12 bg-gradient-to-b from-indigo-100 to-indigo-200 shadow-lg shadow-indigo-400 mb-20 p-4 border-gray-300 border-2 rounded-lg">
          <Image
            src="/images/attar1.webp"
            alt="pic1"
            width={300}
            height={400}
            className="mx-auto h-44 w-36 rounded-md"
          />
          <p className="text-center text-indigo-700 font-bold pt-4">PKR 4,000</p>
          <p className="text-xs text-center mt-2">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 721 Reviews
          </p>
          <div className="flex justify-center items-center my-3">
            <button className="lg:px-4 lg:py-2 px-2 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-md
              hover:from-indigo-500 hover:to-pink-500 text-xs shadow-md transition-all">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="lg:w-2/12 w-9/12 md:w-6/12 bg-gradient-to-b from-purple-100 to-purple-200 shadow-lg shadow-purple-400 mb-20 p-4 border-gray-300 border-2 rounded-lg">
          <Image
            src="/images/attar2.webp"
            alt="pic2"
            width={200}
            height={300}
            className="mx-auto h-44 w-36 rounded-md"
          />
          <p className="text-center text-purple-700 font-bold pt-4">PKR 3,500</p>
          <p className="text-xs text-center mt-2">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 145 Reviews
          </p>
          <div className="flex justify-center items-center my-3">
            <button className="lg:px-4 lg:py-2 px-2 py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-md
              hover:from-purple-500 hover:to-teal-400 text-xs shadow-md transition-all">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="lg:w-2/12 w-9/12 md:w-6/12 bg-gradient-to-b from-pink-100 to-pink-200 shadow-lg shadow-pink-400 mb-20 p-4 border-gray-300 border-2 rounded-lg">
          <Image
            src="/images/attar3.webp"
            alt="pic3"
            width={200}
            height={300}
            className="mx-auto h-44 w-36 rounded-md"
          />
          <p className="text-center text-pink-700 font-bold pt-4">PKR 4,999</p>
          <p className="text-xs text-center mt-2">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 751 Reviews
          </p>
          <div className="flex justify-center items-center my-3">
            <button className="lg:px-4 lg:py-2 px-2 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-md
              hover:from-pink-500 hover:to-indigo-500 text-xs shadow-md transition-all">
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="lg:w-2/12 w-9/12 md:w-6/12 bg-gradient-to-b from-teal-100 to-teal-200 shadow-lg shadow-teal-400 mb-20 p-4 border-gray-300 border-2 rounded-lg">
          <Image
            src="/images/attar4.webp"
            alt="pic4"
            width={200}
            height={300}
            className="mx-auto h-44 w-36 rounded-md"
          />
          <p className="text-center text-teal-700 font-bold pt-4">PKR 3,499</p>
          <p className="text-xs text-center mt-2">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 361 Reviews
          </p>
          <div className="flex justify-center items-center my-3">
            <button className="lg:px-4 lg:py-2 px-2 py-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white rounded-md
              hover:from-purple-500 hover:to-teal-400 text-xs shadow-md transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
