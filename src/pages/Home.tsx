import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Dr. John Smith
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300">
              Expert Orthodontist
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Transforming smiles with precision and care. With over 15 years of experience in orthodontics, 
              I am dedicated to providing personalized treatment plans that deliver exceptional results.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById('appointment');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-gradient-to-r from-gray-800 to-black border border-gray-700 rounded-lg 
                         hover:from-gray-700 hover:to-gray-800 transition-all duration-300 
                         transform hover:-translate-y-1 shadow-lg"
              >
                Book Appointment
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 border border-gray-700 rounded-lg 
                         hover:bg-gray-800 transition-all duration-300 
                         transform hover:-translate-y-1"
              >
                Our Services
              </button>
            </div>
          </motion.div>

          {/* Right Column - Doctor's Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-60 rounded-2xl"></div>
              <img
                src="/images/doctor.jpg"
                alt="Dr. John Smith"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gray-900 p-4 rounded-lg shadow-xl">
              <div className="text-center">
                <p className="text-sm text-gray-400">Years of Experience</p>
                <p className="text-2xl font-bold text-white">15+</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "👨‍⚕️",
              title: "Expert Care",
              description: "Personalized treatment plans for optimal results"
            },
            {
              icon: "💎",
              title: "Modern Technology",
              description: "State-of-the-art equipment and techniques"
            },
            {
              icon: "🌟",
              title: "Patient Focused",
              description: "Comfortable and stress-free experience"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 
                       transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 