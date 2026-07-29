const quotes = [
  { text: '我家布偶猫特别胆小，但美容师超有耐心，全程安抚，洗完香喷喷的，毛发也顺了好多！', author: '团团妈' },
  { text: '金毛掉毛季来这里做深层清洁，效果立竿见影。店里环境干净明亮，以后就定点这里了。', author: '大黄爸' },
  { text: '约了SPA套餐，我家柴基洗完整个狗都开心了。美容师手法专业，还给讲了日常护理知识。', author: '短短主人' },
];
export default function Testimonials() {
  return (
    <section id="testimonials"><div className="container">
      <span className="section-label">Reviews</span>
      <h2 className="section-title">客人评价</h2>
      <p className="section-sub">每一位家长的信任，是我们坚持用心服务最大的动力。</p>
      <div className="grid">
        {quotes.map((q, i) => (
          <div className="quote" key={i}>
            <div className="stars">★★★★★</div>
            <p>{q.text}</p>
            <div className="author">—— {q.author}</div>
          </div>
        ))}
      </div>
    </div></section>
  );
}
