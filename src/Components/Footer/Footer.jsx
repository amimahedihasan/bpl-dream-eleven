import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] text-white pt-64 pb-10 relative mt-80">
      {/* Newsletter Section with Color Gradient (No Image) */}
      <div className="absolute -top-48 left-0 right-0 container mx-auto px-4">
        <div className="bg-white/10 p-4 rounded-3xl border border-white/20 backdrop-blur-md">
          <div 
            className="bg-white text-black py-16 rounded-2xl flex flex-col items-center space-y-6 shadow-xl"
            style={{ 
              background: 'linear-gradient(to right, #ffffff, #fdfbfb, #ebedee)',
              boxShadow: 'inset 0 0 100px rgba(0,0,0,0.02)' 
            }}
          >
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="text-gray-500 font-medium">Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-4 w-full max-w-xl px-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered w-full rounded-xl focus:outline-none border-gray-300" 
              />
              <button className="btn border-none rounded-xl px-10 font-bold bg-gradient-to-r from-orange-300 to-yellow-400 text-black shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="container mx-auto px-4 flex flex-col items-center">
        <img src={footerLogo} alt="Footer Logo" className="mb-12 w-32" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pb-16">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-3">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Subscribe</h3>
            <p className="text-gray-400 text-sm">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex overflow-hidden">
              <input type="text" placeholder="Enter your email" className="input input-bordered rounded-l-xl rounded-r-none text-black w-full" />
              <button className="btn rounded-r-xl rounded-l-none bg-gradient-to-r from-orange-300 to-yellow-400 border-none text-black px-6">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 w-full pt-8 text-center text-gray-500 text-sm">
          <p>@2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;