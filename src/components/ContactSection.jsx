import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <section className="pt-0 pb-16 px-10">
      <div className="container lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6 h-[400px] lg:h-[500px] w-full shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609971063!2d72.74109983784438!3d19.082197839859233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a04bcb999%3A0x5e3a6c0aa2e5c1b7!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1679980400000!5m2!1sen!2sin"
              width="100%"
              height="130%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="lg:col-span-6 bg-white rounded-md p-10 ">
            <h2 className="text-2xl font-extrabold mb-15">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <textarea
                  rows="6"
                  placeholder="Message"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#c7a46c] text-white font-semibold py-4 px-8 hover:bg-white hover:text-primary transition disabled:opacity-50 border border-primary"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="my-20">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-lg">
            <div>
            <p>
                <span>Address: </span>
                198 West 21th Street,<br /> Suite 721 New York NY 10016
            </p>
            </div>
            <div>
            <p>
                <span>Phone: </span>
                <a href="tel://1234567920" className="text-primary hover:underline">
                + 1235 2355 98
                </a>
            </p>
            </div>
            <div>
            <p>
                <span>Email: </span>
                <a href="mailto:info@yoursite.com" className="text-primary hover:underline">
                info@yoursite.com
                </a>
            </p>
            </div>
            <div>
            <p>
                <span>Website: </span>
                <a href="#" className="text-primary hover:underline">
                yoursite.com
                </a>
            </p>
            </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
