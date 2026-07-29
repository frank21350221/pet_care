const rows = [
  { item: '基础洗护', scope: '小型犬 / 猫', duration: '~ 45 min', price: '¥128', badge: '' },
  { item: '基础洗护', scope: '中型犬', duration: '~ 60 min', price: '¥168', badge: '' },
  { item: '基础洗护', scope: '大型犬', duration: '~ 75 min', price: '¥228', badge: '' },
  { item: '精致美容', scope: '全犬种', duration: '~ 90 min', price: '¥298', badge: '热销' },
  { item: 'SPA 护理套餐', scope: '全犬猫', duration: '~ 60 min', price: '¥198', badge: '' },
  { item: '单项护理', scope: '足部 / 耳道 / 牙齿', duration: '~ 20 min', price: '¥68 起', badge: '' },
];
export default function Pricing() {
  return (
    <section id="pricing"><div className="container">
      <span className="section-label">Pricing</span>
      <h2 className="section-title">价格一览</h2>
      <p className="section-sub">透明定价，无隐形消费。所有项目包含基础体检与洗后护理。</p>
      <div className="table-wrap"><table>
        <thead><tr><th>项目</th><th>适用</th><th>时长</th><th>价格</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.item}</td><td>{r.scope}</td><td>{r.duration}</td>
              <td className="price">{r.price}{r.badge && <span className="badge">{r.badge}</span>}</td>
            </tr>
          ))}
        </tbody>
      </table></div>
    </div></section>
  );
}
