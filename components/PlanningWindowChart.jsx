/**
 * The chart in the homepage hero.
 *
 * Shape, legend and framing follow the reference design: navy bars for tax
 * owed falling away, a gold line for cash kept rising to meet them. The x-axis
 * is the planning itself — baseline on the left, levers applied on the right —
 * which is what makes the two series legible without a caption.
 *
 * The reference also carried "$164,800" and "31% TAX BURDEN". Those are client
 * outcomes the firm has not measured, so they are not printed here; the card
 * makes the argument without claiming a result. If real, documented figures
 * ever exist, the headline slot is where they would go.
 */

// Estimated tax owed as planning levers are applied. Complement = cash kept.
const OWED = [100, 94, 85, 72, 56, 38, 18];

const VIEW_W = 640;
const VIEW_H = 268;
const PLOT_L = 20;
const PLOT_R = 620;
const BASELINE = 226;
const PLOT_TOP = 26;
const PLOT_H = BASELINE - PLOT_TOP;

const STEP = (PLOT_R - PLOT_L) / OWED.length;
const BAR_W = STEP * 0.58;

const cx = (i) => PLOT_L + STEP * i + STEP / 2;
const cy = (v) => BASELINE - (v / 100) * PLOT_H;

const kept = OWED.map((v) => 100 - v);
const pts = kept.map((v, i) => [cx(i), cy(v)]);
const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
const area = `${line} L${cx(kept.length - 1).toFixed(1)},${BASELINE} L${cx(0).toFixed(1)},${BASELINE} Z`;

export default function PlanningWindowChart() {
  return (
    <figure className="m-0">
      <figcaption>
        <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-body/70">
          What proactive planning changes
        </p>
        {/* Sized to sit on one line beside the pill, the way the reference put
            its figure and badge side by side. */}
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="font-display text-[1.75rem] font-extrabold leading-none text-navy sm:text-[2rem]">
            Owe less. Keep more.
          </p>
          <p className="rounded-full bg-gold-50 px-3 py-1 font-display text-[0.68rem] font-bold uppercase tracking-wide text-gold-700">
            Same income
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-body">
          Entity restructuring, S-corp election, retirement timing, and accelerated depreciation are
          the levers — and nearly all of them have to be pulled before the year closes.
        </p>
      </figcaption>

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="mt-5 h-auto w-full"
        role="img"
        aria-labelledby="pw-title pw-desc"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="pw-title">How tax planning shifts tax owed into cash you keep</title>
        <desc id="pw-desc">
          An illustration, not client data. Navy bars show estimated tax owed, highest with no
          planning in place and falling as each lever is applied. A gold line shows the mirror
          image: the cash you keep, rising as the tax owed drops.
        </desc>

        <defs>
          <linearGradient id="pw-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d5285" />
            <stop offset="100%" stopColor="#5c7ba6" />
          </linearGradient>
          <linearGradient id="pw-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a44b" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#c9a44b" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75, 1].map((f) => (
          <line
            key={f}
            x1={PLOT_L}
            x2={PLOT_R}
            y1={BASELINE - f * PLOT_H}
            y2={BASELINE - f * PLOT_H}
            stroke="#0b2545"
            strokeOpacity="0.06"
          />
        ))}
        <line x1={PLOT_L} x2={PLOT_R} y1={BASELINE} y2={BASELINE} stroke="#0b2545" strokeOpacity="0.14" />

        {/* Estimated tax owed */}
        {OWED.map((v, i) => {
          const h = (v / 100) * PLOT_H;
          return (
            <rect
              key={i}
              x={cx(i) - BAR_W / 2}
              y={BASELINE - h}
              width={BAR_W}
              height={h}
              rx="10"
              fill="url(#pw-bar)"
            />
          );
        })}

        {/* Cash you keep */}
        <path d={area} fill="url(#pw-area)" />
        <path
          d={line}
          fill="none"
          stroke="#c9a44b"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {pts.map(([x, y], i) =>
          i % 2 === 0 ? (
            <circle key={i} cx={x} cy={y} r="6.5" fill="#ffffff" stroke="#c9a44b" strokeWidth="3.5" />
          ) : null,
        )}

        {/* The axis is the planning, not the calendar — that is what makes the
            two series read without an explanation. */}
        <text x={PLOT_L} y={VIEW_H - 8} fontSize="15" fontWeight="600" fill="#4b5563" fillOpacity="0.7">
          NO PLANNING
        </text>
        <text
          x={PLOT_R}
          y={VIEW_H - 8}
          textAnchor="end"
          fontSize="15"
          fontWeight="600"
          fill="#4b5563"
          fillOpacity="0.7"
        >
          FULLY PLANNED
        </text>
      </svg>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-navy/10 pt-4">
        <span className="flex items-center gap-2 text-xs font-semibold text-slate-body">
          <span aria-hidden="true" className="h-3 w-3 rounded bg-navy-600" />
          Estimated tax owed
        </span>
        <span className="flex items-center gap-2 text-xs font-semibold text-slate-body">
          <span aria-hidden="true" className="h-3 w-3 rounded bg-gold" />
          Cash you keep
        </span>
      </div>

      <p className="mt-3 text-[0.7rem] leading-relaxed text-slate-body/70">
        Illustration of the trade planning makes — not client data.
      </p>
    </figure>
  );
}
