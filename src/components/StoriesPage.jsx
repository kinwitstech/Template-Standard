import React, { useState, useEffect, useRef } from "react";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
import { blogPosts } from "@/data/StoriesPageData";

const StoriesPage = () => {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  // Scroll to top of page when menu tab is clicked
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Scroll to top of section on pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="container section-padding">
      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image now links to /stories/blog */}
            <Link to="/stories/blog">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-80 object-cover"
              />
            </Link>

            <div className="p-5">
              <p className="text-gray-500 text-sm">
                {post.date} &nbsp; {post.author}
              </p>

              <h3 className="text-lg font-semibold mt-2">
                <Link to="/stories/blog" className="hover:underline">
                  {post.title}
                </Link>
              </h3>

              <div className="flex items-center justify-between mt-4">
                {/* Read more links to /stories/blog */}
                <Link to="/stories/blog" className="text-gray-800 font-medium hover:underline">
                  Read more
                </Link>

                <span className="flex items-center text-gray-500 text-sm">
                  <ChatBubbleLeftEllipsisIcon className="h-5 w-5 mr-1" />
                  {post.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-20 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center justify-center rounded-md border bg-white text-primary hover:bg-gray-100 disabled:opacity-50"
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "bg-white text-primary hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex items-center justify-center rounded-md border bg-white text-primary hover:bg-gray-100 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default StoriesPage;
