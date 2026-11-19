"use client";
import { useState } from "react";
export function Crowd() {
  const [paused, setPaused] = useState(false);
  return (
    <div className={"promenade" + (paused ? " paused" : "")}>
      <div className="walkway" aria-hidden="true">
        {Array.from({ length: 30 }, (_, i) => {
          const coat = [
            "#c68a76",
            "#53746e",
            "#b8bb91",
            "#67728c",
            "#e2bf66",
            "#dad2c3",
          ][i % 6];
          return (
            <div
              className="walker"
              key={i}
              style={{
                left: (i % 15) * 7 + "%",
                bottom: i < 15 ? "32%" : "6%",
                animationDelay: -i * 0.63 + "s",
                scale: i < 15 ? ".74" : "1",
              }}
            >
              <svg viewBox="0 0 52 110" fill="none">
                <ellipse
                  cx="26"
                  cy="105"
                  rx="18"
                  ry="3"
                  fill="#30342d"
                  opacity=".3"
                />
                <g stroke="#262d2b" strokeWidth="8" strokeLinecap="round">
                  <path className="leg" d="M21 62 19 80 13 99" />
                  <path className="leg back" d="M30 62 34 81 39 100" />
                </g>
                <path
                  d="M15 31 Q25 25 36 32 L40 65 Q26 69 13 64Z"
                  fill={coat}
                />
                <path
                  d="M17 35 10 54 8 65M34 35 39 52 44 59"
                  stroke={coat}
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <rect
                  x="21"
                  y="21"
                  width="9"
                  height="10"
                  rx="3"
                  fill="#b67b55"
                />
                <ellipse
                  cx="25"
                  cy="16"
                  rx="10"
                  ry="12"
                  fill={i % 2 ? "#a57050" : "#ca9574"}
                />
                <path
                  d={
                    i % 3
                      ? "M15 18Q10 0 24 2Q40 0 35 15L31 9Q23 14 17 10Z"
                      : "M13 27Q9 0 24 2Q39 -1 37 28L31 24 32 11Q24 15 18 9L19 26Z"
                  }
                  fill="#292c29"
                />
              </svg>
            </div>
          );
        })}
      </div>
      <button aria-pressed={paused} onClick={() => setPaused(!paused)}>
        {paused ? "Play" : "Pause"} campus walk
      </button>
    </div>
  );
}
