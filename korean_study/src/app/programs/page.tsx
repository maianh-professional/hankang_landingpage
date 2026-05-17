'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Briefcase, 
  ChevronRight,
  School,
  Globe2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Programs() {
  const programs = [
    {
      title: "Đào tạo Tiếng Hàn chuyên sâu",
      visa: "Visa D-4-1",
      icon: <Globe2 size={40} />,
      features: ["Lộ trình từ 6-12 tháng", "Cam kết đầu ra TOPIK 3-4", "Trải nghiệm văn hóa bản địa"],
      desc: "Nền tảng vững chắc để bước vào giảng đường Đại học tại Hàn Quốc.",
      href: "/programs/language"
    },
    {
      title: "Hệ Cử nhân & Thạc sĩ chính quy",
      visa: "Visa D-2",
      icon: <School size={40} />,
      features: ["Hơn 50+ trường Top đầu", "Đa dạng ngành nghề HOT", "Cơ hội học bổng tới 100%"],
      desc: "Chương trình dành cho sinh viên muốn sở hữu bằng cấp quốc tế danh giá.",
      href: "/programs/university"
    },
    {
      title: "Chương trình Du học Nghề",
      visa: "Visa D-4-6",
      icon: <Briefcase size={40} />,
      features: ["Học đi đôi với hành", "Vừa học vừa làm có lương", "Cơ hội chuyển đổi Visa E-7"],
      desc: "Giải pháp tối ưu cho định hướng nghề nghiệp và định cư lâu dài.",
      href: "/programs/vocational"
    }
  ];

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl mb-6"
          >
            Chương trình <span className="italic text-secondary">Đào tạo</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Chúng tôi thiết kế lộ trình cá nhân hóa dựa trên năng lực và khát vọng nghề nghiệp của từng sinh viên.
          </motion.p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: i * 0.1 }}
              className="glass-card hover:border-primary transition-colors duration-500 flex flex-col h-full"
            >
              <div className="text-primary mb-6">{p.icon}</div>
              <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-md text-xs font-bold mb-4 w-fit">
                {p.visa}
              </div>
              <h3 className="text-2xl mb-4 leading-tight">{p.title}</h3>
              <p className="text-text-muted mb-8 flex-grow">
                {p.desc}
              </p>
              <div className="space-y-3 mb-10">
                {p.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <Award size={16} className="text-primary" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link href={p.href} className="flex items-center justify-center gap-2 w-full py-4 bg-primary/5 hover:bg-primary hover:text-white transition-all duration-300 rounded-xl font-bold group">
                Xem chi tiết <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-8 text-white">Bạn chưa biết chọn chương trình nào phù hợp?</h2>
          <p className="text-xl opacity-80 mb-12">Đừng lo lắng, chuyên gia của chúng tôi sẽ phân tích hồ sơ và tư vấn hoàn toàn miễn phí.</p>
          <Link href="/contact" className="btn-primary bg-secondary hover:bg-amber-500 border-none px-12 py-5 text-lg inline-flex items-center justify-center">
            Đăng ký nhận tư vấn ngay
          </Link>
        </div>
      </section>
    </main>
  );
}
