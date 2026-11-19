"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const path = usePathname();
  useEffect(() => {
    try {
      setLight(localStorage.getItem("appearance") === "light");
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
  }, [light]);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    function close(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    function outside(e: PointerEvent) {
      if (!nav.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <nav className="dock" aria-label="Main navigation" ref={nav}>
      <Link href="/#home" onClick={() => setOpen(false)}>
        Anant<span>.</span>
      </Link>
      <button
        aria-label="Light theme"
        aria-pressed={light}
        onClick={() => {
          setLight(!light);
          try {
            localStorage.setItem("appearance", light ? "dark" : "light");
          } catch {}
        }}
      >
        ☼
      </button>
      <button
        ref={button}
        className="menu-button"
        aria-label="Navigation menu"
        aria-expanded={open}
        aria-controls="navigation-links"
        onClick={() => setOpen(!open)}
      >
        •••
      </button>
      <div hidden={!open} id="navigation-links">
        {[
          "About",
          "Skills",
          "Projects",
          "Experience",
          "Journal",
          "Contact",
        ].map((item) => (
          <Link
            key={item}
            onClick={() => setOpen(false)}
            href={"/#" + item.toLowerCase()}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
