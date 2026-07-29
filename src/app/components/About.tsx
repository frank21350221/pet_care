export default function About() {
  return (
    <section id="about"><div className="container">
      <span className="section-label">About Us</span>
      <h2 className="section-title">关于我们</h2>
      <p className="section-sub">始于对宠物的热爱，用心做好每一次洗护。</p>
      <div className="row">
        <img src="/images/about.jpg" alt="毛茸星球团队" loading="lazy" />
        <div className="text">
          <h3>让每一只毛孩子都被温柔以待</h3>
          <p>毛茸星球成立于 2018 年，由一群资深宠物美容师共同创立。我们坚持使用进口天然有机洗护产品，为每一只到店的毛孩子提供一对一专属服务。</p>
          <p>店内设有独立的猫咪专属区和狗狗活动区，全透明操作间让家长可以全程观看洗护过程，安心放心。</p>
          <div className="stats">
            <div className="stat"><div className="num">8+</div><div className="label">年行业经验</div></div>
            <div className="stat"><div className="num">5000+</div><div className="label">服务毛孩子</div></div>
            <div className="stat"><div className="num">6</div><div className="label">持证美容师</div></div>
          </div>
        </div>
      </div>
    </div></section>
  );
}
