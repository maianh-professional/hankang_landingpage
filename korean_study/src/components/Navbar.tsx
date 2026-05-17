'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 relative overflow-hidden rounded-xl bg-accent p-1">
            <img src="/logo.jpg" alt="Du Học HanKang" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary uppercase">HanKang</span>
            <span className="text-[10px] font-bold text-secondary tracking-[0.2em] uppercase -mt-1">Du Học Hàn Quốc</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-text-muted font-medium">
          <Link href="/programs" className="hover:text-primary transition-colors">Chương trình</Link>
          <Link href="/scholarships" className="hover:text-primary transition-colors">Học bổng</Link>
          <Link href="/partners" className="hover:text-primary transition-colors">Đối tác</Link>
          <Link href="/community" className="hover:text-primary transition-colors">Cộng đồng</Link>
          <Link href="/contact" className="btn-primary py-2 px-6 text-sm">Tư vấn ngay</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[var(--primary)]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-[var(--border)] p-6 flex flex-col gap-4 shadow-xl"
        >
          <Link href="/programs" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Chương trình</Link>
          <Link href="/scholarships" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Học bổng</Link>
          <Link href="/partners" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Đối tác</Link>
          <Link href="/community" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Cộng đồng</Link>
          <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setIsOpen(false)}>Tư vấn ngay</Link>
        </motion.div>
      )}
    </nav>
  );
}
