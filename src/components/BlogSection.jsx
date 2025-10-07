import React from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { blogPosts } from "@/data/BlogData";

const BlogSection = () => {
  return (
    <section className="bg-light">
      <div className="container section-padding">
        <div className="text-center mb-12">
          <span className="text-primary font-script text-6xl sm:text-7xl lg:text-9xl block">
            Blog
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md overflow-hidden">
              {/* Image now links to /stories/blog */}
              <Link
                to="/stories/blog"
                className="block h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />

              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>

                <h3 className="text-lg font-bold mb-4">
                  <Link to="/stories/blog" className="hover:text-primary">
                    {post.title}
                  </Link>
                </h3>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  {/* Read more now links to /stories/blog */}
                  <Link to="/stories/blog" className="text-primary font-semibold">
                    Read more
                  </Link>
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
