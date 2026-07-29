import { MapPin, Phone, Clock } from 'lucide-react';
export default function Contact() {
  return (
    <section id="contact"><div className="container">
      <span className="section-label">Contact</span>
      <h2 className="section-title">联系我们</h2>
      <p className="section-sub">欢迎提前预约，到店即洗，无需等待。</p>
      <div className="info-grid">
        <div className="info-item"><MapPin /><div><div className="label">地址</div><div className="value">上海市静安区毛毛路 88 号宠物天地 1F</div></div></div>
        <div className="info-item"><Phone /><div><div className="label">电话</div><div className="value">021-8888-6666</div></div></div>
        <div className="info-item"><Clock /><div><div className="label">营业时间</div><div className="value">周二至周日 10:00 - 20:00<br />（周一店休）</div></div></div>
      </div>
    </div></section>
  );
}
