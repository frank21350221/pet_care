'use client';
import { useEffect, useRef } from 'react';

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    import('leaflet').then((L) => {
      if (cancelled || !mapRef.current) return;

      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const pawIcon = L.divIcon({
        className: 'custom-paw-marker',
        html: '<div style="position:relative;width:48px;height:48px;">'
          + '<div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:12px;height:12px;border-radius:50%;background:#E07050;box-shadow:0 2px 4px rgba(0,0,0,0.3);z-index:2;"></div>'
          + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style="position:absolute;top:0;left:0;width:48px;height:40px;filter:drop-shadow(0 2px 3px rgba(0,0,0,0.3));">'
            + '<circle cx="24" cy="24" r="22" fill="#E07050" stroke="#fff" stroke-width="2.5"/>'
            + '<text x="24" y="29" text-anchor="middle" font-size="22">🐾</text>'
          + '</svg>'
          + '<div style="position:absolute;top:-8px;right:-8px;width:18px;height:18px;background:#3D6B53;border-radius:50%;border:2px solid #fff;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 3px rgba(0,0,0,0.3);">'
            + '<span style="color:#fff;font-size:10px;font-weight:700;">★</span>'
          + '</div>'
        + '</div>',
        iconSize: [48, 52],
        iconAnchor: [24, 52],
        popupAnchor: [0, -52],
        tooltipAnchor: [24, -30],
      });

      const map = L.map(mapRef.current).setView([31.2264, 121.4478], 16);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker([31.2264, 121.4478], { icon: pawIcon })
        .addTo(map)
        .bindTooltip(
          '<div style="text-align:center;font-family:&quot;PingFang SC&quot;,&quot;Microsoft YaHei&quot;,sans-serif;">'
            + '<div style="font-size:14px;font-weight:700;color:#3D6B53;">🐾 毛茸星球</div>'
            + '<div style="font-size:11px;color:#5C6B64;margin-top:3px;">宠物洗护馆</div>'
            + '<div style="font-size:10px;color:#9BA8A1;margin-top:2px;">静安区毛毛路 88 号</div>'
          + '</div>',
          { direction: 'top', offset: [0, -12] }
        )
        .bindPopup(
          '<b style="color:#3D6B53;font-size:15px;">🐾 毛茸星球宠物洗护馆</b>'
          + '<br><span style="font-size:13px;color:#5C6B64;">📍 静安区毛毛路 88 号宠物天地 1F</span>'
          + '<br><span style="font-size:13px;color:#5C6B64;">📞 021-8888-6666</span>'
          + '<br><span style="font-size:13px;color:#5C6B64;">🕐 周二至周日 10:00-20:00（周一店休）</span>'
        );

      const section = mapRef.current?.parentElement?.parentElement;
      if (!section) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { setTimeout(() => map.invalidateSize(), 100); obs.disconnect(); } },
        { threshold: 0.1 },
      );
      obs.observe(section);
    });
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="map-section"><div className="container">
      <span className="section-label">Location</span>
      <h2 className="section-title">店铺位置</h2>
      <p className="section-sub">上海市静安区毛毛路 88 号宠物天地 1F · 地铁 2 号线静安寺站 3 号口步行 5 分钟</p>
      <div className="map-wrap"><div ref={mapRef} style={{ height: '100%', width: '100%' }} /></div>
    </div></section>
  );
}
