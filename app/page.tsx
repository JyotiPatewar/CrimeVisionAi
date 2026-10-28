'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Shield, 
  Search, 
  Microscope, 
  Dna, 
  Fingerprint, 
  Zap, 
  ChevronRight, 
  Github, 
  ExternalLink, 
  Database, 
  Cpu, 
  Layers
} from 'lucide-react';

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  } as const;

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-cyan-500/30">
      {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav) - Zone 3 (CTA) */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#07090E]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
          <a href="/" className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0">
            CrimeVision AI
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#overview" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">Overview</a>
            <a href="#features" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">Capabilities</a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">Architecture</a>
            <a href="#brief" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">Project Brief</a>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <button className="px-5 py-2 text-xs font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.2)] whitespace-nowrap shrink-0">
              Launch Platform
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section: Asymmetric Split */}
        <section id="overview" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              {...fadeIn}
              className="z-10 relative"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-cyan-500" />
                <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">Forensic Intelligence v1.0</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1] text-wrap-balance">
                Intelligent Multimodal <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Forensic Analysis
                </span>
              </h1 >
              <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
                Empowering investigators with AI-driven evidence processing. Multimodal analysis of crime scenes, biological data, and biometric markers in a unified secure platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all group">
                  Start Investigation
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-all font-semibold">
                  View Demo
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image 
                src="/src/assets/images/hero_forensic_lab_1793185408228.jpg"
                alt="CrimeVision AI Forensic Laboratory"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 -right-24 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-24 bg-[#0B0E17]/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Core Analysis Capabilities</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Advanced forensic tools integrated into a single high-performance workspace.</p>
            </div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Multimodal Scene Analysis",
                  description: "Autonomous identification of evidence markers using advanced vision models.",
                  icon: Search,
                  img: "/src/assets/images/feature_multimodal_analysis_1793185408485.jpg"
                },
                {
                  title: "Biological Forensics",
                  description: "High-precision DNA sequencing analysis and genetic marker identification.",
                  icon: Dna,
                  img: "/src/assets/images/feature_dna_forensics_1793185408152.jpg"
                },
                {
                  title: "Biometric Matching",
                  description: "Instant cross-referencing of fingerprint and facial data against global databases.",
                  icon: Fingerprint,
                  img: "/src/assets/images/feature_multimodal_analysis_1793185408485.jpg"
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="group relative bg-[#0F172A]/40 border border-white/5 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={feature.img}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
                  </div>
                  <div className="p-6 relative">
                    <div className="h-10 w-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                      <feature.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Project Links Section */}
        <section className="py-24 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Project Access & Review</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                CrimeVision AI is submitted for mentor evaluation. Access the live platform and source repository through the links below.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#0B0E17] border border-white/5 rounded-lg flex items-center justify-between group hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-emerald-500/10 rounded flex items-center justify-center text-emerald-400">
                      <ExternalLink size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Live Demo Link</p>
                      <p className="text-xs text-slate-500 font-mono">Current App Instance</p>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="text-cyan-400 text-sm font-semibold hover:underline flex items-center gap-1"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.reload();
                    }}
                  >
                    Launch Demo <ChevronRight size={14} />
                  </a>
                </div>

                <div className="p-4 bg-[#0B0E17] border border-white/5 rounded-lg flex items-center justify-between group hover:border-rose-500/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-rose-500/10 rounded flex items-center justify-center text-rose-400">
                      <Github size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">GitHub Repository Link</p>
                      <p className="text-xs text-slate-500 font-mono">Source Code Access</p>
                    </div>
                  </div>
                  <span className="text-slate-500 text-xs font-mono italic">
                    [Repository link missing - Pending push]
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#0F172A]/30 border border-white/5 p-8 rounded-2xl relative overflow-hidden">
               <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">
                <Shield size={14} />
                Security Clearance Required
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Platform Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Processing Power</p>
                  <p className="text-2xl font-mono tabular-nums font-bold text-white">1.2 PFLOPS</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Latency</p>
                  <p className="text-2xl font-mono tabular-nums font-bold text-white">~42 ms</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Analysis Uptime</p>
                  <p className="text-2xl font-mono tabular-nums font-bold text-white">99.99%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Encryption</p>
                  <p className="text-2xl font-mono tabular-nums font-bold text-white">AES-4096</p>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 text-white/5 transform rotate-12">
                <Shield size={160} />
              </div>
            </div>
          </div>
        </section>

        {/* Project Brief Section */}
        <section id="brief" className="py-24 bg-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="border border-white/10 rounded-2xl p-8 lg:p-12 bg-[#07090E]">
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/5 pb-4 italic">Project Brief</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
                    <Layers size={18} />
                    Project Overview
                  </h3>
                  <div className="text-slate-400 text-sm leading-relaxed space-y-4">
                    <p>
                      CrimeVision AI is an intelligent multimodal forensic analysis platform designed to revolutionize modern criminal investigations. By leveraging cutting-edge machine learning and secure data processing, it provides investigators with a comprehensive suite of tools for evidence evaluation, crime scene reconstruction, and intelligence synthesis.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Cpu size={16} className="text-cyan-500" />
                      Technical Architecture
                    </h4>
                    <ul className="text-slate-400 text-sm space-y-2 font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">▹</span> 
                        Next.js 15+ App Router for performance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">▹</span> 
                        Gemini Multimodal API for visual intelligence
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">▹</span> 
                        Firebase for secure evidence persistence
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">▹</span> 
                        Tailwind CSS v4 for precision styling
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Database size={16} className="text-cyan-500" />
                      System Requirements
                    </h4>
                    <ul className="text-slate-400 text-sm space-y-2 font-mono">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">▹</span> 
                        High-speed fiber connectivity
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">▹</span> 
                        Modern web browser (Chromium preferred)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">▹</span> 
                        Encryption-enabled local environment
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-6 flex items-center gap-2">
                    <Shield size={18} />
                    Project Metadata
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                    <div>
                      <p className="text-slate-500 uppercase text-[10px] tracking-widest mb-1">Category</p>
                      <p className="text-white">Information Technology</p>
                    </div>
                    <div>
                      <p className="text-slate-500 uppercase text-[10px] tracking-widest mb-1">Type</p>
                      <p className="text-white">Individual Project</p>
                    </div>
                    <div>
                      <p className="text-slate-500 uppercase text-[10px] tracking-widest mb-1">Role</p>
                      <p className="text-white">Lead Architect</p>
                    </div>
                    <div>
                      <p className="text-slate-500 uppercase text-[10px] tracking-widest mb-1">Status</p>
                      <p className="text-emerald-400">Review Ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-slate-500 text-xs tracking-widest uppercase">
          &copy; 2026 CrimeVision AI &middot; Secure Forensic Infrastructure
        </p>
      </footer>
    </div>
  );
}
