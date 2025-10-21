import { Search } from 'lucide-react';
import { CalendarIcon, UserIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { categories, popularPosts, tags, archives } from '@/data/SidebarData';

export default function Sidebar() {

  return (
    <aside className="px-[15px] md:px-[15px] lg:px-0 lg:pr-15 space-y-8 sm:py-15 py-10">
      <div className="bg-gray-100 p-2">
        <form className="relative">
          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
          />
          <input
            type="text"
            placeholder="Type a keyword and hit enter"
            className="w-full pl-5 pr-4 py-2 bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-800"
          />
        </form>
      </div>

      <div className="bg-white">
        <h3 className="text-xl text-gray-900 mb-6">Category</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.name} className="border-b border-gray-200 last:border-b-0">
              <a
                href="#"
                className="flex items-center justify-between text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <span className="flex items-center text-md gap-2 mb-3">
                  {category.name}
                </span>
                <span className="text-md text-primary">({category.count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Articles</h3>
        <div className="space-y-10">
          {popularPosts.map((post, index) => (
            <a key={index} href="#" className="flex gap-6 group">
              <img
                src={post.image}
                alt={post.title}
                className="w-20 h-20 object-cover flex-shrink-0"
              />
              <div>
                <h4 className="text-xl font-medium text-gray-900 group-hover:text-gray-700 leading-tight mb-2">
                  {post.title}
                </h4>

                <p className="text-xs text-gray-500 flex items-center gap-1 mb-1 mt-5">
                  <CalendarIcon className="w-3 h-3" />
                  {post.date}
                  <UserIcon className="w-3 h-3 ml-3" />
                  John Doe
                </p>

                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <ChatBubbleLeftIcon className="w-3 h-3" />
                  5
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Tag Cloud</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="text-xs border border-gray-300 bg-white hover:bg-gray-900 hover:text-white px-4 py-2 rounded transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>

      <div className="bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Archives</h3>
        <ul className="space-y-3">
          {archives.map(({month, count}) => (
            <li key={month} className="border-b border-gray-200 last:border-b-0">
              <a
                href="#"
                className="flex items-center justify-between mb-3 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                {month}
                <span className="text-md text-primary">({count})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white pb-20">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Paragraph</h3>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
      </div>

    </aside>
  );
}
