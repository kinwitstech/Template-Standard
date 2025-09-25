import React, { useState, useRef } from "react";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline"; 
import { blogPosts } from "@/data/StoriesPageData";

const BlogGrid = () => {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  // total pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // slice posts for current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  // handle page change with scroll
  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="container py-25">
      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <p className="text-gray-500 text-sm">
                {post.date} &nbsp; {post.author}
              </p>
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>

              <div className="flex items-center justify-between mt-4">
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  Read more
                </a>
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
      <div className="flex justify-center mt-10 space-x-2">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center justify-center rounded-md border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        >
          &lt;
        </button>

        {/* Page numbers */}
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next button */}
        <button
          onClick={() => {
            if (currentPage < totalPages) handlePageChange(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex items-center justify-center rounded-md border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        >
          &gt;
        </button>

      </div>
    </section>
  );
};

export default BlogGrid;
