import { Helmet } from 'react-helmet-async'
import Banner from './Banner/Banner'
import OurFeatures from './OurFeature/OurFeatures'
import TopDeliveryMans from './TopDeliveryMans/TopDeliveryMans'
import CustomerReview from './Reviews/CustomerReview'
import OurClients from './OurClients/OurClients'
import BlogSection from './BlogSection/BlogSection'
import WhyChooseUsSection from './WhyChooseUsSection/WhyChooseUsSection'




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
      <OurClients></OurClients>
      <BlogSection></BlogSection>
      <WhyChooseUsSection></WhyChooseUsSection>
    </div>
  )
}

export default Home
