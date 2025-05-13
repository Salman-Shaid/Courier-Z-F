import React, { useState } from 'react';
import Container from '../../../components/Shared/Container';

const PricePlan = () => {
    const [weight, setWeight] = useState(1);
    const [distance, setDistance] = useState(5);
    const [speed, setSpeed] = useState("standard");
    const [cost, setCost] = useState(null);

    const calculateCost = () => {
        let baseRate = 40;
        let distanceCost = distance * 10;
        let extraWeight = weight > 2 ? (weight - 2) * 20 : 0;
        let speedMultiplier = speed === "express" ? 1.5 : speed === "overnight" ? 2 : 1;

        let total = (baseRate + distanceCost + extraWeight) * speedMultiplier;
        setCost(Math.round(total));
    };

    return (
        <div className=''>
            <Container>
                <div className="py-12 px-12 bg-gray-100 dark:bg-gray-800 rounded-xl border my-20 mx-auto text-gray-800 dark:text-gray-100">
                    <h2 className="text-3xl font-bold text-center mb-8 ">Pricing Plans</h2>

                    {/* Pricing Tiers Table */}
                    <div className="overflow-x-auto mb-12">
                        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-200 dark:bg-gray-700 text-left">
                                    <th className="px-4 py-3">Plan</th>
                                    <th className="px-4 py-3">Weight Limit</th>
                                    <th className="px-4 py-3">Distance</th>
                                    <th className="px-4 py-3">Price</th>
                                    <th className="px-4 py-3">Features</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-300 dark:border-gray-600">
                                    <td className="px-4 py-3 font-medium">Basic</td>
                                    <td className="px-4 py-3">Up to 2kg</td>
                                    <td className="px-4 py-3">Up to 10km</td>
                                    <td className="px-4 py-3">50</td>
                                    <td className="px-4 py-3">Same-day, Tracking, SMS Alerts</td>
                                </tr>
                                <tr className="border-t border-gray-300 dark:border-gray-600">
                                    <td className="px-4 py-3 font-medium">Standard</td>
                                    <td className="px-4 py-3">Up to 5kg</td>
                                    <td className="px-4 py-3">Up to 50km</td>
                                    <td className="px-4 py-3">120</td>
                                    <td className="px-4 py-3">Pickup, Tracking, SMS Alerts</td>
                                </tr>
                                <tr className="border-t border-gray-300 dark:border-gray-600">
                                    <td className="px-4 py-3 font-medium">Premium</td>
                                    <td className="px-4 py-3">Up to 10kg</td>
                                    <td className="px-4 py-3">Nationwide</td>
                                    <td className="px-4 py-3">250+</td>
                                    <td className="px-4 py-3">Insurance, Priority Support</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Cost Estimator */}
                    <div className=" dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Cost Estimator</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Weight (kg):</label>
                                <input
                                    type="number"
                                    min="0.1"
                                    step="0.1"
                                    value={weight}
                                    onChange={(e) => setWeight(Number(e.target.value))}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none dark:bg-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Distance (km):</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={distance}
                                    onChange={(e) => setDistance(Number(e.target.value))}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none dark:bg-gray-700"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Delivery Speed:</label>
                                <select
                                    value={speed}
                                    onChange={(e) => setSpeed(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-700"
                                >
                                    <option value="standard">Standard</option>
                                    <option value="express">Express (1.5x)</option>
                                    <option value="overnight">Overnight (2x)</option>
                                </select>
                            </div>
                        </div>

                        <button
                            onClick={calculateCost}
                            className="btn btn-primary font-bold bg-yellow-500 hover:bg-[#EE8215] text-white w-full md:w-auto py-3 px-6  rounded-md border-[#EE8215] focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
                        >
                            Calculate Cost
                        </button>

                        {cost !== null && (
                            <div className="mt-4 text-lg font-semibold">
                                Estimated Cost: <span className="text-green-600 dark:text-green-400">{cost}</span>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PricePlan;
