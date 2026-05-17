'use client';

import { motion } from 'framer-motion';
import { 
  Trophy, 
  Lightbulb, 
  Target, 
  Sparkles,
  Search,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Scholarships() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 text-secondary rounded-full text-sm font-extrabold mb-8 uppercase tracking-widest">
              <Sparkles size={16} />
              <span>Cơ hội học bổng tới 100%</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight">
              Khẳng định <br />
              <span className="italic text-secondary">Bản thân</span> bằng <br />
              Học bổng
            </h1>
            <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-xl">
              Du Học HanKang không chỉ giúp bạn làm hồ sơ, chúng tôi giúp bạn xây dựng một lộ trình "Săn học bổng" hoàn hảo để giảm thiểu tối đa áp lực tài chính cho gia đình.
            </p>
            <div className="flex gap-4">
               <div className="p-4 bg-white rounded-2xl border border-border shadow-sm flex items-center gap-4">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-xs text-text-muted font-bold uppercase">Học sinh <br/> nhận học bổng</div>
               </div>
               <div className="p-4 bg-white rounded-2xl border border-border shadow-sm flex items-center gap-4">
                  <div className="text-3xl font-bold text-secondary">3M$</div>
                  <div className="text-xs text-text-muted font-bold uppercase">Tổng giá trị <br/> đã hỗ trợ</div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-white p-12 rounded-[3.5rem] border-2 border-primary shadow-2xl relative z-10">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center text-amber-600 shadow-inner">
                  <Trophy size={40} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">GKS 2026</h2>
                  <p className="text-text-muted font-bold">Học bổng Chính phủ Hàn Quốc</p>
                </div>
              </div>
              <div className="space-y-6 text-text">
                {[
                  "Tài trợ 100% học phí trọn khóa",
                  "Sinh hoạt phí ~1,000,000 KRW/tháng",
                  "Vé máy bay khứ hồi & Bảo hiểm y tế",
                  "Hỗ trợ 100% học phí học tiếng 1 năm"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-secondary mt-1" size={24} />
                    <span className="font-medium text-lg text-primary">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary w-full mt-12 justify-center py-6 text-lg">
                Đánh giá hồ sơ ngay
              </Link>
            </div>
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Scholarship Levels Section - NEW */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Học bổng theo năng lực <span className="text-secondary italic">TOPIK</span></h2>
            <p className="text-xl text-text-muted">Đa số các trường Đại học Hàn Quốc đều có chính sách giảm học phí ngay kỳ đầu tiên dựa trên trình độ tiếng Hàn.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { level: "TOPIK 3", value: "30% - 40%", desc: "Giảm học phí kỳ đầu cho tân sinh viên." },
              { level: "TOPIK 4", value: "50% - 60%", desc: "Cơ hội nhận học bổng bán phần tại các trường TOP." },
              { level: "TOPIK 5", value: "70% - 80%", desc: "Học bổng danh giá từ các trường Đại học lớn." },
              { level: "TOPIK 6", value: "100%", desc: "Miễn hoàn toàn học phí cho toàn bộ khóa học." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-border text-center hover:border-secondary transition-all group">
                <div className="text-sm font-bold text-text-muted mb-4 uppercase tracking-tighter">Năng lực Tiếng</div>
                <div className="text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{s.level}</div>
                <div className="text-4xl font-black text-secondary mb-4 italic">{s.value}</div>
                <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Chiến lược <span className="text-secondary italic">Săn học bổng</span></h2>
             <p className="text-xl text-text-muted max-w-2xl mx-auto">Săn học bổng không khó nếu bạn có lộ trình chuẩn bị và chiến thuật nộp hồ sơ đúng đắn.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: <Search size={40} />,
                title: "Tìm kiếm & Sàng lọc",
                desc: "Chúng tôi cập nhật liên tục danh sách học bổng từ 150+ đối tác Đại học để chọn ra các suất phù hợp nhất với GPA và khả năng tài chính của bạn."
              },
              {
                icon: <Target size={40} />,
                title: "Tối ưu hóa hồ sơ",
                desc: "Chuyên gia HanKang sẽ hỗ trợ bạn mài giũa bài luận (SOP) và Kế hoạch học tập (Study Plan) sao cho 'chạm' đúng tiêu chí của hội đồng tuyển sinh."
              },
              {
                icon: <Lightbulb size={40} />,
                title: "Luyện phỏng vấn 1-1",
                desc: "Học sinh được luyện phỏng vấn cùng cựu sinh viên nhận học bổng toàn phần để trang bị sự tự tin và xử lý các câu hỏi 'hóc búa' nhất."
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-bg-muted rounded-[2rem] flex items-center justify-center text-primary mx-auto mb-10 shadow-sm border border-border group-hover:bg-primary transition-all">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6">{step.title}</h3>
                <p className="text-text-muted leading-relaxed text-lg">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HanKang Exclusive - NEW */}
      <section className="py-24 bg-bg px-6">
         <div className="max-w-7xl mx-auto">
            <div className="bg-primary rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
               <div className="grid md:grid-cols-2 gap-20 items-center">
                  <div className="relative z-10">
                     <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">Quỹ học bổng <br/><span className="text-secondary">HanKang Future</span></h2>
                     <p className="text-xl text-blue-100/80 mb-10 leading-relaxed">
                        Dành riêng cho học viên của HanKang có thành tích học tập xuất sắc và hoàn cảnh khó khăn nhưng đầy nghị lực.
                     </p>
                     <ul className="space-y-6 mb-12">
                        <li className="flex gap-4">
                           <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shrink-0">1</div>
                           <div>
                              <h5 className="font-bold text-xl">Học bổng Chắp cánh</h5>
                              <p className="text-blue-100/60">Tài trợ 100% phí dịch vụ và hồ sơ tại Việt Nam.</p>
                           </div>
                        </li>
                        <li className="flex gap-4">
                           <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shrink-0">2</div>
                           <div>
                              <h5 className="font-bold text-xl">Học bổng TOPIK High-Achievers</h5>
                              <p className="text-blue-100/60">Thưởng tiền mặt lên tới 10 triệu đồng cho học sinh đạt TOPIK 5, 6.</p>
                           </div>
                        </li>
                     </ul>
                     <Link href="/contact" className="bg-white text-primary px-10 py-5 rounded-2xl font-extrabold hover:bg-secondary hover:text-white transition-all shadow-xl">
                        Xem điều kiện nhận học bổng
                     </Link>
                  </div>
                  <div className="hidden md:block">
                     <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="Scholarship winner" />
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl mt-12" alt="Success story" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Sẵn sàng để trở thành người <span className="text-secondary">Tiếp theo?</span></h2>
          <p className="text-xl text-text-muted mb-12 leading-relaxed">Hãy để chúng tôi phân tích hồ sơ và xây dựng chiến lược săn học bổng riêng biệt dành cho bạn.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all">
              Đặt lịch tư vấn miễn phí
            </Link>
            <Link href="/programs" className="px-12 py-5 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
              Tìm hiểu các hệ đào tạo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
