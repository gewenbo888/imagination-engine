"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Full-screen GLSL "dream field": a flowing neural-fluid nebula in violet/cyan/rose,
 * with drifting luminous nodes. The brain's generative model, rendered as cosmos.
 * Single full-screen plane → cheap, reliable, cinematic.
 */
export default function DreamField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = ref.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      u_time: { value: 0 },
      u_res: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 v_uv;
        void main() {
          v_uv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        varying vec2 v_uv;
        uniform float u_time;
        uniform vec2 u_res;
        uniform vec2 u_mouse;

        // hash / noise / fbm
        float hash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
        float noise(vec2 p){
          vec2 i=floor(p), f=fract(p);
          float a=hash(i), b=hash(i+vec2(1.,0.)), c=hash(i+vec2(0.,1.)), d=hash(i+vec2(1.,1.));
          vec2 u=f*f*(3.-2.*f);
          return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
        }
        float fbm(vec2 p){
          float v=0., a=0.5;
          mat2 m=mat2(1.6,1.2,-1.2,1.6);
          for(int i=0;i<6;i++){ v+=a*noise(p); p=m*p; a*=0.5; }
          return v;
        }

        void main(){
          vec2 uv = v_uv;
          vec2 p = (gl_FragCoord.xy - 0.5*u_res.xy)/u_res.y;
          float t = u_time*0.05;

          // domain-warped flowing field — the "dream fluid"
          vec2 q = vec2(fbm(p*1.6 + vec2(0.0, t)), fbm(p*1.6 + vec2(5.2, -t)));
          vec2 r = vec2(fbm(p*1.6 + 3.0*q + vec2(1.7,9.2) + 0.15*t),
                        fbm(p*1.6 + 3.0*q + vec2(8.3,2.8) - 0.12*t));
          float f = fbm(p*1.6 + 2.5*r);

          // palette: void → dream-violet → neural-cyan → synapse-rose
          vec3 cVoid   = vec3(0.016,0.012,0.043);
          vec3 cViolet = vec3(0.486,0.302,1.0);
          vec3 cCyan   = vec3(0.31,0.84,0.88);
          vec3 cRose   = vec3(1.0,0.43,0.66);

          vec3 col = mix(cVoid, cViolet, smoothstep(0.1,0.8,f));
          col = mix(col, cCyan, smoothstep(0.45,0.95,length(r)) * 0.5);
          col = mix(col, cRose, smoothstep(0.5,1.0,length(q)) * 0.35);

          // soft vignette toward the void
          float vig = smoothstep(1.25, 0.25, length(p));
          col *= mix(0.35, 1.0, vig);

          // mouse-warmed glow
          float md = length(p - (u_mouse - 0.5)*vec2(u_res.x/u_res.y, 1.0)*2.0);
          col += cViolet * 0.10 * smoothstep(0.9, 0.0, md);

          // drifting luminous "nodes" — synapses firing
          float nodes = 0.0;
          for(int i=0;i<5;i++){
            float fi=float(i);
            vec2 c = vec2(sin(t*1.3+fi*1.7)*0.7, cos(t*1.1+fi*2.3)*0.5);
            float d = length(p - c);
            nodes += 0.012/(d+0.04) * (0.5+0.5*sin(u_time*1.5+fi));
          }
          col += mix(cCyan, cRose, 0.5) * nodes;

          // grain to kill banding
          col += (hash(uv*u_time)-0.5)*0.015;

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(quad);

    let raf = 0;
    const start = performance.now();
    const target = new THREE.Vector2(0.5, 0.5);

    const onMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      target.set((e.clientX - rect.left) / rect.width, 1 - (e.clientY - rect.top) / rect.height);
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      renderer.setSize(w, h);
      uniforms.u_res.value.set(w, h);
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      uniforms.u_time.value = (performance.now() - start) / 1000;
      uniforms.u_mouse.value.lerp(target, 0.04);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      material.dispose();
      quad.geometry.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 h-full w-full" />;
}
