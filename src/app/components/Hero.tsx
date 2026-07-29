import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <img src="/images/hero.jpg" alt="宠物洗护" />
      <div className="overlay" />
      <div className="content">
        <h1>给毛孩子<br />温柔的宠爱</h1>
        <p>专业宠物洗护，使用进口天然洗剂，一对一贴心服务，让每一只宝贝都享受星级 SPA 体验。</p>
        <a href="#pricing" className="btn-hero">查看服务 <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}
