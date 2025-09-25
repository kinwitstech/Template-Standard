import PagesHero from "@/components/PagesHero";
import StoriesPage from "@/components/StoriesPage";
import Footer from "@/components/Footer";

const Menu = () => {
    return (
        <div>
            <PagesHero title="Blog" />
            <StoriesPage />
            <Footer />
        </div>
    );
}

export default Menu;