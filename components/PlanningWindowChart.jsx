/**
 * The dashboard card in the homepage hero.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  THE FIGURES BELOW ARE NOT MEASURED CLIENT RESULTS.
 *
 *  They were specified from a design mockup and are presented on the page as
 *  a real client tax position. Nothing in the material the client supplied
 *  supports them. Before launch they must be confirmed against a real
 *  engagement or replaced — see CONTENT-TODO.md. Advertising specific savings
 *  a firm cannot evidence is a professional-conduct exposure for a licensed
 *  CPA, not just a copy problem.
 *
 *  Everything a reviewer needs to change is in this block.
 * ─────────────────────────────────────────────────────────────────────────
 */
const HEADLINE = {
  eyebrow: 'Client tax position · FY 2026',
  figure: '$164,800',
  delta: '31% tax burden',
  caption:
    'Projected savings from entity restructuring, S-corp election & accelerated depreciation.',
};

// Bar heights as a percentage of the plot, left to right.
const OWED = [100, 88, 96, 72, 60, 44, 34];
// The rising line is drawn through four points, one every other bar.
const KEPT = [12, 25, 63, 100];

const VIEW_W = 640;
const VIEW_H = 232;
const PLOT_L = 16;
const PLOT_R = 624;
const BASELINE = 214;
const PLOT_TOP = 18;
const PLOT_H = BASELINE - PLOT_TOP;

const STEP = (PLOT_R - PLOT_L) / OWED.length;
const BAR_W = STEP * 0.62;

const cx = (i) => PLOT_L + STEP * i + STEP / 2;
const cy = (v) => BASELINE - (v / 100) * PLOT_H;

const pts = KEPT.map((v, i) => [cx(i * 2), cy(v)]);
const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
const area = `${line} L${pts[pts.length - 1][0].toFixed(1)},${BASELINE} L${pts[0][0].toFixed(1)},${BASELINE} Z`;

export default function PlanningWindowChart() {
  return (
    <figure className="m-0">
      <figcaption>
        <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-body/70">
          {HEADLINE.eyebrow}
        </p>
        <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="font-display text-[2.75rem] font-extrabold leading-none tracking-tight text-navy sm:text-[3.25rem]">
            {HEADLINE.figure}
          </p>
          <p className="rounded-full bg-[#e4f3ea] px-3.5 py-1.5 font-display text-[0.72rem] font-bold uppercase tracking-wide text-[#15774a]">
            <span aria-hidden="true">▼ </span>
            {HEADLINE.delta}
          </p>
        </div>
        <p className="mt-3.5 text-sm leading-relaxed text-slate-body">{HEADLINE.caption}</p>
      </figcaption>

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="mt-6 h-auto w-full"
        role="img"
        aria-labelledby="pw-title pw-desc"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="pw-title">Estimated tax owed falling as cash you keep rises</title>
        <desc id="pw-desc">
          Navy bars show estimated tax owed decreasing from left to right. A gold line shows the
          cash you keep rising over the same span.
        </desc>

        <defs>
          <linearGradient id="pw-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d5285" />
            <stop offset="100%" stopColor="#5c7ba6" />
          </linearGradient>
          <linearGradient id="pw-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a44b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c9a44b" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {[0, 0.34, 0.67, 1].map((f) => (
          <line
            key={f}
            x1={PLOT_L}
            x2={PLOT_R}
            y1={BASELINE - f * PLOT_H}
            y2={BASELINE - f * PLOT_H}
            stroke="#0b2545"
            strokeOpacity={f === 0 ? 0.12 : 0.06}
          />
        ))}

        {OWED.map((v, i) => {
          const h = (v / 100) * PLOT_H;
          return (
            <rect
              key={i}
              x={cx(i) - BAR_W / 2}
              y={BASELINE - h}
              width={BAR_W}
              height={h}
              rx="11"
              fill="url(#pw-bar)"
            />
          );
        })}

        <path d={area} fill="url(#pw-area)" />
        <path
          d={line}
          fill="none"
          stroke="#c9a44b"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="6.5" fill="#ffffff" stroke="#c9a44b" strokeWidth="3.5" />
        ))}
      </svg>

      <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-2 border-t border-navy/10 pt-5">
        <span className="flex items-center gap-2.5 text-sm font-semibold text-slate-body">
          <span aria-hidden="true" className="h-3 w-3 rounded-sm bg-navy-600" />
          Estimated tax owed
        </span>
        <span className="flex items-center gap-2.5 text-sm font-semibold text-slate-body">
          <span aria-hidden="true" className="h-3 w-3 rounded-sm bg-gold" />
          Cash you keep
        </span>
      </div>
    </figure>
  );
}
