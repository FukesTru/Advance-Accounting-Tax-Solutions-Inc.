/**
 * The planning-window chart in the homepage hero.
 *
 * Deliberately NOT client data. It is a schematic of one true principle: almost
 * every move that lowers a tax bill — entity elections, retirement
 * contributions, the timing of income and equipment purchases — has to happen
 * before the year closes, so the room to act shrinks as the year runs out. The
 * two series are complements of one another, which is the whole point, and the
 * footnote says so plainly.
 *
 * The reference design carried a client tax position and a percentage saved.
 * Those are figures the firm cannot support, so the chart makes the argument
 * instead of claiming a result.
 */

// Room left to act, sampled across the year. Complement = already locked in.
const OPEN = [100, 94, 85, 72, 56, 38, 18];

const VIEW_W = 640;
const VIEW_H = 268;
const PLOT_L = 20;
const PLOT_R = 620;
const BASELINE = 226;
const PLOT_TOP = 26;
const PLOT_H = BASELINE - PLOT_TOP;

const STEP = (PLOT_R - PLOT_L) / OPEN.length;
const BAR_W = STEP * 0.58;

const cx = (i) => PLOT_L + STEP * i + STEP / 2;
const cy = (v) => BASELINE - (v / 100) * PLOT_H;

const locked = OPEN.map((v) => 100 - v);
const pts = locked.map((v, i) => [cx(i), cy(v)]);
const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
const area = `${line} L${cx(locked.length - 1).toFixed(1)},${BASELINE} L${cx(0).toFixed(1)},${BASELINE} Z`;

export default function PlanningWindowChart() {
  return (
    <figure className="m-0">
      <figcaption>
        <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-body/70">
          The planning window · Any tax year
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="font-display text-4xl font-extrabold leading-none text-navy sm:text-[2.9rem]">
            Dec 31
          </p>
          <p className="rounded-full bg-gold-50 px-3 py-1 font-display text-[0.68rem] font-bold uppercase tracking-wide text-gold-700">
            Most options expire
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-body">
          Entity elections, retirement contributions, and the timing of income and purchases nearly
          all have to happen before the year closes. By April, a return only records what was
          already decided.
        </p>
      </figcaption>

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="mt-5 h-auto w-full"
        role="img"
        aria-labelledby="pw-title pw-desc"
        preserveAspectRatio="xMidYMid meet"
      >
        <title id="pw-title">How the tax-planning window narrows across the year</title>
        <desc id="pw-desc">
          An illustration, not client data. Bars show the moves still available to lower your bill,
          highest in January and almost gone by December. A gold line shows the mirror image:
          decisions already locked in, rising steadily across the year.
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

        {/* Moves still on the table */}
        {OPEN.map((v, i) => {
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

        {/* Already locked in */}
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

        {/* Only the two ends are labelled — twelve month initials across a card
            this size were unreadable and made the chart look busier than it is. */}
        <text x={PLOT_L} y={VIEW_H - 8} fontSize="15" fontWeight="600" fill="#4b5563" fillOpacity="0.7">
          JAN
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
          DEC 31
        </text>
      </svg>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-navy/10 pt-4">
        <span className="flex items-center gap-2 text-xs font-semibold text-slate-body">
          <span aria-hidden="true" className="h-3 w-3 rounded bg-navy-600" />
          Moves still on the table
        </span>
        <span className="flex items-center gap-2 text-xs font-semibold text-slate-body">
          <span aria-hidden="true" className="h-3 w-3 rounded bg-gold" />
          Already locked in
        </span>
      </div>

      <p className="mt-3 text-[0.7rem] leading-relaxed text-slate-body/70">
        Illustration of how the planning window narrows — not client data.
      </p>
    </figure>
  );
}
