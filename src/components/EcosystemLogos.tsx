import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hexagon } from 'lucide-react';
import SolanaLogo from '../assets/Solana.png';
import TelegramLogo from '../assets/telegram.png';
import RedCircleLogo from '../assets/redcircle.png';

const logosFront = [
  { 
    name: "Telegram", 
    icon: <img src={TelegramLogo} alt="Telegram" className="w-[60px] h-[60px] md:w-[102px] md:h-[102px] object-contain" />,
    showName: false
  },
  { 
    name: "SOLANA", 
    icon: <img src={SolanaLogo} alt="Solana" className="w-[100px] md:w-[334px] object-contain" />,
    showName: false 
  },
  { 
    name: "arweave", 
    icon: (
      <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full border-2 md:border-4 border-white flex items-center justify-center text-4xl md:text-7xl font-bold text-white leading-none pb-2 md:pb-4">
        a
      </div>
    ),
    showName: true
  },
  { 
    name: "bittensor", 
    icon: <Hexagon className="text-white w-[60px] h-[60px] md:w-20 md:h-20" strokeWidth={1.5} />,
    showName: true
  },
  { 
    name: "AKASH", 
    icon: <img src={RedCircleLogo} alt="Akash" className="w-[60px] h-[60px] md:w-[102px] md:h-[102px] object-contain" />,
    showName: false 
  },
  { 
    name: "Telegram", 
    icon: <img src={TelegramLogo} alt="Telegram" className="w-[60px] h-[60px] md:w-[102px] md:h-[102px] object-contain" />,
    showName: false
  },
];

const EcosystemLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xFront = useTransform(scrollYProgress, [0, 0.5], ["80%", "-23%"]);
  

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="min-h-[40vh] py-20 flex flex-col justify-center relative z-20 overflow-hidden">
      
      <motion.div style={{ opacity, scale }} className="w-full px-4">
        
    
        <h2 className="text-center text-white text-2xl md:text-[64px] mb-12 md:mb-24 font-medium tracking-tight">
           Projects integrated into the Arrakis AI Ecosystem
        </h2>

      
        <div className="flex flex-wrap justify-center items-center gap-8 md:hidden">
          {[...logosFront].map((logo, i) => (
            <div 
              key={`mobile-${i}`} 
              className="flex flex-col items-center gap-2"
            >
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-3xl border border-white/10">
                {logo.icon}
              </div>
              {logo.showName && (
                <span className="text-lg font-bold text-white tracking-widest">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>


       
        <motion.div 
          style={{ x: xFront }}
          className="hidden md:flex items-center gap-24 w-max pl-[10vw]"
        >
          {[...logosFront].map((logo, i) => (
            <div 
              key={`desktop-${i}`} 
              className="flex items-center gap-4 px-8 py-4 rounded-full shadow-2xl transition hover:scale-105 hover:border-white/30"
            >
              {logo.icon}
              
              {logo.showName && (
                <span className="text-4xl font-bold text-white tracking-widest">
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

export default EcosystemLogos;