'use client';

import { motion } from 'framer-motion';
import { School, CheckCircle2, Award, ChevronRight, GraduationCap, Building2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function UniversityProgram() {
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
                Visa D-2
              </div>
              <h1 className="text-5xl md:text-6xl mb-8">Hệ Cử nhân & <br /><span className="italic">Sau Đại học</span></h1>
              <p className="text-xl text-text-muted leading-relaxed mb-10">
                Chương trình dành cho sinh viên muốn theo đuổi giáo dục bậc cao tại các trường Đại học danh giá nhất Hàn Quốc.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <GraduationCap size={20} className="text-primary" /> Bằng cấp
                  </h4>
                  <p className="text-text-muted">Cử nhân, Thạc sĩ, Tiến sĩ</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Building2 size={20} className="text-primary" /> Đối tác
                  </h4>
                  <p className="text-text-muted">50+ trường TOP đầu</p>
                </div>
              </div>

              <Link href="/contact" className="btn-primary w-fit">
                Tư vấn chọn trường
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" alt="University Campus" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/70 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Tại sao chọn Hệ Đại học?</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {[
              { title: "Môi trường học tập quốc tế", desc: "Học tập cùng sinh viên đến từ khắp nơi trên thế giới với giáo trình hiện đại và cơ sở vật chất 5 sao." },
              { title: "Học bổng đa dạng", desc: "Cơ hội nhận học bổng từ 30% - 100% học phí dựa trên điểm GPA và chứng chỉ TOPIK từ cấp 3 trở lên." },
              { title: "Cơ hội việc làm rộng mở", desc: "Bằng cấp được công nhận toàn cầu, dễ dàng ứng tuyển vào các tập đoàn lớn như Samsung, LG, Hyundai." },
              { title: "Định cư lâu dài", desc: "Lộ trình chuyển đổi sang Visa D-10 và E-7 để làm việc chính thức và định cư lâu dài sau tốt nghiệp." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-10 rounded-3xl border border-border bg-white/40 backdrop-blur-md hover:border-primary hover:shadow-xl transition-all duration-500">
                <CheckCircle2 className="text-secondary shrink-0" size={32} />
                <div>
                  <h4 className="text-2xl mb-3 font-bold text-primary">{item.title}</h4>
                  <p className="text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Majors Section - NEW */}
      <section className="py-24 bg-bg-muted/30 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Chuyên ngành <span className="text-secondary italic">Đa dạng</span></h2>
              <p className="text-xl text-text-muted">Chúng tôi hợp tác với các trường Đại học hàng đầu cung cấp đa dạng các lĩnh vực đào tạo phù hợp với xu hướng tương lai.</p>
            </div>
            <Link href="/contact" className="btn-primary">Nhận danh sách trường theo ngành</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { category: "Kỹ thuật & Công nghệ", majors: ["Công nghệ thông tin", "Kỹ thuật ô tô", "Trí tuệ nhân tạo (AI)", "Robot học"] },
              { category: "Kinh tế & Quản lý", majors: ["Quản trị kinh doanh", "Marketing", "Logistics", "Thương mại quốc tế"] },
              { category: "Nghệ thuật & Truyền thông", majors: ["Thiết kế đồ họa", "Truyền thông đa phương tiện", "Sản xuất phim", "Âm nhạc"] }
            ].map((field, i) => (
              <div key={i} className="p-10 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-sm border border-border">
                <h4 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Award className="text-secondary" size={24} /> {field.category}
                </h4>
                <ul className="space-y-4">
                  {field.majors.map((m, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section - NEW */}
      <section className="py-24 bg-white/50 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Điều kiện <br /> <span className="text-secondary italic">Tuyển sinh</span></h2>
                <div className="space-y-6">
                  {[
                    "Tốt nghiệp THPT với GPA từ 6.5 trở lên",
                    "Độ tuổi từ 18 - 25 tuổi",
                    "Chứng chỉ tiếng Hàn TOPIK 3 trở lên (hoặc tiếng Anh tương đương)",
                    "Không mắc các bệnh truyền nhiễm (Lao phổi, HIV...)",
                    "Không có tiền án tiền sự và chưa từng bị trục xuất khỏi Hàn Quốc"
                  ].map((req, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                      <p className="text-lg text-blue-100">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
                <h4 className="text-2xl font-bold mb-6">Bạn chưa có TOPIK?</h4>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Đừng lo lắng! HanKang cung cấp khóa học tiếng Hàn cấp tốc và hỗ trợ đăng ký hệ học tiếng (Visa D-4-1) trước khi lên chuyên ngành.
                </p>
                <Link href="/programs/language" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all block text-center">
                  Tìm hiểu Hệ học tiếng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-bg-muted/30 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Minh bạch chi phí & Kinh tế</h2>
          <p className="text-xl text-text-muted mb-12">Dưới đây là ước tính chi phí trung bình để bạn và gia đình có lộ trình chuẩn bị tài chính tốt nhất.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Học phí", value: "3,000$ - 5,000$", period: "mỗi kỳ (6 tháng)" },
              { label: "Ký túc xá", value: "1,000$ - 1,500$", period: "mỗi kỳ" },
              { label: "Sinh hoạt phí", value: "300$ - 500$", period: "mỗi tháng" }
            ].map((cost, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/60 backdrop-blur-md border border-border shadow-sm hover:shadow-xl transition-all">
                <p className="text-sm font-bold text-text-muted uppercase tracking-widest mb-3">{cost.label}</p>
                <p className="text-4xl font-bold text-primary mb-3">{cost.value}</p>
                <p className="text-sm text-text-muted italic">{cost.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
