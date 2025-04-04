import Image from 'next/image';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              PIYUSH SIRS<br/>
              <span className="text-blue-700">VERTEX SCIENCE POINT</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering students for NEET | JEE | MHT-CET success
            </p>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-2">Individual Physics 2025-26</h2>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/teacher.jpg"
              alt="Piyush Sir"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}