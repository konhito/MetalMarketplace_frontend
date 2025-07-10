// import Hero from "@/app/components/Hero";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Fixed for scrolling */}
      <section className="relative flex flex-col items-center justify-center h-screen">
        <div className="absolute inset-0 pointer-events-none">
          <main className="w-full h-full">
            <Spline
              scene="/Main.splinecode"
              style={{
                width: "100%",
                height: "100%",
                pointerEvents: "none", // Prevent Spline from capturing scroll events
              }}
            />
          </main>
        </div>

        {/* Hero Content Overlay */}
        {/* <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Clarity. Focus. Impact.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We turn complex ideas into effortless experiences
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Get Started
            </button>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div> */}
      </section>

      {/* Innovation Section - Similar Theme */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovation. Quality. Trust.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing India's metal industry through cutting-edge
              technology and seamless digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Lightning Fast
              </h3>
              <p className="text-gray-300">
                Process orders and transactions at the speed of light with our
                advanced infrastructure
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Verified Quality
              </h3>
              <p className="text-gray-300">
                Every product undergoes rigorous quality checks ensuring premium
                standards
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Secure Transactions
              </h3>
              <p className="text-gray-300">
                Bank-grade security protocols protect every transaction and data
                point
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Browse Metals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Product Cards */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center hover:bg-gray-800 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Steel Rods</h3>
              <p className="mb-4 text-gray-300 text-center">
                High-quality steel rods for construction and manufacturing.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded transition-all">
                View Details
              </button>
            </div>
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center hover:bg-gray-800 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Aluminum Sheets</h3>
              <p className="mb-4 text-gray-300 text-center">
                Lightweight and durable aluminum sheets for various uses.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded transition-all">
                View Details
              </button>
            </div>
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center hover:bg-gray-800 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Copper Wires</h3>
              <p className="mb-4 text-gray-300 text-center">
                Pure copper wires for electrical and industrial applications.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded transition-all">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            About Metal Marketplace
          </h2>
          <p className="text-gray-300 mb-6">
            Metal Marketplace connects buyers and sellers across India's metal
            industry, from raw materials to finished goods. Our platform ensures
            seamless transactions, transparent pricing, and reliable delivery.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black border-t border-gray-800 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Metal Marketplace. All rights
        reserved.
      </footer>
    </div>
  );
}
