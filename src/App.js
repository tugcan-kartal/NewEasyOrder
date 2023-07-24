// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopNavbar from "./features/TopNavbar";
import SubNavbar from "./features/SubNavbar";
import HeroSection from "./features/HeroSection";
import SecondSection from "./features/SecondSection";
import ThirdSection from "./features/ThirdSection";
import FourthSection from "./features/FourthSection";
import FifthSection from "./features/FifthSection";
import SixthSection from "./features/SixthSection";
import Footer from "./features/Footer";
import ContactUs from "./features/SubNavbarFeatures/ContactUs";
import AboutUs from "./features/SubNavbarFeatures/AboutUs";
import Support from "./features/TopNavbarFeatures/Support";
import CommunicatePart from "./features/CommunicationsFeatures/CommunicatePart";
import Download from "./features/SubNavbarFeatures/Download";
import Products from "./features/SubNavbarFeatures/Products";
import { Helmet } from 'react-helmet';
import Howitworks from './features/SubNavbarFeatures/Howitworks';
import FineDining from './features/SubNavbarFeatures/RestaurantType/FineDining';
import CasualDining from './features/SubNavbarFeatures/RestaurantType/CasualDining';
import FastFood from './features/SubNavbarFeatures/RestaurantType/FastFood';
import BarsAndNightclubs from './features/SubNavbarFeatures/RestaurantType/BarsAndNightclubs';
import CafeBakery from './features/SubNavbarFeatures/RestaurantType/CafeBakery';
import FoodTruck from './features/SubNavbarFeatures/RestaurantType/FoodTruck';
import Delivery from './features/SubNavbarFeatures/RestaurantType/Delivery';
import PoolAqupark from './features/SubNavbarFeatures/RestaurantType/PoolAqupark';
import SambaPOSpro from './features/SubNavbarFeatures/Products/SambaPOSpro';
import SambaPOSmobile from './features/SubNavbarFeatures/Products/SambaPOSmobile';
import SambaPOSkiosk from './features/SubNavbarFeatures/Products/SambaPOSkiosk';
import SambaPOStablet from './features/SubNavbarFeatures/Products/SambaPOStablet';
import SambaPOSjetrik from './features/SubNavbarFeatures/Products/SambaPosjetrik';
import SambaPOSmetrik from './features/SubNavbarFeatures/Products/SambaPosmetrik';
import SambaPOSkds from './features/SubNavbarFeatures/Products/SambaPOSkds';
import SambaPOSandroid from './features/SubNavbarFeatures/Products/SambaPOSandroid';
import SambaPOSneptune from './features/SubNavbarFeatures/Products/SambaPOSneptune';
import Sevenshifts from './features/SubNavbarFeatures/Products/Sevenshifts';
import Einvoice from './features/SubNavbarFeatures/Products/Einvoice';
import Dojo from './features/SubNavbarFeatures/Products/Dojo';
import PaymentSense from './features/SubNavbarFeatures/Products/PaymentSense';
import OkcGmp3 from './features/SubNavbarFeatures/Products/OkcGmp3';
import GlobalPayment from './features/SubNavbarFeatures/Products/GlobalPayment';
import OkcTsm from './features/SubNavbarFeatures/Products/OkcTsm';
import YemeksepetiIntegration from './features/SubNavbarFeatures/Products/YemeksepetiIntegration';
import GetirIntegration from './features/SubNavbarFeatures/Products/GetirIntegration';
import GloriaFoodIntegration from './features/SubNavbarFeatures/Products/GloriafoodIntegration';
import RestajetIntegration from './features/SubNavbarFeatures/Products/RestajetIntegration';
import JetrikIntegration from './features/SubNavbarFeatures/Products/JetrikIntegration';
import TakeawayIntegration from './features/SubNavbarFeatures/Products/TakeawayIntegration';
import RegulationTIMS from './features/SubNavbarFeatures/Products/RegulationTIMS';
import RegulationTSS from './features/SubNavbarFeatures/Products/RegulationTSS';
import BusinessFunding from './features/SubNavbarFeatures/Solutions/BusinessFunding';
import GhostKitchen from './features/SubNavbarFeatures/Solutions/GhostKitchen';
import DriveThruUPOS from './features/SubNavbarFeatures/Solutions/DriveThruPos';
import DeliverySolutions from './features/SubNavbarFeatures/Solutions/DeliverySolutions';
import TableService from './features/SubNavbarFeatures/Solutions/TableService';
import QuickService from './features/SubNavbarFeatures/Solutions/QuickService';
import FullService from './features/SubNavbarFeatures/Solutions/FullService';
import Integrations from './features/SubNavbarFeatures/Solutions/Integrations';



function App() {

  return (

    <div className="bg-white">

    <Helmet>
      <title>easyorder</title>
      <meta name="description" content="Order with sambapos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet, arcu non cursus lacinia, felis tellus bibendum velit, vitae cursus nisl elit nec tellus. In in consequat dolor, vel sollicitudin mi. Nunc accumsan lacus id quam malesuada varius. Sed in augue sit amet tortor malesuada lacinia et auctor felis." />
      <meta name="keywords" content="easyorder, sambapos, order, restaurant, food, online, delivery" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="easyorder - Order with sambapos" />
      <meta property="og:description" content="Order with sambapos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet, arcu non cursus lacinia, felis tellus bibendum velit, vitae cursus nisl elit nec tellus. In in consequat dolor, vel sollicitudin mi. Nunc accumsan lacus id quam malesuada varius. Sed in augue sit amet tortor malesuada lacinia et auctor felis." />
      <meta property="og:image" content="https://sambapos.com/wp-content/uploads/sambapos-full-mockup-tr-1536x872.png" />
    </Helmet>

      <Router>

        <TopNavbar />
        <SubNavbar />

        <Routes>
          <Route exact path="/" element={<div><HeroSection /><SecondSection /><ThirdSection /><FourthSection /><FifthSection /><SixthSection /></div>} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/download" element={<Download />} />
          <Route path="/products" element={<Products />} />
          <Route path="/how-it-works" element={<Howitworks />} />

          {/* Restaurant Types Seçenekleri Menüdeki */}
          <Route path="/fine-dining" element={<FineDining />} />
          <Route path="/casual-dining" element={<CasualDining />} />
          <Route path='/fast-food' element={<FastFood />} />
          <Route path="/bars-nightclubs" element={<BarsAndNightclubs />} />
          <Route path="/cafe-bakery" element={<CafeBakery />} />
          <Route path="/food-trucks" element={<FoodTruck />} /> 
          <Route path="/delivery" element={<Delivery />} /> 
          <Route path="/pool-aquapark" element={<PoolAqupark />} />

          {/* Products Seçenekleri Menüdeki */}
          <Route path="/SambaPOSpro" element={<SambaPOSpro />} />
          <Route path="/SambaPOSmobile" element={<SambaPOSmobile />} />
          <Route path="/SambaPOSkiosk" element={<SambaPOSkiosk />} />
          <Route path="/SambaPOStablet" element={<SambaPOStablet />} />
          <Route path="/SambaPOSjetrik" element={<SambaPOSjetrik />} />
          <Route path="/SambaPOSmetrik" element={<SambaPOSmetrik />} />
          <Route path="/SambaPOSkds" element={<SambaPOSkds />} />
          <Route path="/SambaPOSandroid" element={<SambaPOSandroid />} />
          <Route path="/SambaPOSneptune" element={<SambaPOSneptune />} />
          <Route path="/Sevenshifts" element={<Sevenshifts />} />
          <Route path="/Einvoice" element={<Einvoice />} />
          <Route path="/Paymentsense" element={<PaymentSense />} />
          <Route path="/Dojo" element={<Dojo />} />
          <Route path="/GlobalPayment" element={<GlobalPayment />} />
          <Route path="/Okcgmp3" element={<OkcGmp3 />} />
          <Route path="/Okctsm" element={<OkcTsm />} />
          <Route path="/YemeksepetiIntegration" element={<YemeksepetiIntegration />} />
          <Route path="/GetirIntegration" element={<GetirIntegration />} />
          <Route path="/GloriafoodIntegration" element={<GloriaFoodIntegration />} />
          <Route path="/RestajetIntegration" element={<RestajetIntegration />} />
          <Route path="/JetrikIntegration" element={<JetrikIntegration />} />
          <Route path="/TakeawayIntegration" element={<TakeawayIntegration />} />
          <Route path="/RegulationTIMS" element={<RegulationTIMS />} />
          <Route path="/RegulationTSS" element={<RegulationTSS />} />
          
          {/* Solutions Seçenekleri Menüdeki */}
          <Route path="/business-funding" element={<BusinessFunding />} />
          <Route path="/ghost-kitchen" element={<GhostKitchen />} />
          <Route path='/drive-thru-pos' element={<DriveThruUPOS />} />
          <Route path="/delivery-solutions" element={<DeliverySolutions />} />
          <Route path="/table-service" element={<TableService />} />
          <Route path="/quick-service" element={<QuickService />} /> 
          <Route path="/full-service" element={<FullService />} /> 
          <Route path="/integrations" element={<Integrations />} />


          {/* Eğer istediği sayfayı bulamazsa yönlendirilen sayfa */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>



        <CommunicatePart />

        <Footer />

      </Router>

    </div>

  );
}

export default App;