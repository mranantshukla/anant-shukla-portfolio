type CoverProps = { slug: string; color: string };
// Original illustrative covers, with no dependency on external media.
export function Cover({ slug, color }: CoverProps) {
  return (
    <svg
      className="cover"
      aria-hidden="true"
      viewBox="0 0 480 210"
      preserveAspectRatio="xMidYMid slice"
      style={{ background: color }}
    >
      {slug === "lane-distance" ? (
        <g>
          <path
            fill="#638171"
            d="M0 94 69 51 105 72 157 37 215 85 297 42 362 77 411 46 480 80V140H0Z"
          />
          <path fill="#243b36" d="M0 210 216 90H252L480 210Z" />
          <path
            fill="none"
            stroke="#f6e8b7"
            strokeWidth="3"
            strokeDasharray="18 9"
            d="M156 215 230 91"
          />
          <path
            fill="none"
            stroke="#d5ff40"
            strokeWidth="4"
            d="M35 210 219 92"
          />
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={i}
              cx={64 + i * 35}
              cy={191 - i * 22}
              r="4"
              fill="#efff92"
            />
          ))}
        </g>
      ) : slug === "llmscope" ? (
        <g>
          {Array.from({ length: 8 }, (_, i) => (
            <path
              key={i}
              stroke={i === 4 ? "#f3ff84" : "#293951"}
              fill="none"
              strokeWidth={i === 4 ? 4 : 1.5}
              d={
                "M-10 " +
                (55 + i * 10) +
                " Q70 " +
                (18 + i * 8) +
                " 126 " +
                (66 + i * 8) +
                " T220 " +
                (68 + i * 8) +
                " L253 " +
                (17 + i * 9) +
                " L276 " +
                (114 + i * 7) +
                " L299 " +
                (41 + i * 9) +
                " Q370 " +
                (106 + i * 6) +
                " 490 " +
                (62 + i * 9)
              }
            />
          ))}
        </g>
      ) : slug === "swiggy-sense" ? (
        <g transform="translate(240 105) rotate(-12)">
          <ellipse rx="141" ry="86" fill="#925431" />
          <ellipse cy="-6" rx="135" ry="82" fill="#f8e0ab" />
          <ellipse cy="-6" rx="108" ry="62" fill="#e89145" />
          {Array.from({ length: 15 }, (_, i) => (
            <path
              key={i}
              transform={
                "translate(" +
                (-83 + (i % 5) * 36) +
                " " +
                (-33 + Math.floor(i / 5) * 28) +
                ") rotate(" +
                i * 11 +
                ")"
              }
              d="M-10 0Q0 -13 12 0Q0 10 -10 0"
              fill={["#527857", "#a34631", "#ffcf77"][i % 3]}
            />
          ))}
        </g>
      ) : (
        <g transform="translate(77 25)">
          {Array.from({ length: 45 }, (_, i) => (
            <rect
              key={i}
              x={(i % 9) * 37}
              y={Math.floor(i / 9) * 32}
              width="31"
              height="26"
              rx="4"
              fill={
                ["#5c476c", "#846a96", "#b095c2", "#efe496"][
                  (i + Math.floor(i / 9) * 2) % 4
                ]
              }
            />
          ))}
        </g>
      )}
    </svg>
  );
}
