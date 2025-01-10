import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-[72px]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold text-[#1E293B]">Blog</span>
              </div>
              <div className="hidden md:ml-12 md:flex md:space-x-10">
                <a href="#" className="text-[#64748B] hover:text-[#1E293B] inline-flex items-center px-1 pt-1 text-[15px] font-medium">
                  How We Work
                </a>
                <a href="#" className="text-[#64748B] hover:text-[#1E293B] inline-flex items-center px-1 pt-1 text-[15px] font-medium transition-colors">
                  DIY Opt-Out Guides
                </a>
                <a href="#" className="text-[#64748B] hover:text-[#1E293B] inline-flex items-center px-1 pt-1 text-[15px] font-medium transition-colors">
                  Business
                </a>
                <a href="#" className="text-[#1E293B] inline-flex items-center px-1 pt-1 text-[15px] font-medium">
                  Blog
                </a>
                <a href="#" className="text-[#64748B] hover:text-[#1E293B] inline-flex items-center gap-1 px-1 pt-1 text-[15px] font-medium transition-colors">
                  About Us
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
                <a href="#" className="text-[#64748B] hover:text-[#1E293B] inline-flex items-center px-1 pt-1 text-[15px] font-medium transition-colors">
                  Support
                </a>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <button className="text-[#4361EE] bg-white hover:bg-blue-50 px-7 py-2.5 rounded-full text-[15px] font-medium border border-[#4361EE] transition-colors">
                Login
              </button>
              <button className="bg-[#4361EE] text-white hover:bg-[#3651D4] px-7 py-2.5 rounded-full text-[15px] font-medium transition-colors">
                Join Now
              </button>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#64748B] hover:text-[#1E293B] hover:bg-gray-50"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#64748B] hover:bg-gray-50 rounded-md">
              How We Work
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#64748B] hover:bg-gray-50 rounded-md">
              DIY Opt-Out Guides
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#64748B] hover:bg-gray-50 rounded-md">
              Business
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#1E293B] bg-gray-50 rounded-md">
              Blog
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2 text-base font-medium text-[#64748B] hover:bg-gray-50 rounded-md">
              About Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#64748B] hover:bg-gray-50 rounded-md">
              Support
            </a>
          </div>
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <button className="text-[#4361EE] bg-white hover:bg-blue-50 px-4 py-2.5 rounded-full text-base font-medium border border-[#4361EE] transition-colors">
                Login
              </button>
              <button className="bg-[#4361EE] text-white hover:bg-[#3651D4] px-4 py-2.5 rounded-full text-base font-medium transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;