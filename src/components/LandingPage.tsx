import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; 
import MoonImage from '../assets/moonpic.jpg'; 
import ActionButtons from './ActionButtons';
import EcosystemLogos from './EcosystemLogos';
import CrowdSourceFeature from './CrowdSourceFeature';

const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });


  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative bg-black min-h-[200vh] overflow-hidden font-sans selection:bg-[#FF4A59] selection:text-white">
      
    
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
        <motion.div style={{ y: bgY }} className="relative w-full h-full">
      
          <div className="absolute top-[10%] -right-[10%] w-[80vw] h-[80vh] md:w-[800px] md:h-[800px] opacity-90">
             <img 
               src={MoonImage}
               alt="Planet" 
               className="w-full h-full object-contain mix-blend-screen scale-x-[-1]" 
               style={{
                 maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                 WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
               }}
             />
          </div>

          {/* 2. GRADIENTS */}
          <div 
            className="absolute rounded-full blur-[100px] md:blur-[120px] opacity-50"
            style={{
              background: 'linear-gradient(173.65deg, rgba(252, 111, 50, 0.2) -0.71%, rgba(255, 74, 89, 0.2) 86.87%)',
              width: '504px', height: '795px', top: '-297px', left: '350px', transform: 'rotate(124deg)',
            }}
          />
          <div 
            className="absolute rounded-full blur-[100px] md:blur-[120px] opacity-50"
            style={{
              background: 'linear-gradient(166.79deg, rgba(50, 191, 252, 0.2) -15.02%, rgba(0, 85, 119, 0.2) 83.46%)',
              width: '504px', height: '795px', top: '632px', left: '-214px', transform: 'rotate(112deg)',
            }}
          />

          {/* Noise */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          
        </motion.div>
      </div>


    
      <div className="relative z-10 flex flex-col">
        
  
        <section className="h-screen w-full flex flex-col items-center justify-center relative">
          
     
          <ActionButtons className="absolute top-[5%] left-0 right-0 z-50" text1="How it Works" text2="Buy Salt AI" />

        
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-10"
          >
            
         
            <div className="relative group">
           
              <div className="absolute inset-0 bg-white/5 blur-[50px] rounded-full scale-150 animate-pulse-slow" />
              
           
              <div className="relative w-[100px] h-[160px] rounded-[50px] border border-white/20 bg-white/5 backdrop-blur-sm flex justify-center pt-6 shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:border-white/40">
                
              
                <motion.div 
                  animate={{ y: [0, 60, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-3 h-8 bg-gradient-to-b from-[#FF4A59] to-[#FC6F32] rounded-full shadow-[0_0_20px_#FF4A59]"
                />
              </div>
            </div>

     
            <div className="flex flex-col items-center gap-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 text-lg md:text-xl tracking-[0.8em] font-light uppercase text-center">
                Scroll to Explore
              </span>
              
   
              <div className="flex flex-col items-center gap-2">
                 <motion.div 
                    animate={{ height: [0, 60, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-[1px] bg-gradient-to-b from-white/80 to-transparent"
                 />
                 <ChevronDown className="text-white/40 w-6 h-6 animate-bounce" />
              </div>
            </div>
            
          </motion.div>

        </section>

       
        <div className="relative z-20 pb-20">
           <EcosystemLogos />
        </div>

        {/* --- SECTION 3: FEATURES (Parallax Reveal) --- */}
        <div className="relative z-20 pb-32">
           <CrowdSourceFeature />
        </div>

      </div>

    </div>
  );
};

export default LandingPage;