import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaTruck, FaCheckCircle } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import Confetti from 'react-confetti'; // Importing Confetti

const trackingStages = [
  { id: 1, label: 'Order Placed', description: 'The order has been placed and ready for processing.' },
  { id: 2, label: 'Package Picked', description: 'The package has been picked up by the courier.' },
  { id: 3, label: 'In Transit', description: 'The package is on its way to your destination.' },
  { id: 4, label: 'Out for Delivery', description: 'The package is out for delivery to your address.' },
  { id: 5, label: 'Delivered', description: 'Your package has been successfully delivered!' },
];

const LiveTrackingDemo = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [confettiTrigger, setConfettiTrigger] = useState(false); // Trigger for confetti

  // Animation for the progress bar width
  const animationProps = useSpring({
    width: `${(currentStage / (trackingStages.length - 1)) * 100}%`,
    opacity: currentStage === trackingStages.length - 1 ? 0 : 1,
    config: { tension: 200, friction: 20 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        const nextStage = prev < trackingStages.length - 1 ? prev + 1 : prev;
        if (nextStage === trackingStages.length - 1) {
          setConfettiTrigger(true); // Trigger confetti when delivered
        }
        return nextStage;
      });
    }, 2500); // Faster animation speed for more dynamic feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold flex mx-auto justify-center text-center mb-8">Live Delivery Tracking...<FaTruck className='text-4xl text-[#13265A]'></FaTruck></h2>

      {/* Show Confetti when Delivered */}
      {confettiTrigger && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <div className="relative flex flex-col gap-8 items-center">
        <div className="w-full relative">
          {/* Animated Progress Bar */}
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
            <animated.div
              style={animationProps}
              className="h-2 bg-[#FF811A] rounded-full"
            />
          </div>

          {/* Tracking Stages */}
          <div className="flex justify-between items-center w-full relative z-10">
            {trackingStages.map((stage, index) => (
              <div key={stage.id} className="relative flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full ${
                    index <= currentStage
                      ? 'bg-yellow-400 text-white'
                      : 'bg-gray-300 dark:bg-gray-500'
                  } flex items-center justify-center shadow-lg transition-all`}
                >
                  {index < currentStage ? (
                    <FaCheckCircle className="text-white" />
                  ) : index === currentStage ? (
                    <FaTruck className="text-[#13265A] animate-pulse" />
                  ) : (
                    <FaMapMarkerAlt className="text-gray-400" />
                  )}
                </div>
                <span
                  className={`text-sm mt-2 transition-all ${
                    index <= currentStage ? 'text-yellow-400 font-semibold' : 'text-gray-400'
                  }`}
                >
                  {stage.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tracking Description */}
        <div className="mt-6 text-center text-lg text-gray-500 dark:text-gray-400">
          <p>{trackingStages[currentStage].description}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
        * This is a demo tracking. Actual tracking updates will be available after order placement.
      </div>
    </div>
  );
};

export default LiveTrackingDemo;
