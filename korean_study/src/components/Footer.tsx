'use client';

import { GraduationCap, Mail, MapPin, Phone, Globe, Camera, Play } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.jpg" alt="Du Học HanKang" className="w-10 h-10 rounded-lg object-contain bg-white" />
            <span className="text-xl font-bold tracking-tight text-white uppercase">HanKang</span>
          </div>
          <p className="text-blue-100/60 leading-relaxed mb-6">
            HanKang Academy - Chuyên gia tư vấn du học Hàn Quốc tận tâm và chuyên nghiệp. Chúng tôi luôn sẵn sàng hỗ trợ và sát cánh bên bạn trên con đường chinh phục ước mơ.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <Globe size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <Camera size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
              <Play size={20} />
            </Link>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-xl font-bold mb-6 text-white">Chương trình</h4>
          <ul className="space-y-4 text-white/70">
            <li><Link href="/programs/language" className="hover:text-secondary transition-colors">Du học tiếng Hàn</Link></li>
            <li><Link href="/programs/university" className="hover:text-secondary transition-colors">Hệ Đại học/Thạc sĩ</Link></li>
            <li><Link href="/programs/vocational" className="hover:text-secondary transition-colors">Du học nghề D-4-6</Link></li>
          </ul>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-xl font-bold mb-6 text-white">Về chúng tôi</h4>
          <ul className="space-y-4 text-white/70">
            <li><Link href="/partners" className="hover:text-secondary transition-colors">Đối tác chiến lược</Link></li>
            <li><Link href="/community" className="hover:text-secondary transition-colors">Cộng đồng sinh viên</Link></li>
            <li><Link href="#" className="hover:text-secondary transition-colors">Tin tức & Sự kiện</Link></li>
            <li><Link href="#" className="hover:text-secondary transition-colors">Tuyển dụng</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-xl font-bold mb-6 text-white">Liên hệ</h4>
          <ul className="space-y-6 text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-secondary shrink-0 mt-1" />
              <span>Số nhà 12, Ngõ 25 Đường Phạm Nguyễn Du, Khối Trung Thanh, Phường Cửa Lò, Nghệ An</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-secondary shrink-0" />
              <span>097 490 92 96</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-secondary shrink-0" />
              <span>duhoccunghankang@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-white/50 text-sm">
        <p>© 2026 Du Học HanKang. All rights reserved.</p>
      </div>
    </footer>
  );
}
