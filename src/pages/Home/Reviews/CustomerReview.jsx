import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast, Toaster } from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth'; // Import your auth context or hook
import Container from '../../../components/Shared/Container';

const CustomerReview = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth(); // Get logged-in user

    const fetchReviews = async () => {
        setLoading(true);
        try {
            const response = await axiosSecure.get('/reviewSection');
            setReviews(response.data);
        } catch (err) {
            console.error('Failed to fetch reviews:', err);
            toast.error('Failed to load reviews');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error('You must be logged in to submit a review');
            return;
        }

        if (!rating || !comment.trim()) {
            toast.error('Please provide a rating and comment');
            return;
        }

        const reviewData = {
            rating,
            reviewText: comment,
            userName: user.displayName || 'Anonymous',
            userEmail: user.email || 'no-email@example.com',
            userPhoto: user.photoURL || 'https://i.pravatar.cc/50?img=1',
            createdAt: new Date(),
        };

        try {
            await axiosSecure.post('/reviewSection', reviewData);
            setComment('');
            setRating(0);
            fetchReviews();
            toast.success('Review submitted successfully');
        } catch (err) {
            console.error('Failed to submit review:', err);
            toast.error('Error submitting review');
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div>
            <Container>
                <div className="my-16   ">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                            Customer Reviews
                        </h2>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                            See what our valued customers have to say about their experience.
                        </p>
                    </div>


                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                        {/* Review Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="lg:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                                Share Your Experience
                            </h3>

                            <label className="block mb-2 text-lg text-gray-700 dark:text-white">Your Rating:</label>
                            <div className="flex mb-6 text-yellow-400">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={`cursor-pointer text-3xl transition-transform duration-300 ${index < rating ? 'text-yellow-500' : 'text-gray-400'
                                            }`}
                                        onClick={() => setRating(index + 1)}
                                    />
                                ))}
                            </div>

                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full p-4 mb-6 rounded-xl border dark:bg-gray-700 dark:text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Write your review..."
                                rows="4"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                            >
                                Submit Review
                            </button>
                        </form>

                        {/* Review List */}
                        <div
                            className="lg:w-1/2 overflow-y-auto rounded-xl shadow-lg bg-white dark:bg-gray-800 p-6 space-y-6"
                            style={{ maxHeight: '500px', overflowY: 'auto' }}
                        >
                            {loading ? (
                                <p className="text-center text-gray-600 dark:text-gray-400">Loading reviews...</p>
                            ) : (
                                reviews.map((review) => (
                                    <div
                                        key={review._id}
                                        className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
                                    >
                                        <div className="flex items-center mb-4">
                                            <img
                                                src={review.userPhoto || '/default-avatar.png'}
                                                alt={review.userName}
                                                className="w-14 h-14 rounded-full mr-4 object-cover"
                                            />
                                            <p className="font-semibold text-lg text-gray-900 dark:text-white">
                                                {review.userName}
                                            </p>
                                        </div>
                                        <div className="flex mb-2 text-yellow-400">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 italic">
                                            "{review.reviewText}"
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Toast Notifications Container */}
                    <Toaster position="bottom-center" reverseOrder={false} />
                </div>
            </Container>
        </div>
    );
};

export default CustomerReview;
