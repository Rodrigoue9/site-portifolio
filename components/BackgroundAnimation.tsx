import React, { useEffect, useRef } from 'react';

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      // Increase density slightly
      const particleCount = Math.min(Math.floor(window.innerWidth / 6), 120);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Make particles slightly larger for visibility
          radius: Math.random() * 2.5 + 1, 
          // Move up slightly faster
          speedY: Math.random() * 0.8 + 0.3,
          speedX: Math.random() * 0.4 - 0.2,
          // Increase opacity range
          opacity: Math.random() * 0.6 + 0.2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Using neon cyan with variable opacity
        ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
        
        // Add Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00E5FF';
        
        ctx.fill();
        
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* Base Gradient - Deep dark to allow neon to pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#000000]"></div>

      {/* Static Cyber Grid - Lighter opacity for subtlety */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(to right, #00E5FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Ambient Color Splashes - Adjusted for depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Canvas Layer for Particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};