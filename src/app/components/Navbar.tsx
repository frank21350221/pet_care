'use client';
import { Scissors } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="inner">
        <a href="#" className="logo"><Scissors /> 毛茸星球</a>
        <ul className="links">
          <li><a href="#services">服务项目</a></li>
          <li><a href="#pricing">价格一览</a></li>
          <li><a href="#gallery">店内实拍</a></li>
          <li><a href="#about">关于我们</a></li>
          <li><a href="#map-section">店铺位置</a></li>
          <li><a href="#contact">联系我们</a></li>
        </ul>
        <button className="btn-nav" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
          预约洗护
        </button>
      </div>
    </nav>
  );
}
