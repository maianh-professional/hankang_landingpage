'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  FileCheck,
  Trophy,
  Users,
  ArrowRight,
  Globe,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Academic Background Elements */}
        <div className="absolute top-20 left-10 text-primary/5 -rotate-12 animate-pulse">
          <GraduationCap size={120} />
        </div>
        <div className="absolute bottom-20 right-1/2 text-secondary/5 rotate-12">
          <Trophy size={160} />
        </div>
        <div className="absolute top-1/2 right-10 text-primary/5 -rotate-6">
          <FileCheck size={100} />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>Dẫn đầu tư vấn du học Hàn Quốc tại Nghệ An</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl mb-8 leading-tight font-bold">
              Du Học <span className="text-secondary italic">HanKang</span> <br />
              Chắp Cánh Ước Mơ
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-text-muted mb-10 max-w-lg leading-relaxed">
              Chúng tôi không chỉ xử lý hồ sơ, chúng tôi thiết kế lộ trình sự nghiệp toàn cầu, nâng tầm vị thế bản thân và niềm tự hào gia đình bạn.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary px-8 py-4 text-lg">
                Nhận tư vấn lộ trình 1-1 <ArrowRight size={20} />
              </Link>
              <Link href="/scholarships" className="btn-outline px-8 py-4 text-lg">
                Tìm hiểu học bổng
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Student" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-lg text-primary">1000+ Học viên</p>
                <p className="text-sm text-text-muted">Đã thành công cùng HanKang</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/pic1.jpg"
                alt="Du Học HanKang - Chắp Cánh Ước Mơ"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Trust Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-20 z-20 glass-card p-6 flex items-center gap-4 max-w-[240px] shadow-xl"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">95% Đậu Visa</p>
                <p className="text-xs text-gray-500">Tỷ lệ xử lý hồ sơ</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 bottom-20 z-20 glass-card p-6 flex items-center gap-4 max-w-[240px] shadow-xl"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-secondary">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Học bổng Topik</p>
                <p className="text-xs text-gray-500">Từ các đối tác danh giá</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Năm kinh nghiệm", value: "19+" },
              { label: "Đối tác Đại học", value: "25+" },
              { label: "Tỷ lệ Visa thành công", value: "95%" },
              { label: "Hỗ trợ làm việc", value: "24/7" }
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</p>
                <p className="text-xs opacity-80 uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white/70 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
            Đặc quyền từ HanKang
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Dịch vụ tư vấn <span className="italic font-serif text-secondary">Tận tâm</span>
          </motion.h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Chúng tôi là cầu nối văn hóa, giúp bạn không chỉ đi du học mà còn kiến tạo một cuộc sống thịnh vượng tại Hàn Quốc.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <GraduationCap size={40} />,
              title: "Tư vấn lộ trình A-Z",
              desc: "Định hướng nghề nghiệp, chọn trường và ngành học dựa trên đam mê và nhu cầu thị trường lao động."
            },
            {
              icon: <FileCheck size={40} />,
              title: "Xử lý hồ sơ chuyên sâu",
              desc: "Hoàn thiện hồ sơ nhanh chóng, luyện phỏng vấn 1-1 với chuyên gia, đảm bảo tỷ lệ Visa tuyệt đối."
            },
            {
              icon: <Globe size={40} />,
              title: "Đồng hành tại Hàn Quốc",
              desc: "Hỗ trợ đón sân bay, tìm nhà ở, giới thiệu việc làm thêm và định hướng định cư lâu dài (E-7)."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="p-12 rounded-[2.5rem] bg-white/50 backdrop-blur-md border border-border hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-primary">{item.title}</h3>
              <p className="text-text-muted leading-relaxed text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lộ trình Section - NEW */}
      <section className="py-24 bg-bg-muted/40 backdrop-blur-sm px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
                Lộ trình <span className="text-secondary italic">5 bước</span> <br /> Chạm tới ước mơ
              </h2>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Tư vấn và Thẩm định", desc: "Đánh giá năng lực học tập và tài chính để chọn phương án tối ưu." },
                  { step: "02", title: "Đào tạo ngôn ngữ", desc: "Khóa học tiếng Hàn cấp tốc chuẩn TOPIK 2 chỉ sau 3-4 tháng." },
                  { step: "03", title: "Xử lý hồ sơ", desc: "Hợp pháp hóa lãnh sự, nộp đơn vào trường và nhận thư mời nhập học." },
                  { step: "04", title: "Xin Visa", desc: "Hoàn thiện hồ sơ tài chính và luyện phỏng vấn với Đại sứ quán." },
                  { step: "05", title: "Bay và Nhập học", desc: "Chào đón tại sân bay và hỗ trợ ổn định cuộc sống tại ký túc xá." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-4xl font-serif italic text-primary/20 group-hover:text-secondary transition-colors duration-500">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="/pic2.jpg" alt="Đội ngũ chuyên gia HanKang" className="w-full h-[800px] object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2rem] shadow-2xl max-w-sm border border-border">
                <p className="text-2xl font-bold text-primary mb-4 italic">"Hành trình vạn dặm bắt đầu từ một bước chân."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                    <Users size={24} />
                  </div>
                  <p className="text-sm font-bold text-text-muted">Đồng hành cùng 1000+ học viên mỗi năm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Đội ngũ Section - NEW */}
      <section className="py-24 bg-white/70 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Đội ngũ <span className="text-secondary italic">Chuyên gia</span></h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">Hơn 19 năm kinh nghiệm trong lĩnh vực tư vấn du học Hàn Quốc.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Mr. Binh", role: "Founder & CEO", img: "/ava.ceo.jpg" },
              { name: "Ms. Mai Anh", role: "Trưởng phòng hồ sơ", img: "/maianh-ceo.jpg" },
              { name: "Mrs. Thuy", role: "Cố vấn văn hóa", img: "/av-thuy.png" },
              { name: "Mrs. Thanh", role: "Chuyên gia Visa", img: "/av-thanh.png" },
            ].map((member, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="text-center">
                <div className="mb-6 relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img src={member.img} className="w-full aspect-square object-cover rounded-[2rem] shadow-lg" />
                </div>
                <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                <p className="text-secondary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Bắt đầu hành trình <br /> <span className="text-secondary italic">Du học</span> của bạn ngay
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Đừng để ước mơ bị trì hoãn. Liên hệ với HanKang để được tư vấn lộ trình chi tiết và nhận bộ quà tặng chuẩn bị hành trang du học.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:scale-105">
              Đăng ký ngay hôm nay
            </Link>
            <Link href="tel:0974909296" className="bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all border border-white/20">
              Hotline: 0974909296
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
