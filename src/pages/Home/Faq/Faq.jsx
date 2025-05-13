import React from 'react';
import FAQ from '../../../assets/lottie/FAQ.json';
import Lottie from 'react-lottie';
import Container from '../../../components/Shared/Container';

const Faq = () => {
    const options = {
        loop: true,
        autoplay: true,
        animationData: FAQ,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div>
            <Container>
                <div className="p-2 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        {/* FAQ Section */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">Frequently Asked Questions</h2>

                            <div className="space-y-4">
                                <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-lg font-medium">
                                        What is Courier-Z?
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-gray-600">
                                            Courier-Z is a modern courier service platform that allows you to send and receive parcels quickly, reliably, and safely across different regions.
                                        </p>
                                    </div>
                                </div>

                                <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-lg font-medium">
                                        How can I book a delivery?
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-gray-600">
                                            You can book a delivery by entering your pickup and delivery details, selecting the parcel type, and confirming your order through our website or mobile app.
                                        </p>
                                    </div>
                                </div>

                                <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-lg font-medium">
                                        Can I track my shipment in real-time?
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-gray-600">
                                            Yes! Once your package is picked up, you can track it live using the tracking ID provided. You'll see all delivery stages including current location and estimated arrival.
                                        </p>
                                    </div>
                                </div>

                                <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-lg font-medium">
                                        What types of items can I send through Courier-Z?
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-gray-600">
                                            You can send documents, electronics, clothing, gifts, and other non-restricted items. We do not allow hazardous, illegal, or perishable items.
                                        </p>
                                    </div>
                                </div>

                                <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-lg font-medium">
                                        What if my package gets damaged or lost?
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-gray-600">
                                            We take utmost care during delivery, but in case of damage or loss, you can file a claim within 7 days. Our support team will guide you through the compensation process.
                                        </p>
                                    </div>
                                </div>


                                <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-lg font-medium">
                                        Do you offer international shipping?
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-gray-600">
                                            Yes, Courier-Z provides international shipping services to over 50 countries. Rates and delivery times vary based on destination and package size.
                                        </p>
                                    </div>
                                </div>

                                <div className="collapse collapse-arrow border border-gray-300 rounded-lg">
                                    <input type="checkbox" className="peer" />
                                    <div className="collapse-title text-lg font-medium">
                                        Can I schedule a pickup?
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-gray-600">
                                            Absolutely! You can schedule a pickup by selecting a convenient time slot when placing your delivery order. Our delivery partner will arrive at your location accordingly.
                                        </p>
                                    </div>
                                </div>

                            </div>


                        </div>

                        {/* Animation Section */}
                        <div className="flex justify-center">
                            <Lottie options={options} height={450} width={400} className="w-full max-w-md" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Faq;
