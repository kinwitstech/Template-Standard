import { useForm } from "react-hook-form";
import React from "react";
import { comments } from "@/data/CommentsData";

export default function Comments() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Comment submitted:", data);
    reset();
  };

  return (
    <div className="container section-padding">
      <div className="bg-white mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {String(
            comments.reduce(
              (total, comment) => total + 1 + comment.replies.length,
              0
            )
          ).padStart(2, "0")}{" "}
          Feedbacks
        </h2>

        {/* Comments List */}
        <div className="space-y-10 mb-12">
          {comments.map((comment) => (
            <div key={comment.id}>
              {/* Main Comment */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb"
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h4 className="font-semibold text-lg text-gray-900">
                      {comment.author}
                    </h4>
                    <p className="mt-2 text-sm text-gray-300">
                      {comment.date} at {comment.time}
                    </p>
                  </div>
                  <p className="text-gray-500 text-lg leading-relaxed mb-3">
                    {comment.text}
                  </p>
                  <button className="text-xs px-3 py-1 bg-gray-200 rounded-md text-gray-600 hover:text-white hover:bg-black">
                    REPLY
                  </button>
                </div>
              </div>

              {/* Replies */}
              {comment.replies.length > 0 && (
                <div className="ml-20 mt-6 space-y-6">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb"
                            alt="User avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <h4 className="font-semibold text-lg text-gray-900">
                            {reply.author}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {reply.date} at {reply.time}
                          </p>
                        </div>
                        <p className="text-gray-500 text-lg leading-relaxed mb-3">
                          {reply.text}
                        </p>
                        <button className="text-xs px-3 py-1 bg-gray-200 rounded-md text-gray-600 hover:text-white hover:bg-black">
                          REPLY
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comment Form */}
        <div className="pt-15">
          <h3 className="bg-gray-50 px-7 py-7 text-2xl font-extrabold text-gray-900 mb-20">
            Leave a Comment
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="bg-gray-50 p-10 grid grid-cols-1 gap-8">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-gray-500 text-lg font-medium mb-2">
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-4 py-3 border bg-white ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-gray-500 text-lg font-medium mb-2">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-3 bg-white border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-1 focus:ring-gray-500`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Website */}
              <div className="flex flex-col">
                <label className="text-gray-500 text-lg font-medium mb-2">
                  Website
                </label>
                <input
                  type="text"
                  {...register("website")}
                  className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-gray-500 text-lg font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={8}
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className={`w-full px-4 py-3 bg-white border ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-1 focus:ring-gray-500 resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex">
                <button
                  type="submit"
                  className="bg-primary border border-primary text-white px-6 py-3 rounded-sm text-md hover:bg-white hover:text-primary transition-colors font-medium"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
