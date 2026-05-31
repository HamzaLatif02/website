import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

export default function VantaBackground() {
  const el = useRef<HTMLDivElement>(null);
  const effect = useRef<ReturnType<typeof WAVES> | null>(null);

  useEffect(() => {
    if (el.current && !effect.current) {
      effect.current = WAVES({
        el: el.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x04080f,
      });
    }
    return () => {
      effect.current?.destroy();
      effect.current = null;
    };
  }, []);

  return (
    <div
      ref={el}
      style={{ position: 'fixed', inset: 0, zIndex: -1 }}
    />
  );
}
