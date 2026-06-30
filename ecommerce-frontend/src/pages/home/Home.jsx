// import FeaturedCategories from "../components/FeaturedCategories";
// import FeaturedProducts from "../components/FeaturedProducts";
// import OfferSlider from "../components/OfferSlider";
// import OfferSlider from "../components/OfferSlider";
import CustomerReviews from "./CustomerReviews";
import Herosection from "./Herosection";
import TopBrands from "./TopBrands";
import WhyChooseUs from "./WhyChooseUs";





function Home() {
  return (
    <div>
       <Herosection/>
       {/* <OfferSlider/> */}
       {/* <FeaturedCategories/> */}
       {/* <FeaturedProducts/> */}
       <WhyChooseUs/>
       <CustomerReviews/>
       <TopBrands/>
    </div>
  );
}

export default Home;