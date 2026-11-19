"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// A surveyed surface: each line is a cross-section of the same terrain.
export function Terrain() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let disposed = false;
    let clean = () => {};
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    import("three")
      .then((T) => {
        if (disposed) return;
        const renderer = new T.WebGLRenderer({
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        element.appendChild(renderer.domElement);
        const scene = new T.Scene(),
          camera = new T.PerspectiveCamera(45, 1, 0.1, 100);
        camera.position.set(0, 3.6, 9);
        camera.lookAt(0, -0.7, 0);
        const land = new T.Group(),
          material = new T.LineBasicMaterial({
            color: 0x99ab98,
            transparent: true,
            opacity: 0.36,
          });
        for (let i = 0; i < 55; i++) {
          const z = i * 0.18 - 6;
          const points = Array.from({ length: 130 }, (_, j) => {
            const x = j * 0.18 - 12;
            const height =
              0.7 * Math.sin(x * 0.85 + z * 0.65) +
              0.35 * Math.cos(x * 1.1 - z) +
              0.9 * Math.cos(x * 0.4);
            return new T.Vector3(x, height - 1.5, z);
          });
          land.add(
            new T.Line(new T.BufferGeometry().setFromPoints(points), material),
          );
        }
        scene.add(land);
        const paint = () => renderer.render(scene, camera);
        const resize = new ResizeObserver(() => {
          const { clientWidth: w, clientHeight: h } = element;
          if (!h) return;
          renderer.setSize(w, h);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          paint();
        });
        resize.observe(element);
        function move(e: PointerEvent) {
          if (reduced.matches) return;
          gsap.to(land.rotation, {
            y: (e.clientX / window.innerWidth - 0.5) * 0.22,
            duration: 0.8,
            overwrite: true,
            onUpdate: paint,
          });
        }
        const hero = element.parentElement;
        hero?.addEventListener("pointermove", move);
        clean = () => {
          resize.disconnect();
          hero?.removeEventListener("pointermove", move);
          gsap.killTweensOf(land.rotation);
          land.children.forEach((obj) =>
            (obj as InstanceType<typeof T.Line>).geometry.dispose(),
          );
          material.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      })
      .catch(() => {
        /* The portrait and static contours remain visible without WebGL. */
      });
    return () => {
      disposed = true;
      clean();
    };
  }, []);
  return <div className="terrain" ref={host} aria-hidden="true" />;
}
