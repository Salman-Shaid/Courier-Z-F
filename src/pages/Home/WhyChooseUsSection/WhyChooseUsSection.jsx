import Container from '../../../components/Shared/Container';
import { ShieldCheck, Truck, Clock, Headset, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Truck className="w-10 h-10 text-[#FFCC53] dark:text-blue-400" />,
    title: 'Fast Nationwide Delivery',
    description: 'From city to village, we deliver across the country with speed and reliability.',
  },
  {
    icon: <Clock className="w-10 h-10 text-[#FFCC53] dark:text-blue-400" />,
    title: 'On-Time Guarantee',
    description: 'We respect your time. That’s why we offer guaranteed delivery schedules.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#FFCC53] dark:text-blue-400" />,
    title: 'Secure Handling',
    description: 'Your parcels are safe with us. Every item is handled with utmost care.',
  },
  {
    icon: <DollarSign className="w-10 h-10 text-[#FFCC53] dark:text-blue-400" />,
    title: 'Transparent Pricing',
    description: 'No hidden fees — pay only what you see. Honest and affordable pricing.',
  },
  {
    icon: <Headset className="w-10 h-10 text-[#FFCC53] dark:text-blue-400" />,
    title: '24/7 Live Support',
    description: 'Our support team is always available to help you, day or night.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <Container>
      <section className="py-10 lg:py-14 mb-20 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 sm:px-8 md:px-16">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight mb-6">
              Why Thousands Trust <br /> Our Courier Service
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-xl">
              We combine cutting-edge technology, a passionate team, and reliable logistics to bring you a delivery experience that’s fast, affordable, and worry-free.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4 hover:scale-[1.02] transition-transform duration-200"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="btn btn-primary bg-yellow-500 hover:bg-[#EE8215] text-white w-full md:w-auto py-3 px-6 font-semibold rounded-md border-[#EE8215] focus:outline-none focus:ring-2 focus:ring-primary shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>

          {/* Right Image with continuous animation */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-full max-w-xl mx-auto "
          >
            <img
              src="https://images.ctfassets.net/v78wipeni189/5vgW4bHSkwby6U4KedESZk/31157c4c3a1503c25c2c89a4ccf96994/iStock-1434715649_1.png?fm=webp&w=1920&q=80&h=1920"
              alt="Courier Delivery"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default WhyChooseUsSection;
