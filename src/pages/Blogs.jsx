import BlogHero from "@/components/BlogsSub/BlogHero";
import BlogContent from "@/components/BlogsSub/BlogContent";
import Comments from "@/components/BlogsSub/Comments";
import Sidebar from "@/components/BlogsSub/Sidebar";
import Footer from "@/components/Footer";

const Blogs = () => {
    return (
        <div>
            <BlogHero title="Blog" />
            <div className="container mx-auto px-0 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <BlogContent />
                    <Comments />
                </div>
                <aside className="lg:col-span-1">
                    <Sidebar />
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default Blogs;