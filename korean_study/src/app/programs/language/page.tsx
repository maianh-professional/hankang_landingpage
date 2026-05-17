'use client';

import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Clock, MapPin, Award, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function LanguageProgram() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/programs" className="text-primary font-bold flex items-center gap-2 mb-8 hover:translate-x-1 transition-transform w-fit">
            <ChevronRight size={20} className="rotate-180" /> Quay lại danh sách
          </Link>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-6">
                Visa D-4-1
              </div>
              <h1 className="text-5xl md:text-6xl mb-8">Học tiếng Hàn <br /><span className="italic">Chuyên sâu</span></h1>
              <p className="text-xl text-text-muted leading-relaxed mb-10">
                Chương trình dành cho sinh viên muốn xây dựng nền tảng ngôn ngữ vững chắc trước khi bước vào giảng đường Đại học hoặc tìm kiếm cơ hội việc làm tại Hàn Quốc.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Clock size={20} className="text-primary" /> Thời gian
                  </h4>
                  <p className="text-text-muted">6 - 24 tháng (Tùy năng lực)</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Award size={20} className="text-primary" /> Chứng chỉ
                  </h4>
                  <p className="text-text-muted">TOPIK 3 - 4 đầu ra</p>
                </div>
              </div>

              <Link href="/contact" className="btn-primary w-fit">
                Đăng ký tư vấn lộ trình
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1541339907198-e08756eaa539?auto=format&fit=crop&q=80&w=1000" alt="Language School" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/70 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Nội dung chương trình</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Giai đoạn 1", desc: "Làm quen bảng chữ cái, phát âm chuẩn Seoul và giao tiếp cơ bản hàng ngày (TOPIK 1-2)." },
              { title: "Giai đoạn 2", desc: "Phát triển toàn diện kỹ năng Nghe - Nói - Đọc - Viết và ngữ pháp nâng cao (TOPIK 3-4)." },
              { title: "Giai đoạn 3", desc: "Luyện đề TOPIK cấp tốc và chuẩn bị hồ sơ phỏng vấn lên chuyên ngành Đại học/Nghề." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/50 backdrop-blur-md border border-border hover:border-primary transition-all duration-500">
                <h4 className="text-2xl mb-4 text-primary font-bold">{item.title}</h4>
                <p className="text-text-muted leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Schedule - NEW */}
      <section className="py-24 bg-bg-muted/30 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Lịch khai giảng <span className="text-secondary italic">Hàng năm</span></h2>
              <p className="text-xl text-text-muted">Các kỳ nhập học linh hoạt giúp bạn dễ dàng sắp xếp kế hoạch cá nhân.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-border flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">Tháng 3</div>
                <div className="text-sm text-text-muted uppercase">Kỳ mùa Xuân</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">Tháng 6</div>
                <div className="text-sm text-text-muted uppercase">Kỳ mùa Hạ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">Tháng 9</div>
                <div className="text-sm text-text-muted uppercase">Kỳ mùa Thu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">Tháng 12</div>
                <div className="text-sm text-text-muted uppercase">Kỳ mùa Đông</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HanKang for Language - NEW */}
      <section className="py-24 bg-white/50 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Sự khác biệt tại <br /><span className="text-secondary">HanKang Academy</span></h2>
              <ul className="space-y-6">
                {[
                  "Giảng viên 100% người bản xứ có chứng chỉ sư phạm quốc tế.",
                  "Quy mô lớp học nhỏ (10-15 học viên) để tăng tương tác.",
                  "Hệ thống quản lý học tập thông minh, báo cáo kết quả hàng tuần.",
                  "Tổ chức các buổi 'Talk show' văn hóa cùng sinh viên Hàn Quốc.",
                  "Hỗ trợ phí đăng ký thi TOPIK và tài liệu ôn tập độc quyền."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 size={24} className="text-secondary shrink-0" />
                    <span className="text-lg text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl" />
              <img src="https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl relative z-10" alt="Learning Korean" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-muted/30 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">Sẵn sàng chinh phục <span className="text-secondary">Tiếng Hàn?</span></h2>
            <p className="text-xl text-text-muted mb-12">Đừng để rào cản ngôn ngữ làm chậm bước tiến của bạn. Đăng ký ngay để nhận lộ trình học tập tối ưu nhất từ HanKang.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/contact" className="btn-primary px-12">Nhận lộ trình miễn phí</Link>
              <Link href="/programs" className="px-12 py-5 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Xem các hệ đào tạo khác</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
