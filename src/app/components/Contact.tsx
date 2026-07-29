'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Calendar, User, Scissors, Send, ChevronDown } from 'lucide-react';

const timeSlots = [
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '13:00 - 14:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
  '17:00 - 18:00',
  '18:00 - 19:00',
  '19:00 - 20:00',
];

const services = [
  { value: 'basic', label: '基础洗护' },
  { value: 'deep', label: '深层清洁 SPA' },
  { value: 'grooming', label: '精致美容造型' },
  { value: 'puppy', label: '幼宠专属护理' },
  { value: 'medical', label: '药浴护理' },
];

export default function Contact() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [petName, setPetName] = useState('');
  const [service, setService] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !petName || !service || !phone) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const hasSelection = date && time;

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

      <div className="booking-wrapper">
        <div className="booking-form-card">
          <div className="booking-header">
            <Calendar size={20} />
            <span>预约到店</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>到店日期</label>
                <div className="input-wrap">
                  <Calendar size={16} />
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={today} max={maxDate} required />
                </div>
              </div>
              <div className="form-group">
                <label>到店时间</label>
                <div className="input-wrap select-wrap">
                  <Clock size={16} />
                  <select value={time} onChange={(e) => setTime(e.target.value)} required>
                    <option value="">选择时间段</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="select-arrow" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>宠物名字</label>
                <div className="input-wrap">
                  <User size={16} />
                  <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} placeholder="如：豆豆" required />
                </div>
              </div>
              <div className="form-group">
                <label>服务项目</label>
                <div className="input-wrap select-wrap">
                  <Scissors size={16} />
                  <select value={service} onChange={(e) => setService(e.target.value)} required>
                    <option value="">选择服务</option>
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="select-arrow" />
                </div>
              </div>
            </div>
            <div className="form-group full">
              <label>联系电话</label>
              <div className="input-wrap">
                <Phone size={16} />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="请输入手机号" required />
              </div>
            </div>
            <button type="submit" className="btn-submit">
              <Send size={16} />
              {submitted ? '预约已提交 ✓' : '立即预约'}
            </button>
          </form>
        </div>

        <div className="arrival-annotation">
          <div className="annotation-badge">
            <Clock size={18} />
            <span>期望到店时间</span>
          </div>
          {hasSelection ? (
            <div className="annotation-preview">
              <div className="preview-date">{date}</div>
              <div className="preview-time">{time}</div>
            </div>
          ) : (
            <div className="annotation-hint">
              请在左侧选择您期望的到店日期和时间，我们将为您预留服务时段。
            </div>
          )}
          <div className="annotation-tips">
            <div className="tip">
              <span className="tip-dot" />
              建议提前 5 分钟到店签到
            </div>
            <div className="tip">
              <span className="tip-dot" />
              迟到超过 15 分钟需重新排号
            </div>
            <div className="tip">
              <span className="tip-dot" />
              预约保留至选定时段结束
            </div>
          </div>
        </div>
      </div>
    </div></section>
  );
}
