import { motion } from 'framer-motion';

const CrowdSourceFeature = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 lg:px-32">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
    
        <h2 className="text-5xl md:text-[64px]  font-medium text-white mb-8 leading-[1.1] tracking-tight">
          Crowdsourcing our collective <br className="hidden md:block" />
          intelligence to build the best AI
        </h2>

        <p className="text-white text-lg md:text-[24px] leading-relaxed mb-12 max-w-3xl font-light">
         Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI models.
        </p>

        {/* The Pill Button */}
        <button className="group relative  pt-5.5 px-12 pb-6  rounded-full overflow-hidden transition-all hover:scale-105">
          <div className="absolute inset-0 rounded-full border border-[#FF4A59] opacity-80" />
          <div className="absolute inset-0 bg-[#FF4A59]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative text-white text-sm md:text-[24px] font-medium tracking-widest uppercase">
            Use The Cutting Edge AI
          </span>
        </button>

      </motion.div>
    </section>
  );
}

export default CrowdSourceFeature