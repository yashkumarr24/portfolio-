import React, { useEffect, useMemo, useRef, useState } from 'react';

type TrailItem = {
  id: number;
  x: number;
  y: number;
  src: string;
  size: number;
  rotate: number;
  durationMs: number;
};

const ALL_IMAGES = [
  '/images/image-1.webp',
  '/images/image-2.webp',
  '/images/image-3.webp',
  '/images/image-4.webp',
  '/images/image-5.webp',
  '/images/image-6.webp',
  '/images/image-7.webp',
  '/images/image-8.webp',
  '/images/image-9.webp',
  '/images/image-10.webp',
  '/images/image-11.webp',
  '/images/image-12.webp',
  '/images/image-13.webp',
  '/images/image-14.webp',
  '/images/image-15.webp',
  '/images/profile.webp',
  '/images/project-1.webp',
  '/images/project-2.webp',
  '/images/project-3.webp',
  '/images/project-4.webp'
];

const ImageTrail: React.FC = () => {
  // Pool equals number of images; we emit them sequentially one-by-one
  const [poolSize] = useState<number>(ALL_IMAGES.length);
  const poolRef = useRef<HTMLImageElement[]>([]);
  const poolIdxRef = useRef<number>(0);
  const imageIdxRef = useRef<number>(0);
  const nextId = useRef(1);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const lastTime = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const preloadedRef = useRef<boolean>(false);
  const lastMoveRef = useRef<number>(0);
  const imagePositions = useRef<{ x: number; y: number }[]>([]);
  const GAP_INCHES = 0.6;
  const GAP_PIXELS = GAP_INCHES * 96; // Convert inches to pixels (96 DPI)

  const pickImage = useMemo(() => {
    let i = 0;
    return () => {
      const src = ALL_IMAGES[i % ALL_IMAGES.length];
      i += 1;
      return src;
    };
  }, []);

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const MIN_DT = 16; // align with ~60fps

    const onMove = (e: PointerEvent) => {
      const rect = c.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      mouseRef.current = { x, y };
      lastMoveRef.current = performance.now();
    };

    const tick = () => {
      const pos = mouseRef.current;
      const now = performance.now();
      const ACTIVE_TIMEOUT = 200; // 200ms persistence after cursor stops
      
      // If cursor has stopped moving, fade out all visible images
      if (pos && now - lastMoveRef.current > ACTIVE_TIMEOUT) {
        poolRef.current.forEach((img) => {
          if (img && img.style.opacity === '1') {
            img.style.opacity = '0';
          }
        });
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      
      if (pos && now - lastMoveRef.current <= ACTIVE_TIMEOUT) {
        // Calculate offset based on distance from last image position
        let offsetX = 0;
        let offsetY = 0;
        
        if (imagePositions.current.length > 0) {
          const lastImagePos = imagePositions.current[imagePositions.current.length - 1];
          const distance = Math.sqrt(
            Math.pow(pos.x - lastImagePos.x, 2) + Math.pow(pos.y - lastImagePos.y, 2)
          );
          
          if (distance >= GAP_PIXELS) {
            // Calculate direction vector
            const dx = pos.x - lastImagePos.x;
            const dy = pos.y - lastImagePos.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            
            if (length > 0) {
              // Normalize and scale by gap distance
              const normalizedX = dx / length;
              const normalizedY = dy / length;
              offsetX = normalizedX * GAP_PIXELS;
              offsetY = normalizedY * GAP_PIXELS;
            }
          } else {
            // If too close, don't place an image
            rafRef.current = requestAnimationFrame(tick);
            return;
          }
        }
        
        // Emit one image per frame, placed at the calculated position
        const img = poolRef.current[poolIdxRef.current];
        if (img) {
          const size = 110; // fixed at init
          const rotate = Math.floor(Math.random() * 360);
          const finalX = pos.x - size / 2 + offsetX;
          const finalY = pos.y - size / 2 + offsetY;
          
          img.style.setProperty('--x', `${finalX}px`);
          img.style.setProperty('--y', `${finalY}px`);
          img.style.setProperty('--rot', `${rotate}deg`);
          // fade in instantly, then CSS transition will fade out when we set opacity back to 0
          img.style.opacity = '1';
          
          // Store the position for next calculation
          imagePositions.current.push({ x: finalX + size / 2, y: finalY + size / 2 });
          
          // Keep only recent positions to avoid memory buildup
          if (imagePositions.current.length > 10) {
            imagePositions.current.shift();
          }
          
          // schedule fade out after a short hold, without keyframe restarts
          const hold = 200; // ms before starting fade
          setTimeout(() => {
            // ensure the element is still the same pooled item
            if (poolRef.current[poolIdxRef.current] !== img) return;
            img.style.opacity = '0';
          }, hold);
        }
        poolIdxRef.current = (poolIdxRef.current + 1) % poolRef.current.length;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    // Preload images once
    if (!preloadedRef.current) {
      ALL_IMAGES.forEach((src) => {
        const im = new Image();
        // @ts-ignore
        im.decoding = 'async';
        im.src = src;
      });
      preloadedRef.current = true;
    }

    window.addEventListener('pointermove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pickImage]);

  // initialize pool images once
  const poolElements = useMemo(() => new Array(poolSize).fill(0).map(() => nextId.current++), [poolSize]);

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {poolElements.map((id, i) => (
        <img
          key={id}
          ref={(el) => {
            if (el) {
              poolRef.current[i] = el;
              // assign a fixed image source per pooled element (round-robin)
              const src = ALL_IMAGES[i % ALL_IMAGES.length];
              if (el.getAttribute('data-initialized') !== '1') {
                el.setAttribute('data-initialized', '1');
                el.src = src;
                // fixed size at init to avoid layout/recalc during motion
                const base = 110;
                el.style.width = `${base}px`;
                el.style.height = `${base}px`;
                el.style.opacity = '0';
              }
            }
          }}
          alt="trail"
          className="image-trail-item"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            objectFit: 'cover',
            borderRadius: 12
          }}
        />
      ))}
    </div>
  );
};

export default ImageTrail;


