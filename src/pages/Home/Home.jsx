import { Helmet } from 'react-helmet-async'
import Banner from './Banner/Banner'
import OurFeatures from './OurFeature/OurFeatures'
import TopDeliveryMans from './TopDeliveryMans/TopDeliveryMans'
import CustomerReview from './Reviews/CustomerReview'
import OurClients from './OurClients/OurClients'
import BlogSection from './BlogSection/BlogSection'
import WhyChooseUsSection from './WhyChooseUsSection/WhyChooseUsSection'
import PricePlan from './PricePlan/PricePlan'
import LiveTrackingDemo from './LiveTrackingDemo/LiveTrackingDemo'




const Home = () => {
  return (
    <div className=''>
      <Helmet>
        <title> Courier-Z |  Your Courier Partner</title>
      </Helmet>
      <Banner></Banner>
      <OurFeatures></OurFeatures>
      <TopDeliveryMans></TopDeliveryMans>
      <CustomerReview></CustomerReview>
      <WhyChooseUsSection></WhyChooseUsSection>
      <OurClients></OurClients>
      <BlogSection></BlogSection>
      <PricePlan></PricePlan>
      <LiveTrackingDemo></LiveTrackingDemo>
    </div>
  )
}

export default Home
