
import Container from '../../../components/Shared/Container';

const blogs = [
    {
        title: 'How Courier Services Are Evolving in 2025',
        description: 'Explore how modern technology and logistics are transforming the courier industry for faster and more reliable deliveries.',
        image: 'https://www.businessblogshub.com/wp-content/uploads/2023/05/delivery-service.webp',
        link: '#'
    },
    {
        title: 'Top 5 Tips for Secure Parcel Delivery',
        description: 'Make sure your packages arrive safely with these top security and packaging tips for senders and recipients.',
        image: 'https://insights.workwave.com/wp-content/uploads/2021/08/WorkWave-How-to-Add-a-Delivery-Service-For-Your-Business.jpg',
        link: '#'
    },
    {
        title: 'Inside Look: Same-Day Delivery Process',
        description: 'Go behind the scenes of how same-day deliveries work from pickup to drop-off in your city.',
        image: 'https://eliteextra.com/wp-content/uploads/2022/07/AdobeStock_399492997-1200x633.jpeg',
        link: '#'
    },
];

const BlogSection = () => {
    return (
        <Container>
            <section className="pt-10 rounded-xl mb-20 border-2 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
                <div className="  px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                        Latest from Our Blog
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2 px-6 lg:grid-cols-3">
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                            >
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                                <div className="flex flex-col flex-grow p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{blog.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{blog.description}</p>
                                    <a
                                        href={blog.link}
                                        className="text-blue-600 hover:underline dark:text-blue-400 mt-auto"
                                    >
                                        Read more →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="flex justify-center my-10">
                    <button className="btn btn-primary bg-yellow-500 hover:bg-[#EE8215] text-white w-full md:w-auto py-3 px-6 font-semibold rounded-md border-[#EE8215] focus:outline-none focus:ring-2 focus:ring-primary shadow-lg">More Blog...</button>
                </div>
            </section>
        </Container>
    );
};

export default BlogSection;

