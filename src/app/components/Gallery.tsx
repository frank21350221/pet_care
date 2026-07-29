const images = [
  { src: '/images/gallery-1.jpg', alt: '前台接待区' },
  { src: '/images/gallery-2.jpg', alt: '美容操作台' },
  { src: '/images/gallery-3.jpg', alt: '独立洗护间' },
  { src: '/images/gallery-4.jpg', alt: 'SPA 专区' },
  { src: '/images/gallery-5.jpg', alt: '等候休息区' },
  { src: '/images/gallery-6.jpg', alt: '宠物用品区' },
];
export default function Gallery() {
  return (
    <section id="gallery"><div className="container">
      <span className="section-label">Our Space</span>
      <h2 className="section-title">店内实拍</h2>
      <p className="section-sub">明亮洁净的洗护空间，分区管理猫狗区域，每一处都让家长放心。</p>
      <div className="grid">
        {images.map((img) => <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />)}
      </div>
    </div></section>
  );
}
