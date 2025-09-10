import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ReservationSection = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [open, setOpen] = useState(false);

  // Generate 30-minute interval times
  const times = Array.from({ length: 24 * 2 }, (_, i) => {
    const hours = String(Math.floor(i / 2)).padStart(2, "0");
    const minutes = i % 2 === 0 ? "00" : "30";
    return `${hours}:${minutes}`;
  });

  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Wrapper */}
      <div className="relative container mx-auto flex md:justify-start justify-center px-0 md:px-10">
        <div className="bg-white/90 backdrop-blur-md p-6 md:p-10 w-full md:max-w-2xl lg:max-w-3xl">
          {/* Heading */}
          <div className="text-center mb-8">
            <span className="text-primary tracking-wide font-script text-6xl lg:text-8xl block">
              Book a table
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Make Reservation
            </h2>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-md font-extrabold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-black/30 px-4 py-2 focus:ring-1 focus:ring-black outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-md font-extrabold mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-black/30 px-4 py-2 focus:ring-1 focus:ring-black outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-md font-extrabold mb-1">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-black/30 px-4 py-2 focus:ring-1 focus:ring-black outline-none"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-md font-extrabold mb-1">Date</label>
              <input
                type="date"
                className="w-full border border-black/30 px-4 py-2 focus:ring-1 focus:ring-black outline-none"
              />
            </div>

            {/* Time (Custom Dropdown) */}
            <div className="relative">
              <label className="block text-md font-extrabold mb-1">Time</label>
              <div
                className="w-full border border-black/30 px-4 py-2 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {selectedTime || "Time"}
              </div>

              {open && (
                <div className="absolute z-10 mt-1 w-full max-h-40 overflow-y-auto border border-black/30 bg-white shadow-md">
                  {times.map((time) => (
                    <div
                      key={time}
                      className="px-4 py-2 cursor-pointer"
                      onClick={() => {
                        setSelectedTime(time);
                        setOpen(false);
                      }}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Person */}
            <div className="relative">
            <label className="block text-md font-extrabold mb-1">Person</label>
            <select
              className="w-full border border-black/30 px-4 py-2 pr-10 focus:ring-1 focus:ring-black outline-none appearance-none"
            >
              <option value="">Person</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>

            {/* Custom Arrow */}
            <ChevronDown
              className="w-5 h-5 absolute right-3 top-[70%] -translate-y-1/2 text-gray-600 pointer-events-none"
            />
          </div>

            {/* Submit */}
            <div className="col-span-1 md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-primary border border-primary text-white px-6 py-3 hover:bg-white hover:text-primary hover:cursor-pointer transition"
              >
                Make a Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
