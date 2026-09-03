import { cn } from "@/lib/utils";

export function Sparkline({
  data,
  className,
  width = 108,
  height = 30,
}: {
  data: number[];
  className?: string;
  width?: number;
  height?: number;
}) {
  if (!data.length) return null;

  const max = Math.max(...data, 1);
  const step = width / Math.max(data.length - 1, 1);
  const top = 3;
  const bottom = height - 3;

  const points = data.map((v, i) => {
    const x = i * step;
    const y = bottom - (v / max) * (bottom - top);
    return [x, y] as const;
  });

  const line = points.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${width} ${height} L0 ${height} Z`;
  const id = data.length + "-" + max;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={cn("shrink-0 overflow-visible", className)}
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`spark-fade-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="45%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id={`spark-mask-${id}`}>
          <rect width={width} height={height} fill={`url(#spark-fade-${id})`} />
        </mask>
      </defs>

      <g mask={`url(#spark-mask-${id})`}>
        <path d={area} className="fill-violet/12" />
        <path
          d={line}
          fill="none"
          className="stroke-violet/70 transition-[stroke] group-hover:stroke-violet"
          strokeWidth={1.5}
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}
