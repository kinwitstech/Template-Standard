import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-gray-300">
      <div className="container section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Feliciano</h2>
            <p className="text-gray-400 leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="#" className="hover:text-primary transition">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Open Hours</h2>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <span>Monday</span><span className="text-right">9:00 - 24:00</span>
              <span>Tuesday</span><span className="text-right">9:00 - 24:00</span>
              <span>Wednesday</span><span className="text-right">9:00 - 24:00</span>
              <span>Thursday</span><span className="text-right">9:00 - 24:00</span>
              <span>Friday</span><span className="text-right">9:00 - 02:00</span>
              <span>Saturday</span><span className="text-right">9:00 - 02:00</span>
              <span>Sunday</span><span className="text-right">9:00 - 02:00</span>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Instagram</h2>
            <div className="grid grid-cols-3">
              {[
                "https://images.unsplash.com/photo-1614627293113-e7e68163d958?q=80&w=880&auto=format&fit=crop&ixlib=rb",
                "https://plus.unsplash.com/premium_photo-1723377627996-1003fa5152cb?q=80&w=921&auto=format&fit=crop&ixlib=rb",
                "https://plus.unsplash.com/premium_photo-1698867577020-38ae235fd612?q=80&w=880&auto=format&fit=crop&ixlib=rb",
                "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
                "https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
                "https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&w=687&auto=format&fit=crop&ixlib=rb",
              ].map((img, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-full h-24 bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
            <p className="text-gray-400 mb-4">
              Far far away, behind the word mountains, far from the countries.
            </p>

            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-black/40 text-white placeholder-gray-400 text-center focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 transition duration-300 hover:bg-primary/80"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} Kinwits. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
