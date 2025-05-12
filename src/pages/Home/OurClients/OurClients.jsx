
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const courierClients = [
  { name: 'Daraz', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Daraz_Logo.png' },
  { name: 'Pickaboo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pickaboo.png/250px-Pickaboo.png' },
  { name: 'Evaly', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Evaly_logo.svg/512px-Evaly_logo.svg.png?20221220223759' },
  { name: 'AjkerDeal', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU-xt1dmFN4g5LvgmBtkt3SpZmMjhFPSOsA&s' },
  { name: 'Fabrilife', logo: 'https://www.sajsojjabd.com/media/2023/01/LOGO.png' },
  { name: 'Oppo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/OPPO_Logo_wiki.png/960px-OPPO_Logo_wiki.png?20170406025614' },
  { name: 'aarong', logo: 'https://www.aarong.com/media/logo/stores/1/aarong-logo.jpg' },
  { name: 'Lotto', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Lotto_Sport_Italia_logo.svg' },
  { name: 'Easy', logo: 'https://pbs.twimg.com/profile_images/1660883232110551040/6I8dp-N-_400x400.jpg' },
  { name: 'Bay', logo: 'https://cdn.brandfetch.io/baygroupco.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed' },
  { name: 'GrameenPhone', logo: 'https://vectorseek.com/wp-content/uploads/2023/09/GrameenPhone-Original-Logo-Vector.svg--300x81.png' },
  { name: 'Vivo', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Vivo_New_Logo_2019.png' },
  
  { name: 'banglalink', logo: 'https://logovtor.com/wp-content/uploads/2020/08/banglalink-logo-vector.png' },
  { name: 'Rokomari', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Rokomari.svg/1200px-Rokomari.svg.png' },
  { name: 'RichMan', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZ-qCVzljOGyVy9Svu-VlnTUzokMloQPcYA&s' },
  { name: 'DorjiBari', logo: 'https://www.khantower.com/assets/img/Dorjibari%20logo1.webp' },
  { name: 'twelvebd', logo: 'https://twelvebd.com/cdn/shop/files/Twelve_Logo_4-02_07617a8c-8a42-4be4-aeae-2f5cba3f7e8e.png?v=1658919482&width=600' },
  { name: 'ILLIYEEN', logo: 'https://d19qnzrkx7fd3b.cloudfront.net/static/images/ILLIYEEN-Logo2.png' },
];

// Split into two halves
const middleIndex = Math.ceil(courierClients.length / 2);
const firstRowClients = courierClients.slice(0, middleIndex);
const secondRowClients = courierClients.slice(middleIndex);

const OurClients = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Trusted by Leading Brands
        </h2>

        {[firstRowClients, secondRowClients].map((rowClients, rowIndex) => (
          <Swiper
            key={rowIndex}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            autoplay={{
              delay: rowIndex === 0 ? 2000 : 2500, // slight variation
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mb-8"
          >
            {rowClients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center hover:scale-105 transition-transform">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
