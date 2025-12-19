import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hexagon } from 'lucide-react';
import SolanaLogo from '../assets/Solana.png';
import TelegramLogo from '../assets/telegram.png';
import RedCircleLogo from '../assets/redcircle.png';
const logosFront = [

      { 
    name: "Telegram", 
    icon: <img src={TelegramLogo} alt="Telegram" className="w-[102px] h-[102px] object-contain" />,
    showName: false
  },


  { 
    name: "SOLANA", 
   
    icon: <img src={SolanaLogo} alt="Solana" className="w-[150px] md:w-[334px] object-contain" />,
    showName: false 
  },
  { 
    name: "arweave", 
    icon: (
      <div className="w-[100px] h-[100px] rounded-full border-4 border-white flex items-center justify-center text-7xl font-bold text-white leading-none pb-4">
        a
      </div>
    ),
    showName: true
},
  { 
    name: "bittensor", 
    icon: <Hexagon className="text-white w-8 h-8" />,
    showName: true
  },
  { 
    name: "AKASH", 
    icon: <img src={RedCircleLogo} alt="Akash" className="w-[102px] h-[102px] object-contain" />,
    showName: false 
  },
  { 
    name: "Telegram", 
    icon: <img src={TelegramLogo} alt="Telegram" className="w-[102px] h-[102px] object-contain" />,
    showName: false
  },
];

const EcosystemLogos =  ()=> {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
const xFront = useTransform(
  scrollYProgress,
  [0, 0.5],
  ["80%", "-24%"]
);

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [1, 1, 0.8]);

  return (
    <section ref={containerRef} className="h-[40vh] flex flex-col justify-center relative z-20 overflow-hidden">
      
      <motion.div style={{ opacity, scale }} className="w-full">
        
      
        <h2 className="text-center text-white text-3xl md:text-5xl mb-24 font-medium tracking-tight">
           Projects integrated into the Arrakis AI Ecosystem
        </h2>

       
        <motion.div 
          style={{ x: xFront }}
          className="flex items-center gap-12 md:gap-24 w-max pl-[10vw]"
        >
         
          {[...logosFront].map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4   px-8 py-4 rounded-full shadow-2xl transition hover:scale-105 hover:border-white/30"
            >
             
              {logo.icon}
              
         
              {logo.showName && (
                <span className="text-4xl font-bold  text-white tracking-widest">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}

export default EcosystemLogos