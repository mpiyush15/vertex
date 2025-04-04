export default function Courses() {
        return (
          <section id="courses" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Individual Physics 2025-26</h3>
                  <p className="text-gray-600 mb-4">Comprehensive physics preparation for NEET/JEE/MHT-CET</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    Enroll Now
                  </button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Class 10 CBSE Target 2026</h3>
                  <h4 className="text-lg mb-4">Master Mathematics Batch</h4>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
                    Enroll Now
                  </button>
                </div>
      
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full inline-block mb-4">FREE</div>
                  <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
                  <h4 className="text-lg text-purple-600 mb-4">Foundation Batch (CBSE Syllabus)</h4>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      }