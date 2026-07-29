import type { Metadata } from 'next';
import 'leaflet/dist/leaflet.css';
import './globals.css';

export const metadata: Metadata = {
  title: '毛茸星球 · 宠物洗护馆',
  description: '专业宠物洗护，使用进口天然洗剂，一对一贴心服务，让每一只宝贝都享受星级 SPA 体验。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
