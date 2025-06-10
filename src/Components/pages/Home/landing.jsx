import React from 'react'

export const Landing = () => {
  return (
    <div>
        <section className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Roadside Assistance, Anytime, Anywhere
            </h1>
            <p className="text-lg text-gray-600">
              Stuck on the side of the road? Don't stress! Our platform connects you with fast, reliable roadside assistance services whenever you need it most. From flat tires and dead batteries to towing and fuel delivery, we've got you covered. Get back on your journey quickly and safely with just a few taps.
            </p>
            <a href="#services">
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Book A Service
              </button>
            </a>
          </div>
          {/* Hero Image */}
          <div className="md:w-1/2">
            <img
              src="./home.svg"
              alt="Roadside assistance hero"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </section>
    </div>
  )
}
