import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Vertex Science Point"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#courses" className="text-gray-700 hover:text-blue-600">Courses</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}