// import FeaturedCategories from "../components/FeaturedCategories";
// import FeaturedProducts from "../components/FeaturedProducts";

import CustomerReviews from "./CustomerReviews";
import Herosection from "./Herosection";
// import Offer from "./Offer";
import TopBrands from "./TopBrands";
import WhyChooseUs from "./WhyChooseUs";





function Home() {
  return (
    <div>
       <Herosection/>
       {/* <Offer/> */}
       {/* <FeaturedCategories/> */}
       {/* <FeaturedProducts/> */}
       <WhyChooseUs/>
       <CustomerReviews/>
       <TopBrands/>
    </div>
  );
}

export default Home;