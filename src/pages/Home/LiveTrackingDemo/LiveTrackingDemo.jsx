import React, { useState, useEffect } from 'react';
import { FaBoxOpen, FaClipboardCheck, FaTruckMoving, FaMapMarkedAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { VscDebugRestart } from "react-icons/vsc";
import Container from '../../../components/Shared/Container';
import { IoCheckbox } from "react-icons/io5";
const stages = [
  { label: 'Order Placed', icon: <FaBoxOpen />, color: '#FFB800' },
  { label: 'Picked Up', icon: <FaClipboardCheck />, color: '#9B4DFF' },
  { label: 'In Transit', icon: <FaTruckMoving />, color: '#00BFFF' },
  { label: 'Out for Delivery', icon: <FaMapMarkedAlt />, color: '#4B89FF' },
  { label: 'Delivered', icon: <FaCheckCircle />, color: '#28A745' },
];

const LiveTrackingDemo = () => {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    if (currentStage < stages.length - 1) {
      const timer = setInterval(() => {
        setCurrentStage((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [currentStage]);

  const progressPercentage = (currentStage / (stages.length - 1)) * 100;

  // Restart function
  const handleRestart = () => {
    setCurrentStage(0); // Reset to the first stage
  };

  return (
    <div>
      <Container>
        <div className="  flex items-center justify-center my-24 dark:text-white dark:bg-gray-800">
          <div className="w-full rounded-xl p-6 sm:p-10 border">
            <h2 className="text-3xl font-bold text-center  mb-10">
              📦 Live Package Tracking
            </h2>

            {/* Progress Bar */}
            <div className="w-full h-2 md:h-2 bg-gray-300 rounded-full mb-8">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: '#FFCC53' }}
                initial={{ width: 0 }}
                animate={{
                  width: window.innerWidth >= 768 ? `${progressPercentage}%` : '100%',
                  height: window.innerWidth < 768 ? `${progressPercentage}%` : '100%',
                }}
                transition={{ duration: 2 }}
              />
            </div>

            {/* Stages Layout */}
            <div className="flex md:flex-row flex-col justify-between items-center gap-6">
              {stages.map((stage, index) => {
                const isCurrent = index === currentStage;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center ${isCurrent ? 'text-blue-700' : 'text-gray-500'
                      }`}
                  >
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl shadow-md transition-all duration-300`}
                      style={{
                        backgroundColor: isCurrent
                          ? stage.color
                          : index < currentStage
                            ? '#FFCC53'
                            : '#FF841C',
                      }}
                    >
                      {stage.icon}
                    </div>
                    <p className="mt-2 text-sm font-medium text-center">{stage.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Status Info */}
            <div className="text-center mt-6">
              <p className="text-xl font-medium ">
                Current Status:{' '}
                <span className="text-yellow-400 font-bold">
                  {stages[currentStage].label}
                </span>
              </p>
              {currentStage === stages.length - 1 && (
                <p className="text-blue-700 flex justify-center items-center font-semibold mt-2 text-xl">
                  <span><IoCheckbox size={20}/></span> Package Delivered Successfully!
                </p>
              )}
            </div>

            {/* Restart Button */}
            <div className="text-center mt-6">
              <button
                onClick={handleRestart}
                className="btn btn-primary font-bold bg-yellow-500 hover:bg-[#EE8215] text-white w-full md:w-auto py-3 px-6  rounded-md border-[#EE8215] focus:outline-none focus:ring-2 focus:ring-primary shadow-lg "
              >
                <span className=''><VscDebugRestart size={20} /></span> Restart Tracking
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LiveTrackingDemo;
