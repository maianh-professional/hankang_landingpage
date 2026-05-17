'use client';

import { motion } from 'framer-motion';
import { Building2, Handshake, Users2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import KoreaMap from '@/components/KoreaMap';

export default function Partners() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      <section className="pt-40 pb-20 overflow-hidden">
        <div className="w-full text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-8 uppercase tracking-widest"
          >
            <Handshake size={16} />
            <span>Mạng lưới toàn cầu</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-primary mb-8"
          >
            Đối tác <span className="italic text-secondary">Chiến lược</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-text-muted max-w-3xl mx-auto mb-20 leading-relaxed"
          >
            Sự uy tín của Du Học HanKang được khẳng định thông qua mối quan hệ hợp tác trực tiếp và bền chặt với 25+ trường Đại học và Tập đoàn danh giá hàng đầu tại Hàn Quốc.
          </motion.p>

          <div className="mt-12">
            <KoreaMap />
          </div>
        </div>
      </section>

      {/* Partnership Benefits - NEW */}
      <section className="py-24 bg-bg-muted/30 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Building2 size={36} />,
                title: "25+ Trường Đại học",
                desc: "Hệ thống đối tác bao phủ 100% các thành phố lớn tại Hàn Quốc, đa dạng từ trường TOP 1 đến các trường top 3."
              },
              {
                icon: <Handshake size={36} />,
                title: "Đặc quyền Phỏng vấn",
                desc: "Học sinh HanKang được ưu tiên tham gia các buổi phỏng vấn trực tiếp tại văn phòng Việt Nam"
              },
              {
                icon: <Users2 size={36} />,
                title: "Cam kết Việc làm",
                desc: "Cam kết hỗ trợ có việc làm học viên để cung cấp chương trình thực tập hưởng lương và ưu tiên tuyển dụng sau tốt nghiệp."
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6 p-10 bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-border hover:border-primary transition-all shadow-sm">
                <div className="w-20 h-20 bg-bg-muted rounded-2xl flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners - NEW */}
      <section className="py-24 bg-white/70 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 italic">Đối tác <span className="text-secondary">Doanh nghiệp và Tuyển dụng</span></h2>
          <p className="mt-12 text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Mạng lưới đối tác doanh nghiệp đảm bảo lộ trình "Học đi đôi với hành" và cơ hội chuyển đổi Visa E-7 ngay sau khi tốt nghiệp dành cho học sinh của HanKang.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="bg-primary rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Xây dựng tương lai <br /><span className="text-secondary">Cùng những người khổng lồ</span></h2>
            <p className="text-xl text-blue-100/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Hãy để mạng lưới đối tác rộng khắp của HanKang nâng tầm giá trị bằng cấp và mở rộng cơ hội sự nghiệp của bạn tại Hàn Quốc.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">
                Đăng ký tư vấn ngay
              </Link>
              <Link href="/programs" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                Xem các hệ đào tạo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
