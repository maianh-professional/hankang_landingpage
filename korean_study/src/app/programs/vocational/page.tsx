'use client';

import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, DollarSign, ChevronRight, UserCheck, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function VocationalProgram() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/programs" className="text-primary font-bold flex items-center gap-2 mb-8 hover:translate-x-1 transition-transform w-fit">
            <ChevronRight size={20} className="rotate-180" /> Quay lại danh sách
          </Link>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-6">
                Visa D-4-6
              </div>
              <h1 className="text-5xl md:text-6xl mb-8">Du học Nghề <br /><span className="italic">Chuyên nghiệp</span></h1>
              <p className="text-xl text-text-muted leading-relaxed mb-10">
                Giải pháp vừa học vừa làm, tập trung vào kỹ năng thực hành và đảm bảo cơ hội việc làm ngay sau khi tốt nghiệp.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <DollarSign size={20} className="text-primary" /> Thu nhập
                  </h4>
                  <p className="text-text-muted">Đảm bảo việc làm thêm</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Zap size={20} className="text-primary" /> Lộ trình
                  </h4>
                  <p className="text-text-muted">Chuyển đổi Visa E-7 nhanh</p>
                </div>
              </div>

              <Link href="/contact" className="btn-primary w-fit">
                Nhận tư vấn hướng nghiệp
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Vocational Training" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Lợi ích vượt trội</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <UserCheck size={32} />, title: "Tay nghề cao", desc: "Đào tạo bởi các chuyên gia trong ngành điện tử, làm đẹp, cơ khí, đầu bếp, công nghệ ô tô..." },
              { icon: <DollarSign size={32} />, title: "Kinh tế ổn định", desc: "HanKang hỗ trợ giới thiệu việc làm thêm ngay từ kỳ học đầu tiên để bạn tự trang trải cuộc sống." },
              { icon: <Briefcase size={32} />, title: "Định cư chắc chắn", desc: "Lộ trình chuyển đổi sang Visa kỹ sư (E-7) sau tốt nghiệp với mức lương khởi điểm hấp dẫn." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-bg-muted border border-border hover:border-secondary hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-secondary mb-8 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-2xl mb-4 font-bold text-primary">{item.title}</h4>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section - NEW */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ngành nghề <span className="text-secondary italic">Ưu tiên</span></h2>
            <p className="text-xl text-text-muted">Các nhóm ngành đang thiếu hụt nhân lực trầm trọng tại Hàn Quốc, đảm bảo 100% có việc làm.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Công nghệ Ô tô", icon: "🚗" },
              { title: "Cơ khí Chính xác", icon: "🛠️" },
              { title: "Nấu ăn & Nhà hàng", icon: "👨‍🍳" },
              { title: "Làm đẹp (Beauty)", icon: "💄" },
              { title: "Điện tử & Bán dẫn", icon: "🔌" },
              { title: "Hàn & Đóng tàu", icon: "⚓" },
              { title: "Điều dưỡng", icon: "🏥" },
              { title: "Lắp ráp Điện tử", icon: "🏭" }
            ].map((job, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-border text-center hover:shadow-lg transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{job.icon}</div>
                <p className="font-bold text-primary">{job.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section - NEW */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Lộ trình <span className="text-secondary italic">Định cư E-7</span></h2>
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                { year: "Năm 1-2", title: "Học nghề (D-4-6)", desc: "Học lý thuyết song song thực hành tại doanh nghiệp, nhận lương hỗ trợ." },
                { year: "Tốt nghiệp", title: "Bằng Cao đẳng Nghề", desc: "Nhận bằng chính quy và chứng chỉ tay nghề quốc gia Hàn Quốc." },
                { year: "Đi làm", title: "Visa E-7", desc: "Chuyển sang Visa diện kỹ sư tay nghề cao, định cư và bảo lãnh người thân." }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-secondary text-lg font-bold mb-4">{step.year}</div>
                  <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                  <p className="text-blue-100/80 leading-relaxed">{step.desc}</p>
                  {i < 2 && <ChevronRight className="hidden md:block absolute -right-10 top-1/2 text-white/20" size={40} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-primary">Kinh tế & Thu nhập</h2>
          <p className="text-xl text-text-muted mb-12">Chương trình du học nghề giúp bạn tự chủ tài chính sớm nhờ chính sách hỗ trợ việc làm thêm linh hoạt từ phía nhà trường.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-[2.5rem] bg-white border border-border shadow-sm">
              <h4 className="text-2xl font-bold mb-4 text-primary">Thu nhập ước tính</h4>
              <p className="text-6xl font-bold text-secondary mb-6">800$ - 1,200$</p>
              <p className="text-text-muted text-lg leading-relaxed">
                Đây là mức lương làm thêm trung bình hàng tháng dành cho du học sinh nghề, giúp bạn chi trả toàn bộ sinh hoạt phí và tích lũy gửi về cho gia đình.
              </p>
            </div>
            <div className="p-12 rounded-[2.5rem] bg-primary text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h4 className="text-2xl font-bold mb-8">Đặc quyền tại HanKang</h4>
              <ul className="space-y-6">
                {[
                  "Giới thiệu việc làm thêm ngay trong tuần đầu nhập học.",
                  "Hợp đồng lao động minh bạch, bảo hiểm đầy đủ.",
                  "Luyện thi chứng chỉ tay nghề để nâng hạng Visa.",
                  "Hỗ trợ thủ tục bảo lãnh gia đình sau khi có Visa E-7."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 size={24} className="text-secondary shrink-0" />
                    <span className="text-lg text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
