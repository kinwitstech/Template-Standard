import React from "react";
import { MessageCircle } from "lucide-react"; // Lucide comment icon

const blogPosts = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1661939325426-27500d72bd14?q=80&w=919&auto=format&fit=crop&ixlib=rb",
    date: "Sept. 06, 2019",
    author: "Admin",
    title: "Taste the delicious foods in Asia",
    comments: 3,
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1708288762267-803ca02949a5?q=80&w=880&auto=format&fit=crop&ixlib=rb",
    date: "Sept. 06, 2019",
    author: "Admin",
    title: "Explore the best street food in Europe",
    comments: 5,
    link: "#",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1541086095944-f4b5412d3666?q=80&w=880&auto=format&fit=crop&ixlib=rb",
    date: "Sept. 06, 2019",
    author: "Admin",
    title: "Healthy eating tips for a better life",
    comments: 2,
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="relative bg-light py-16 blog-section">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-primary font-script text-4xl block">Blog</span>
          <h2 className="text-3xl md:text-4xl font-extrabold">Recent Posts</h2>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md overflow-hidden">
              {/* Image */}
              <a
                href={post.link}
                className="block h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              ></a>

              {/* Text content */}
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
