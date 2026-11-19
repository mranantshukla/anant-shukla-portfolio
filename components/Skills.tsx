"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { skills } from "../lib/portfolio";
export function Skills() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const group = skills[active];
  return (
    <>
      <div className="switches">
        {skills.map((item, i) => (
          <button
            key={item.name}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <motion.div
        key={group.name}
        className="skill-panel"
        initial={reduce ? false : { y: 8 }}
        animate={{ y: 0 }}
      >
        <div className="tags">
          {group.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <p>{group.example}</p>
        <Link href={"/work/" + group.project.slug}>
          Explore {group.project.title} ↗
        </Link>
      </motion.div>
    </>
  );
}
