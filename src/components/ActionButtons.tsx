import React from 'react';

interface ActionButtonsProps {
  text1?: string;
  text2?: string;
  className?: string; // Allows you to pass 'absolute top-...' or 'mt-10'
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  text1 = "How it Works", 
  text2 = "Buy Salt AI",
  className = ""
}) => {
  return (
    <div className={`flex justify-center gap-6 ${className}`}>
      
  
      <button className="text-white text-[18px] font-medium px-8 pt-3.5 pb-4 rounded-full hover:bg-white/10 transition cursor-pointer border border-transparent">
        {text1}
      </button>

      <div 
        className="p-[2px] rounded-full transition hover:scale-105 cursor-pointer"
        style={{
          background: 'linear-gradient(106.2deg, #963488 -12.33%, #FC6F32 50.28%, #FF4A59 114.17%)'
        }}
      >
        <button className="w-full h-full bg-black rounded-full text-white text-[18px] font-medium px-8 pt-3.5 pb-4 hover:bg-white/10 transition cursor-pointer">
          {text2}
        </button>
      </div>

    </div>
  );
};

export default ActionButtons;