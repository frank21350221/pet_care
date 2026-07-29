import { Droplets, Scissors, Sparkles, PawPrint, Ear, Brush } from 'lucide-react';
const services = [
  { icon: Droplets, title: '精致沐浴', desc: '根据毛质选用专属洗护产品，深层清洁同时呵护皮肤屏障，洗后毛发蓬松柔亮。' },
  { icon: Scissors, title: '专业修剪', desc: '持有A级宠物美容师资质，针对不同犬猫品种设计造型，精致与舒适兼得。' },
  { icon: Sparkles, title: 'SPA 护理', desc: '碳酸温泉浴 + 精油按摩，缓解宠物压力，改善皮肤状况，让宝贝彻底放松。' },
  { icon: PawPrint, title: '足部护理', desc: '修剪指甲、打磨、肉垫护理与脚底毛清理，保护关节，也让小爪子干干净净。' },
  { icon: Ear, title: '耳道清洁', desc: '温和清除耳道污垢与多余分泌物，预防耳螨与炎症，保持耳道干爽健康。' },
  { icon: Brush, title: '牙齿护理', desc: '无痛超声波洁牙 + 口腔检查，去除牙结石、清新口气，守护口腔健康。' },
];
export default function Services() {
  return (
    <section id="services"><div className="container">
      <span className="section-label">What We Do</span>
      <h2 className="section-title">服务项目</h2>
      <p className="section-sub">从基础清洁到深层护理，每一道工序都倾注对宠物的爱与耐心。</p>
      <div className="grid">
        {services.map(({ icon: Icon, title, desc }) => (
          <div className="card" key={title}>
            <div className="icon-wrap"><Icon /></div>
            <h3>{title}</h3><p>{desc}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}
