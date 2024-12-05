import React from 'react';
import Image from 'next/image';

const Card3 = () => {
  return (
    <div className="mt-10 bg-gradient-to-b from-gray-100 to-gray-200 scroll-mt-32" id="card2">
      <h1 className="text-center text-xl lg:text-3xl font-bold font-serif text-white cursor-pointer
        bg-gradient-to-r from-pink-500 to-blue-400 p-3 lg:p-5 shadow-md">
        TESTERS
      </h1>
      <div className="flex items-center flex-col gap-8 lg:flex-row justify-center mt-6">
        {/* Card 1 */}
        <div className="lg:w-2/12 w-9/12 md:w-6/12 bg-gradient-to-b from-pink-100 to-pink-200 shadow-md shadow-pink-300 mb-10 p-4 border-gray-300 border rounded-lg">
          <Image
            src="/images/tetser1.webp"
            alt="Tester Product 1"
            width={200}
            height={300}
            className="mx-auto h-44 w-36 rounded-md"
          />
          <p className="text-center text-green-600 font-bold pt-4">PKR 700</p>
          <p className="text-xs text-center mt-2">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 821 Reviews
          </p>
          <div className="flex justify-center items-center my-3">
            <button
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-md
                hover:from-pink-600 hover:to-blue-600 shadow-md transition-all duration-300"
              aria-label="Buy Tester Product 1"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="lg:w-2/12 w-9/12 md:w-6/12 bg-gradient-to-b from-pink-100 to-pink-200 shadow-md shadow-pink-300 mb-10 p-4 border-gray-300 border rounded-lg">
          <Image
            src="/images/tetser2.webp"
            alt="Tester Product 2"
            width={200}
            height={300}
            className="mx-auto h-44 w-36 rounded-md"
          />
          <p className="text-center text-green-600 font-bold pt-4">PKR 800</p>
          <p className="text-xs text-center mt-2">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 510 Reviews
          </p>
          <div className="flex justify-center items-center my-3">
            <button
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-md
                hover:from-pink-600 hover:to-blue-600 shadow-md transition-all duration-300"
              aria-label="Buy Tester Product 2"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="lg:w-2/12 w-9/12 md:w-6/12 bg-gradient-to-b from-pink-100 to-pink-200 shadow-md shadow-pink-300 mb-10 p-4 border-gray-300 border rounded-lg">
          <Image
            src="/images/tetser3.webp"
            alt="Tester Product 3"
            width={200}
            height={300}
            className="mx-auto h-44 w-36 rounded-md"
          />
          <p className="text-center text-green-600 font-bold pt-4">PKR 1,099</p>
          <p className="text-xs text-center mt-2">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 221 Reviews
          </p>
          <div className="flex justify-center items-center my-3">
            <button
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-md
                hover:from-pink-600 hover:to-blue-600 shadow-md transition-all duration-300"
              aria-label="Buy Tester Product 3"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="lg:w-2/12 w-9/12 md:w-6/12 bg-gradient-to-b from-pink-100 to-pink-200 shadow-md shadow-pink-300 mb-10 p-4 border-gray-300 border rounded-lg">
          <Image
            src="/images/tetser4.webp"
            alt="Tester Product 4"
            width={200}
            height={300}
            className="mx-auto h-44 w-36 rounded-md"
          />
          <p className="text-center text-green-600 font-bold pt-4">PKR 1,050</p>
          <p className="text-xs text-center mt-2">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 511 Reviews
          </p>
          <div className="flex justify-center items-center my-3">
            <button
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-md
                hover:from-pink-600 hover:to-blue-600 shadow-md transition-all duration-300"
              aria-label="Buy Tester Product 4"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
