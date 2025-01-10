const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[#1E293B] font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#64748B] hover:text-[#4361EE] text-[15px]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#64748B] hover:text-[#4361EE] text-[15px]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#64748B] hover:text-[#4361EE] text-[15px]">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#1E293B] font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-[#64748B] text-[15px]">
                kartiklabhshetwar@gmail.com
              </li>
              <li className="text-[#64748B] text-[15px]">
                +91 9970455479
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;