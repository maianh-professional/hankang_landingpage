'use client';

import { motion } from 'framer-motion';
import { Heart, ShieldCheck, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Community() {
  const stories = [
    {
      name: "Minh Thu",
      univ: "Đại học Keimyung",
      story: "Hiện đang là sinh viên năm 3 ngành Kinh doanh quốc tế.",
      img: "/ava.female.jpg"
    },
    {
      name: "Hoàng Nam",
      univ: "Đại học Korea",
      story: "Quy trình làm Visa của trung tâm cực kỳ chuyên nghiệp và tận tâm.",
      img: "/ava.male.jpg"
    },
    {
      name: "Ánh Như",
      univ: "Đại học Nữ Duksung",
      story: "Không chỉ giúp làm hồ sơ, các anh chị còn hỗ trợ mình tìm nhà và việc làm thêm ngay khi vừa sang Hàn.",
      img: "/ava.femail2.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-8"
          >
            Cộng đồng <span className="italic text-secondary">Du Học HanKang</span>
          </motion.h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Hành trình của bạn không bao giờ đơn độc. Chúng tôi xây dựng một mạng lưới hỗ trợ vững chắc, đồng hành cùng bạn từ những bước chân đầu tiên tại Việt Nam cho đến khi gặt hái thành công tại xứ sở Kim Chi.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border group"
            >
              <div className="overflow-hidden h-72">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{s.name}</h3>
                    <p className="text-secondary font-bold text-sm uppercase tracking-wider">{s.univ}</p>
                  </div>
                  <div className="w-10 h-10 bg-bg-muted rounded-full flex items-center justify-center text-primary font-serif italic font-bold">"</div>
                </div>
                <p className="text-text-muted italic leading-relaxed text-lg">"{s.story}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mentor Network - NEW */}
      <section className="py-24 bg-bg px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Hệ thống <span className="text-secondary italic">Mentor HanKang</span></h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed">
                Mỗi tân sinh viên của HanKang sẽ được kết nối với một "Tiền bối" (Sunbae) đang học tập cùng trường hoặc cùng thành phố để được hướng dẫn trực tiếp.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Hỗ trợ học tập", desc: "Chia sẻ giáo trình, kinh nghiệm thi cử và đăng ký tín chỉ." },
                  { title: "Tìm kiếm việc làm", desc: "Giới thiệu các công việc làm thêm chất lượng trong cộng đồng." },
                  { title: "Giao lưu cuối tuần", desc: "Tổ chức các buổi dã ngoại, ăn uống kết nối đồng hương." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-white rounded-3xl border border-border hover:border-primary transition-colors">
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                      <Heart size={24} />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-primary mb-1">{item.title}</h5>
                      <p className="text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <img src="/pic1.4.jpg" className="rounded-[2.5rem] w-full aspect-[3/4] object-cover shadow-xl" alt="Mentor HanKang" />
                <img src="/pic2.4.jpg" className="rounded-[2.5rem] w-full aspect-square object-cover shadow-xl" alt="Community Life" />
              </div>
              <div className="space-y-6">
                <img src="/pic3.4.jpg" className="rounded-[2.5rem] w-full aspect-square object-cover shadow-xl" alt="Student Support" />
                <img src="/pic4.4.jpg" className="rounded-[2.5rem] w-full aspect-[3/4] object-cover shadow-xl" alt="HanKang Friendship" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <h2 className="section-title text-left">Người kể chuyện <br /><span className="italic text-secondary">Văn hóa</span></h2>
              <p className="text-xl text-text-muted mb-8 leading-relaxed">
                Chúng tôi không chỉ gửi bạn đi học, chúng tôi giúp bạn hòa nhập. Tại HanKang, mỗi sinh viên là một đại sứ văn hóa, mang bản sắc Việt Nam đến với Hàn Quốc và ngược lại thông qua các hoạt động trải nghiệm thực tế.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Sống như người bản địa", desc: "Hỗ trợ đăng ký cư trú, SIM điện thoại, thẻ ngân hàng và bảo hiểm y tế." },
                  { title: "Ngôn ngữ đời thực", desc: "Lớp học văn hóa chia sẻ các 'slang' và quy tắc ứng xử nơi công cộng." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-bg-muted border border-border hover:bg-white hover:shadow-lg transition-all">
                    <h5 className="font-bold text-primary text-lg mb-3">{item.title}</h5>
                    <p className="text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-primary/5 absolute inset-0 rounded-[3rem] -rotate-3 scale-105" />
              <img src="/pic5.1.jpg" className="rounded-[3rem] relative z-10 w-full shadow-2xl" alt="Culture Exchange HanKang" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -ml-48 -mb-48 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Hệ thống hỗ trợ <br /> Du học sinh Toàn diện</h2>
              <div className="space-y-10">
                {[
                  {
                    icon: <ShieldCheck className="text-secondary" size={32} />,
                    title: "Bảo trợ pháp lý 24/7",
                    desc: "Hỗ trợ các vấn đề về cư trú, gia hạn Visa, giấy phép làm thêm và mọi rắc rối pháp lý tại Hàn Quốc."
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="shrink-0 w-16 h-16 bg-white/10 rounded-[1.25rem] flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl mb-2 text-white font-bold">{item.title}</h4>
                      <p className="text-blue-100/70 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="mt-16 bg-secondary text-white px-12 py-5 rounded-2xl font-bold hover:bg-orange-600 transition-all inline-flex items-center gap-3 shadow-xl">
                Trở thành thành viên của HanKang
              </Link>
            </div>
            <div className="rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/10 rotate-2">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000" alt="Students meeting" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
