const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Column 1: About */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Feliciano</h2>
            <p className="text-gray-400 leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="#" className="hover:text-primary transition">
                <span className="icon-twitter"></span>
              </a>
              <a href="#" className="hover:text-primary transition">
                <span className="icon-facebook"></span>
              </a>
              <a href="#" className="hover:text-primary transition">
                <span className="icon-instagram"></span>
              </a>
            </div>
          </div>

          {/* Column 2: Open Hours */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Open Hours</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday</span> <span>9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span> <span>9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span> <span>9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span> <span>9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span> <span>9:00 - 02:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span> <span>9:00 - 02:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span> <span>9:00 - 02:00</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Instagram */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Instagram</h2>
            <div className="grid grid-cols-3 gap-2">
              <a
                href="#"
                className="w-full h-20 bg-cover bg-center"
                style={{ backgroundImage: "url(images/insta-1.jpg)" }}
              />
              <a
                href="#"
                className="w-full h-20 bg-cover bg-center"
                style={{ backgroundImage: "url(images/insta-2.jpg)" }}
              />
              <a
                href="#"
                className="w-full h-20 bg-cover bg-center"
                style={{ backgroundImage: "url(images/insta-3.jpg)" }}
              />
              <a
                href="#"
                className="w-full h-20 bg-cover bg-center"
                style={{ backgroundImage: "url(images/insta-4.jpg)" }}
              />
              <a
                href="#"
                className="w-full h-20 bg-cover bg-center"
                style={{ backgroundImage: "url(images/insta-5.jpg)" }}
              />
              <a
                href="#"
                className="w-full h-20 bg-cover bg-center"
                style={{ backgroundImage: "url(images/insta-6.jpg)" }}
              />
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
            <p className="text-gray-400 mb-4">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter email address"
                className="px-3 py-2 rounded-md text-gray-900 flex-1 text-center"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} All rights reserved | This
            template is made with{" "}
            <i className="icon-heart" aria-hidden="true"></i> by{" "}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
