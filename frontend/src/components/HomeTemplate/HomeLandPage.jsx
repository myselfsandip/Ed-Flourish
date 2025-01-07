import NavBarFront from "./NavbarFront";
import ResourceGrid from "./ResourceGrid";
import WhyChooseUs from "./WhyChooseUs";
import BlogSection from "./BlogSection";
import Footer from "./Footer";
import WelcomeLanding from "./WelcomeLanding "


const HomeLandPage = () => {
  return (
    <div className="pt-16">
      {" "}
      {/* Add top padding to account for fixed navbar */}
      <NavBarFront />
      <WelcomeLanding />
      <ResourceGrid />
      <WhyChooseUs />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default HomeLandPage;
