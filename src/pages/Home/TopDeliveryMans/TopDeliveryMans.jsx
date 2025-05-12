import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { motion } from 'framer-motion';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import Container from '../../../components/Shared/Container';
import { FaEnvelope, FaStar, FaBox } from 'react-icons/fa';

const TopDeliveryMans = () => {
    const [deliveryMen, setDeliveryMen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchTopDeliveryMen = async () => {
            try {
                const response = await axiosSecure.get('/deliveryMen/top');
                setDeliveryMen(response.data);
            } catch (error) {
                setError(error.response ? error.response.data.message : 'Failed to fetch delivery men');
            } finally {
                setLoading(false);
            }
        };

        fetchTopDeliveryMen();
    }, []);

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="text-center text-red-500 py-10">Error: {error}</div>;

    return (
        <Container>
            <div className="dark:bg-gray-900 dark:text-white">
                <div className="px-4 py-28">
                    {/* Header */}
                    <div className="mb-14 text-center">
                        <h2 className="text-5xl font-extrabold mb-4 text-gray-800 dark:text-white">
                            Our Top Delivery Heroes
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            These dedicated professionals deliver excellence every day — rain or shine. Meet the faces behind our fast and reliable service.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        {deliveryMen.map((man) => (
                            <motion.div
                                key={man._id}
                                className="relative group overflow-hidden rounded-3xl p-6 bg-white/10 dark:bg-gray-800/30 backdrop-blur-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:-translate-y-2 hover:shadow-xl"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Border Animation Effect */}
                                <div className="absolute inset-0 shadow-4xl rounded-2xl border-2 border-yellow-400 scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 origin-bottom-left pointer-events-none z-0"></div>

                                {/* Card Content */}
                                <div className="relative z-10">
                                    {/* Avatar */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative w-full h-96 rounded-2xl overflow-hidden border-2 border-yellow-300 shadow-xl">
                                            <img
                                                src={man.image || '/default-avatar.png'}
                                                alt={man.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="text-center space-y-2">
                                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{man.name}</h3>
                                        <p className="text-gray-500 dark:text-gray-300 flex justify-center items-center gap-2 text-sm">
                                            <FaEnvelope /> {man.email}
                                        </p>
                                        <p className="flex justify-center items-center gap-1 text-xl font-semibold text-yellow-400">
                                            <FaStar /> {man.averageRating?.toFixed(1)} / 5
                                        </p>
                                        <p className="flex justify-center items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                            <FaBox /> Parcels Delivered: {man.totalReviews}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                        ))}
                    </motion.div>
                </div>
            </div>
        </Container>
    );
};

export default TopDeliveryMans;
