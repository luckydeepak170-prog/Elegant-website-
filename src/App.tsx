/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Code, 
  Palette, 
  Globe, 
  Server, 
  Mail, 
  ShieldCheck, 
  Cpu, 
  Layout, 
  CheckCircle2, 
  Menu, 
  X,
  Layers,
  Orbit,
  Sparkles,
  Diamond
} from "lucide-react";
import { useState, useRef, FormEvent } from "react";

const TEAM = [
  {
    name: "Deepak Sharma",
    role: "Founder & Lead Architect",
    description: "Deepak is the engineering force of Elegant Website, crafting high-performance codebases and architectural foundations for every client build.",
    icon: <Code className="w-6 h-6" />,
    specialty: "Full Stack Engineering & Performance Systems"
  },
  {
    name: "Priyam Pathak",
    role: "CEO & Creative Director",
    description: "Priyam directs the vision, specializing in modern UI/UX design and architectural brand strategies that define our premium standard.",
    icon: <Palette className="w-6 h-6" />,
    specialty: "Digital Product Design & Brand Aesthetics"
  },
  {
    name: "Arqam Salmani",
    role: "Co-founder & Cloud Architect",
    description: "Arqam manages the global digital footprint, securing mission-critical domain infrastructure and resilient hosting ecosystems.",
    icon: <Server className="w-6 h-6" />,
    specialty: "Infrastructure Strategy & Domain Scaling"
  }
];

const SERVICES = [
  {
    title: "Strategic Design",
    description: "Intentional visual systems that communicate authority and elegance. No templates, just architectural precision.",
    icon: <Layout className="w-12 h-12" />
  },
  {
    title: "High-Performance Code",
    description: "Clean, sustainable, and remarkably fast implementation using top-tier modern development frameworks.",
    icon: <Cpu className="w-12 h-12" />
  },
  {
    title: "Global Infrastructure",
    description: "Advanced domain management and hardened cloud hosting strategies for a bulletproof digital presence.",
    icon: <Globe className="w-12 h-12" />
  }
];

const PROCESS = [
  { 
    step: "01", 
    title: "Digital Discovery", 
    description: "Deep analysis of business objectives, user demographics, and technical constraints.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  { 
    step: "02", 
    title: "Visual Protocol", 
    description: "Architecting the design system, wireframing, and establishing high-fidelity visual direction.",
    icon: <Palette className="w-6 h-6" />
  },
  { 
    step: "03", 
    title: "Core Build", 
    description: "Engineered development phase where your vision is translated into a scalable digital asset.",
    icon: <Code className="w-6 h-6" />
  },
  { 
    step: "04", 
    title: "Deployment Phase", 
    description: "Zero-friction launch with infrastructure hardening and performance validation.",
    icon: <Globe className="w-6 h-6" />
  }
];

const PLANS = [
  {
    name: "Starter Essence",
    price: "4000rs",
    features: ["Custom Single Page Design", "Performance Optimization", "Essential SEO", "Domain Setup Assistance"],
    recommended: false
  },
  {
    name: "Professional Essence",
    price: "5000rs",
    features: ["Multi-page custom design", "Deep SEO Integration", "1 Year Domain Registration", "Launch Support"],
    recommended: true
  },
  {
    name: "Enterprise Eminence",
    price: "Custom",
    features: ["Full Ecosystem Build", "Multi-business Hosting Strategy", "Priority Managed Services", "Ongoing Technical Partnership"],
    recommended: false
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    
    // Simulate processing
    setTimeout(() => {
      setFormStatus("success");
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const details = formData.get("details");
      
      const subject = encodeURIComponent(`Inquiry from Elegant Website: ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${details}`
      );
      
      // Redirect to mailto for direct sending as requested
      window.location.href = `mailto:luckydeepak170@gmail.com?subject=${subject}&body=${body}`;
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-ink-dark selection:bg-accent-blue/10 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-blue via-accent-magenta to-accent-cyan opacity-40" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="relative">
                {/* Minimalist Square Chassis */}
                <div className="w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center text-white border border-white/10 shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <div className="flex items-baseline leading-none">
                    <span className="text-xl font-light tracking-tighter text-white">E</span>
                    <span className="text-xl font-black italic bg-gradient-to-br from-accent-blue via-accent-magenta to-accent-cyan bg-clip-text text-transparent transform translate-y-0.5">W</span>
                  </div>
                  {/* Static minimalist vibrant accent */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-accent-cyan rounded-full m-1.5 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight uppercase leading-none text-zinc-900">
                  Elegant
                </span>
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent-magenta mt-1.5 ml-0.5">
                  Website
                </span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-10">
              {["Services", "Team", "Plans"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] font-black uppercase tracking-[0.2em] relative group"
                >
                  <span className="hover:text-accent-blue transition-colors">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-blue transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
          
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-accent-slate text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-accent-blue transition-all active:scale-95 shadow-2xl shadow-accent-blue/40 border border-white/10 hover:border-accent-vibrant"
          >
            Start Project
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 md:pt-64 pb-24 md:pb-48 px-6 md:px-8 relative bg-white overflow-hidden">
        {/* Vibrant Mesh Background */}
        <div className="absolute top-0 right-[-10%] w-full h-full pointer-events-none -z-10">
           <div className="absolute top-[-20%] right-[-20%] w-[1000px] h-[1000px] bg-accent-blue/10 rounded-full blur-[150px] animate-pulse" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-accent-vibrant/10 rounded-full blur-[120px]" />
           <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[100px] animate-bounce" />
        </div>
        
        <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[65%] text-center md:text-left"
          >
            <div className="inline-block mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white bg-accent-blue px-4 py-2 rounded-full shadow-xl shadow-accent-blue/40">Collective // Est. 2026</span>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black leading-[0.85] mb-12 tracking-tighter text-accent-slate">
              Infinite <br className="hidden md:block" />
              Digital <span className="bg-gradient-to-r from-accent-blue via-accent-magenta to-accent-cyan bg-clip-text text-transparent italic">Reach</span>.
            </h1>
            <p className="text-xl md:text-2xl text-ink-muted font-light max-w-2xl mx-auto md:mx-0 leading-relaxed mb-16">
              Engineering the next generation of high-stakes, resilient digital ecosystems 
              for leaders who demand architectural perfection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8">
              <button 
                onClick={scrollToContact}
                className="w-full sm:w-auto group flex items-center justify-center gap-6 px-12 py-6 bg-accent-slate text-white font-black uppercase text-xs tracking-widest rounded-xl hover:bg-accent-blue hover:shadow-2xl hover:shadow-accent-blue/50 transition-all duration-500"
              >
                Launch Protocol <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="hidden md:flex flex-col gap-6 opacity-20">
             <div className="w-24 h-24 border-2 border-accent-blue rounded-full animate-pulse" />
             <div className="w-12 h-12 bg-accent-vibrant rounded-lg rotate-45" />
             <div className="w-32 h-32 border-2 border-accent-slate rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 md:px-8 bg-bg-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 border-b border-border/50 pb-16">
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-blue bg-accent-blue/10 px-4 py-2 rounded-full">Core Directives // 2026</span>
              <h2 className="text-6xl md:text-8xl font-black text-accent-slate leading-none">The System.</h2>
            </div>
            <p className="md:w-1/3 text-xl text-ink-muted leading-relaxed font-light">
              Engineering high-stakes digital assets for businesses where perfection is the only acceptable baseline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { ...SERVICES[0], color: "bg-gradient-to-br from-blue-600 to-cyan-500 shadow-blue-500/30" },
              { ...SERVICES[1], color: "bg-gradient-to-br from-indigo-600 to-accent-magenta shadow-indigo-500/30" },
              { ...SERVICES[2], color: "bg-gradient-to-br from-emerald-500 to-cyan-400 shadow-cyan-500/30" }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group p-12 bg-white rounded-[2rem] shadow-xl shadow-accent-slate/5 border border-border/50 transition-all duration-500"
              >
                <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center text-white mb-10 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                   {service.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight group-hover:text-accent-blue transition-colors">{service.title}</h3>
                <p className="text-ink-muted leading-relaxed text-sm font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - High Contrast Monochrome */}
      <section className="py-40 px-6 md:px-8 bg-white text-accent-slate relative overflow-hidden border-y border-border/30">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-32 flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">The <br />Protocol.</h2>
            <div className="hidden md:block h-px bg-accent-slate/10 flex-grow ml-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-10 bg-accent-slate text-white rounded-3xl hover:bg-black transition-all duration-500 shadow-2xl shadow-accent-slate/20 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-blue/10 to-accent-magenta/10 blur-2xl group-hover:opacity-100 opacity-0 transition-opacity" />
                <div className="text-5xl font-black text-white/10 mb-10 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-accent-cyan group-hover:bg-clip-text transition-all font-mono">
                  {p.step}
                </div>
                <h3 className="text-xl font-bold mb-6 tracking-tight uppercase transition-colors group-hover:text-accent-cyan">{p.title}</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-48 px-6 md:px-8 bg-bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center">
            <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-blue mb-6 block"
            >
               Executive Visionaries
            </motion.span>
            <h2 className="text-6xl md:text-[7rem] font-black text-accent-slate uppercase italic tracking-tighter leading-[0.8] mb-12 max-w-5xl mx-auto">
               The Mastermind <br /> Behind It.
            </h2>
            <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TEAM.map((member, i) => {
              const gradients = [
                "from-blue-600/30 via-white/80 to-cyan-400/30",
                "from-accent-magenta/30 via-white/80 to-pink-500/30",
                "from-accent-emerald/30 via-white/80 to-blue-700/30"
              ];
              const borderGlows = [
                "group-hover:border-blue-500 hover:shadow-blue-500/30",
                "group-hover:border-accent-magenta hover:shadow-accent-magenta/20",
                "group-hover:border-accent-emerald hover:shadow-accent-emerald/30"
              ];
              const accentColors = [
                "text-blue-600 bg-blue-50/50",
                "text-accent-magenta bg-magenta-50/50",
                "text-accent-emerald bg-emerald-50/50"
              ];
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${gradients[i]} p-10 md:p-14 group hover:-translate-y-4 hover:scale-[1.02] ${borderGlows[i]} hover:shadow-2xl bg-[length:200%_200%] hover:bg-[100%_100%] transition-all duration-700 shadow-xl shadow-accent-slate/5 rounded-3xl border border-border/50 relative overflow-hidden`}
                >
                <div className="absolute top-0 right-0 p-8 text-ink-muted/5 font-black text-6xl group-hover:text-accent-blue/10 transition-colors italic">
                  {i+1}
                </div>
                <div className="flex justify-between items-start mb-16">
                   <div className={`w-16 h-16 ${accentColors[i]} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner border border-current/10`}>
                      {member.icon}
                   </div>
                   <div className="text-[10px] font-mono font-bold tracking-widest text-accent-vibrant py-1 px-3 bg-accent-vibrant/5 rounded-full">0{i+1}_CORE</div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-4xl font-black tracking-tighter uppercase mb-4 group-hover:text-accent-blue transition-colors">
                       {member.name}
                    </h4>
                    <div className="text-[10px] font-black uppercase tracking-widest text-white py-2 px-4 bg-accent-slate rounded-lg inline-block">
                      {member.role}
                    </div>
                  </div>

                  <p className="text-ink-muted text-lg leading-relaxed font-light">
                    {member.description}
                  </p>

                  <div className="pt-10 border-t border-border/50 flex flex-col gap-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ink-muted">Director Specialism</span>
                    <span className="text-sm font-black text-accent-blue bg-accent-blue/5 py-2 px-4 rounded-lg border border-accent-blue/10">
                       {member.specialty}
                    </span>
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent-blue to-accent-vibrant scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            );
          })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-32 px-6 md:px-8 bg-white border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-blue mb-6 block">Tiered Investment</span>
            <h2 className="text-6xl md:text-8xl font-black text-accent-slate tracking-tighter uppercase leading-none">Website Plan.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPlan(i)}
                animate={selectedPlan === i ? { 
                  scale: 1.05, 
                  y: -20,
                  transition: { duration: 0.4, ease: "easeOut" }
                } : { 
                  scale: 1, 
                  y: plan.recommended ? -16 : 0,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className={`p-12 cursor-pointer bg-bg-subtle/50 border rounded-[2.5rem] group transition-all duration-500 relative ${
                  selectedPlan === i 
                    ? 'bg-white border-accent-magenta ring-4 ring-accent-magenta/20 shadow-2xl shadow-accent-magenta/30 z-10' 
                    : plan.recommended 
                      ? 'border-accent-blue ring-2 ring-accent-blue/20' 
                      : 'border-border/50 hover:bg-white hover:shadow-2xl hover:shadow-accent-blue/10'
                }`}
              >
                {selectedPlan === i && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-accent-magenta rounded-full flex items-center justify-center text-white shadow-xl shadow-accent-magenta/40 z-20"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </motion.div>
                )}
                {plan.recommended && !selectedPlan && (
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-blue text-white text-[10px] font-black uppercase tracking-widest px-8 py-3 rounded-full shadow-lg shadow-accent-blue/30">
                      Primary Choice
                   </div>
                )}
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                  {plan.name}
                  {plan.recommended && <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping" />}
                </h3>
                <div className="text-6xl font-black text-accent-slate mb-12 tracking-tighter flex items-baseline gap-2 group-hover:text-accent-blue transition-colors">
                  {plan.price !== "Custom" ? (
                    <>
                      {plan.price.replace('rs', '')}
                      <span className="text-2xl text-accent-vibrant lowercase">rs</span>
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
                <ul className="space-y-6 mb-16">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-4 text-xs font-bold text-ink-muted group-hover:text-ink-dark transition-colors">
                      <div className="w-2 h-2 rounded-full bg-accent-blue/20 group-hover:bg-accent-blue transition-colors flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={scrollToContact}
                  className={`w-full py-6 text-xs font-black uppercase tracking-widest transition-all rounded-2xl ${plan.recommended ? 'bg-gradient-to-r from-accent-blue via-accent-vibrant to-accent-magenta text-white hover:opacity-90 shadow-xl shadow-accent-blue/30' : 'bg-white border border-border text-accent-slate hover:bg-gradient-to-r hover:from-accent-blue hover:to-accent-cyan hover:text-white hover:border-transparent'}`}
                >
                  Consult Terms
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-24 md:py-40 px-6 md:px-8 bg-bg-subtle relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Heading - Centered */}
          <div className="text-center mb-20 md:mb-32">
            <motion.span 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-blue mb-6 block"
            >
               Interface Terminal
            </motion.span>
            <h2 className="text-4xl sm:text-6xl md:text-[6rem] lg:text-[7.5rem] font-black text-accent-slate uppercase italic tracking-tighter leading-[0.9] mb-8">
               Prototype Website <br className="hidden md:block" /> Demo Form.
            </h2>
            <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-start">
            <div className="lg:w-1/2 w-full space-y-12">
               <p className="text-lg md:text-xl text-ink-muted leading-relaxed font-light border-l-4 border-accent-blue pl-8">
                Connect directly with our leadership collective to initiate your custom build protocol. 
                Average secure response threshold: 4.8 hours.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="p-8 bg-white border border-border/50 rounded-3xl shadow-xl shadow-accent-slate/5 group hover:border-accent-blue/30 transition-all">
                    <div className="w-12 h-12 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-ink-muted mb-2">Direct HQ</div>
                    <div className="text-sm font-black text-accent-slate underline decoration-accent-blue/20 break-all">luckydeepak170@gmail.com</div>
                  </div>
                  <div className="p-8 bg-white border border-border/50 rounded-3xl shadow-xl shadow-accent-slate/5 group hover:border-accent-blue/30 transition-all">
                    <div className="w-12 h-12 bg-accent-blue/10 rounded-2xl flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white transition-all">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-ink-muted mb-2">Network</div>
                    <div className="text-sm font-black text-accent-slate underline decoration-accent-blue/20">Global Operations</div>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <form onSubmit={handleFormSubmit} className="space-y-6 md:space-y-8 bg-white p-8 md:p-16 border border-border/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] md:rounded-[3rem]">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-slate px-2">Primary Identification</label>
                  <input required name="name" type="text" className="w-full bg-bg-subtle/50 border border-border/50 px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl focus:border-accent-magenta focus:bg-white focus:outline-none transition-all placeholder:text-zinc-300 font-bold focus:ring-2 focus:ring-accent-magenta/20" placeholder="Full Name or Agency" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-slate px-2">Secure Protocol Email</label>
                  <input required name="email" type="email" className="w-full bg-bg-subtle/50 border border-border/50 px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl focus:border-accent-cyan focus:bg-white focus:outline-none transition-all placeholder:text-zinc-300 font-bold focus:ring-2 focus:ring-accent-cyan/20" placeholder="contact@domain.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-slate px-2">Project Briefing</label>
                  <textarea required name="details" rows={4} className="w-full bg-bg-subtle/50 border border-border/50 px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl focus:border-accent-blue focus:bg-white focus:outline-none transition-all placeholder:text-zinc-300 font-bold resize-none focus:ring-2 focus:ring-accent-blue/20" placeholder="Describe the digital vision..."></textarea>
                </div>

                <button 
                  disabled={formStatus !== 'idle'}
                  type="submit" 
                  className="w-full py-5 md:py-6 bg-accent-blue text-white font-black uppercase text-xs tracking-[0.3em] rounded-xl md:rounded-2xl hover:bg-accent-slate transition-all flex items-center justify-center gap-4 disabled:opacity-50 shadow-2xl shadow-accent-blue/30"
                >
                  {formStatus === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : formStatus === 'success' ? (
                    <>Payload Received <CheckCircle2 className="w-6 h-6" /></>
                  ) : (
                    <>Send Signal <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 bg-accent-slate text-white border-t border-white/5 relative">
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="text-2xl font-black tracking-tighter uppercase italic">Elegant Website.</div>
          <div className="flex gap-12 text-[10px] uppercase font-black tracking-[0.3em] text-white/40">
            <a href="#" className="hover:text-accent-vibrant transition-colors underline underline-offset-8 decoration-white/10">Privacy</a>
            <a href="#" className="hover:text-accent-vibrant transition-colors underline underline-offset-8 decoration-white/10">Terms</a>
            <a href="#" className="hover:text-accent-vibrant transition-colors underline underline-offset-8 decoration-white/10">Vault</a>
          </div>
          <div className="flex items-center gap-4 bg-white/5 px-8 py-4 rounded-full border border-white/10">
             <ShieldCheck className="w-5 h-5 text-accent-vibrant" />
             <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Locked Unit // © 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
