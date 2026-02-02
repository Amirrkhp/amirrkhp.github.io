import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { LeadForm } from "@/components/lead-form";
import { MapPin, Building2, TrendingUp, Home as HomeIcon, CheckCircle2, Star, Award, Briefcase } from "lucide-react";
import profilePic from "@assets/K_Amir-6_1770004657259.jpg";

// Animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-body">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash: Luxury modern home exterior with pool at twilight */}
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop"
            alt="Luxury Southern California Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 md:from-primary/80 md:to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 mb-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wide">
                Premier Southern California Real Estate
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Helping Buyers & Sellers <span className="text-secondary italic">Win</span> in This Market
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                Expert representation across Los Angeles, Orange County & the Inland Empire. 
                Whether you're investing, buying your first home, or selling for top dollar, 
                I deliver results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-secondary text-primary font-bold rounded-lg shadow-xl hover:bg-white hover:scale-105 transition-all duration-300"
                >
                  Schedule a Free Consultation
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Get a Home Value Report
                </button>
              </div>

              <div className="mt-12 flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">5+ Years Experience</span>
                </div>
                <div className="w-px h-8 bg-white/30" />
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium">Top Negotiator</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 bg-secondary/30 rounded-2xl transform rotate-3" />
              <img 
                src={profilePic}
                alt="K. Amir - Real Estate Agent" 
                className="relative rounded-xl shadow-2xl w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-heading font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Families<br/>Helped</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Meet Your Realtor</h4>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Your Trusted Partner in Southern California Real Estate
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Navigating the complex real estate market of Southern California requires more than just a license—it requires a strategist, a negotiator, and a partner who truly cares about your financial future.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With a background in investment analysis and a deep love for architectural design, I help clients see value where others don't. From off-market opportunities in Los Angeles to family communities in the Inland Empire, my mission is to make your real estate goals a reality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Market Analysis Expert", 
                  "Strategic Marketing Plans",
                  "Skilled Negotiation", 
                  "Full-Service Concierge"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 italic text-gray-700">
                "Real estate isn't just about transactions; it's about building wealth and finding a place to call home. I treat every client's purchase or sale as if it were my own."
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">How I Can Help You</h2>
            <p className="text-gray-600 text-lg">Comprehensive real estate services tailored to your unique goals.</p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {/* Buyer Card */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <HomeIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Buyer Representation</h3>
              <p className="text-gray-600 mb-6">
                Access exclusive listings and get expert guidance through inspections, financing, and closing. I help you win in competitive situations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary mt-1">•</span> Customized property search
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary mt-1">•</span> Offer strategy consultation
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary mt-1">•</span> First-time buyer education
                </li>
              </ul>
            </motion.div>

            {/* Seller Card */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-secondary">
              <div className="w-14 h-14 bg-secondary text-primary rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Seller Representation</h3>
              <p className="text-gray-600 mb-6">
                Maximize your home's value with professional staging, high-end photography, and targeted digital marketing campaigns.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary mt-1">•</span> Free comprehensive home valuation
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary mt-1">•</span> Professional staging advice
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary mt-1">•</span> High-exposure marketing suite
                </li>
              </ul>
            </motion.div>

            {/* Investor Card */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">Investor Support</h3>
              <p className="text-gray-600 mb-6">
                Data-driven analysis for ROI-focused investors. From multi-family units to fix-and-flips, I identify profitable opportunities.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary mt-1">•</span> Cap rate & ROI analysis
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary mt-1">•</span> Off-market deal access
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary mt-1">•</span> 1031 Exchange guidance
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -ml-20 -mb-20" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Areas I Serve</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Based in Southern California, I provide specialized local knowledge across diverse neighborhoods. Whether you want the coastal lifestyle of OC or the rapid growth of the Inland Empire, I have you covered.
              </p>
              
              <div className="space-y-6">
                {[
                  { name: "Los Angeles County", desc: "From downtown lofts to suburban estates." },
                  { name: "Orange County", desc: "Coastal living and master-planned communities." },
                  { name: "Inland Empire", desc: "Rapidly growing family neighborhoods and investment hubs." }
                ].map((area) => (
                  <div key={area.name} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{area.name}</h4>
                      <p className="text-gray-400 text-sm">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              {/* Unsplash: Map or aerial view of California coast */}
              <img 
                src="https://images.unsplash.com/photo-1544161513-0179fe746fd5?q=80&w=2670&auto=format&fit=crop" 
                alt="Southern California Coast" 
                className="rounded-2xl shadow-2xl border-4 border-white/10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Let's Discuss Your Goals</h2>
              <p className="text-gray-600 text-lg">Schedule a free consultation or request a custom home valuation today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Left Side Info */}
              <div className="md:col-span-2 space-y-8">
                <div className="bg-primary text-white p-8 rounded-xl shadow-lg h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -mr-10 -mt-10" />
                  
                  <h3 className="text-2xl font-bold font-heading mb-6 relative z-10">Why Choose Me?</h3>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex gap-3">
                      <div className="mt-1"><Star className="w-5 h-5 text-secondary" /></div>
                      <div>
                        <h4 className="font-bold">Client-First Approach</h4>
                        <p className="text-sm text-gray-300 mt-1">I prioritize your timeline and financial goals above all else.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="mt-1"><TrendingUp className="w-5 h-5 text-secondary" /></div>
                      <div>
                        <h4 className="font-bold">Data-Driven</h4>
                        <p className="text-sm text-gray-300 mt-1">Decisions backed by comprehensive market analysis.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-secondary" /></div>
                      <div>
                        <h4 className="font-bold">Seamless Process</h4>
                        <p className="text-sm text-gray-300 mt-1">From contract to keys, I handle the heavy lifting for you.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/20">
                    <p className="text-sm text-gray-300 mb-2">Direct Contact:</p>
                    <a href="tel:+15551234567" className="block text-xl font-bold hover:text-secondary transition-colors">(555) 123-4567</a>
                    <a href="mailto:contact@kamir.com" className="block text-lg hover:text-secondary transition-colors mt-1">contact@kamir.com</a>
                  </div>
                </div>
              </div>

              {/* Right Side Form */}
              <div className="md:col-span-3">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white text-gray-900 rounded-sm flex items-center justify-center font-bold font-heading">KA</div>
                <span className="text-white font-bold text-xl font-heading">K. AMIR</span>
              </div>
              <p className="text-sm max-w-xs mb-6">
                Dedicated to providing exceptional service and expertise for all your real estate needs in Southern California.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">IG</div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">FB</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white">About Me</button></li>
                <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white">Services</button></li>
                <li><button onClick={() => document.getElementById('areas')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white">Areas Served</button></li>
                <li><button onClick={scrollToContact} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">DRE #01234567</a></li>
                <li><a href="#" className="hover:text-white">Fair Housing Notice</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} K. Amir Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
