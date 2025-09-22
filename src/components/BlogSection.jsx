import React from "react";
import { MessageCircle } from "lucide-react"; 
import { blogPosts } from "@/data/BlogData";

const BlogSection = () => {
  return (
    <section className="bg-light py-16">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-script text-6xl sm:text-7xl lg:text-9xl block">
            Blog
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md overflow-hidden"
            >
              <a
                href={post.link}
                className="block h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              ></a>

              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-lg font-bold mb-4">
                  <a href={post.link} className="hover:text-primary">
                    {post.title}
                  </a>
                </h3>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <a href={post.link} className="text-primary font-semibold">
                    Read more
                  </a>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
