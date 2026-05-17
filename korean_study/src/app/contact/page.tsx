'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Mock API call delay
    setTimeout(() => {
      // Logic would go here
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-8 uppercase tracking-widest">
                <Phone size={16} />
                <span>Hỗ trợ 24/7</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8">Liên hệ <br /><span className="italic text-secondary">HanKang</span></h1>
              <p className="text-xl text-text-muted mb-12 leading-relaxed">
                Đội ngũ chuyên gia giàu kinh nghiệm của Du Học HanKang luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên con đường chinh phục ước mơ Hàn Quốc.
              </p>

              <div className="grid gap-8">
                {[
                  {
                    icon: <MapPin />,
                    title: "Trụ sở chính (Nghệ An)",
                    detail: "Số nhà 12, Ngõ 25 Đường Phạm Nguyễn Du, Khối Trung Thanh, Phường Cửa Lò, Nghệ An",
                    hotline: "Hotline: 097 490 92 96"
                  },
                  {
                    icon: <Globe />,
                    title: "Fanpage Facebook",
                    detail: "facebook.com/DuhocHankang",
                    sub: "FB: Du Học Hàn Quốc Cùng HanKang"
                  },
                  {
                    icon: <Mail />,
                    title: "Email",
                    detail: "duhoccunghankang@gmail.com",
                    sub: "Cập nhật tin tức & học bổng mới nhất"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-border hover:border-secondary transition-all group">
                    <div className="shrink-0 w-14 h-14 bg-bg rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-primary mb-2">{item.title}</h4>
                      <p className="text-text-muted mb-1">{item.detail}</p>
                      {item.hotline && <p className="text-secondary font-bold">{item.hotline}</p>}
                      {item.sub && <p className="text-secondary font-bold">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] blur-3xl -z-10" />
              <div className="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-border shadow-xl">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-8"
                    >
                      <h3 className="text-3xl font-bold text-primary mb-4 text-center">Gửi yêu cầu Tư vấn</h3>
                      <div>
                        <label className="block text-sm font-bold mb-3 text-primary uppercase tracking-wider">Họ và tên *</label>
                        <input
                          required
                          type="text"
                          placeholder="Nhập họ và tên của bạn"
                          className="w-full px-8 py-5 rounded-2xl border border-border bg-bg-muted focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all text-lg"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold mb-3 text-primary uppercase tracking-wider">Số điện thoại *</label>
                          <input
                            required
                            type="tel"
                            placeholder="09xx xxx xxx"
                            className="w-full px-8 py-5 rounded-2xl border border-border bg-bg-muted focus:border-secondary outline-none text-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-3 text-primary uppercase tracking-wider">Email</label>
                          <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full px-8 py-5 rounded-2xl border border-border bg-bg-muted focus:border-secondary outline-none text-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-3 text-primary uppercase tracking-wider">Chương trình quan tâm</label>
                        <div className="relative">
                          <select className="w-full px-8 py-5 rounded-2xl border border-border bg-bg-muted focus:border-secondary outline-none appearance-none text-lg">
                            <option>Du học tiếng Hàn (D-4-1)</option>
                            <option>Hệ Đại học/Thạc sĩ (D-2)</option>
                            <option>Du học Nghề (D-4-6)</option>
                            <option>Học bổng HanKang Future</option>
                          </select>
                          <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                            <Clock size={20} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-3 text-primary uppercase tracking-wider">Lời nhắn hoặc Câu hỏi</label>
                        <textarea
                          rows={4}
                          placeholder="Tôi muốn tìm hiểu về lộ trình và chi phí..."
                          className="w-full px-8 py-5 rounded-2xl border border-border bg-bg-muted focus:border-secondary outline-none resize-none text-lg"
                        ></textarea>
                      </div>
                      <button type="submit" className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-xl hover:bg-primary-dark hover:shadow-2xl transition-all flex items-center justify-center gap-3">
                        Gửi ngay <Send size={24} />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-4xl font-bold text-primary mb-6">Gửi thành công!</h3>
                      <p className="text-xl text-text-muted mb-12">
                        Cảm ơn bạn đã tin tưởng Du Học HanKang. Chuyên viên tư vấn của chúng tôi sẽ liên hệ với bạn qua điện thoại trong vòng 2 giờ tới.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
                      >
                        Gửi yêu cầu khác
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section - NEW */}
      <section className="py-24 bg-bg-muted/40 backdrop-blur-sm px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-12 italic">Câu hỏi <span className="text-secondary">Thường gặp</span></h2>
          <div className="space-y-4 text-left">
            {[
              { q: "Chi phí trọn gói du học Hàn Quốc là bao nhiêu?", a: "Chi phí dao động từ 77 triệu VNĐ tùy vào hệ học và trường bạn chọn. HanKang cam kết minh bạch 100% tài chính." },
              { q: "Tôi không biết tiếng Hàn có du học được không?", a: "Hoàn toàn được. Bạn sẽ tham gia khóa đào tạo tiếng Hàn cấp tốc tại Học viện HanKang trước khi bay." },
              { q: "HanKang có hỗ trợ chứng minh tài chính không?", a: "Có, đội ngũ chuyên gia của chúng tôi sẽ hướng dẫn và hỗ trợ bạn hoàn thiện hồ sơ chứng minh tài chính đúng quy định của Đại sứ quán." }
            ].map((faq, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-border">
                <h4 className="font-bold text-lg text-primary mb-2 flex gap-3">
                  <span className="text-secondary">Q:</span> {faq.q}
                </h4>
                <p className="text-text-muted pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
