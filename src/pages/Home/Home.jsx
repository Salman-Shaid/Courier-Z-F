import { Helmet } from 'react-helmet-async'
import Banner from './Banner/Banner'
import OurFeatures from './OurFeature/OurFeatures'
import TopDeliveryMans from './TopDeliveryMans/TopDeliveryMans'
import CustomerReview from './Reviews/CustomerReview'




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
      
    </div>
  )
}

export default Home
