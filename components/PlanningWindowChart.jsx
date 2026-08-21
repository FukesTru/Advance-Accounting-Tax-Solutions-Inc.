/**
 * The planning-window chart in the homepage hero.
 *
 * Deliberately NOT client data. It is a schematic of one true principle: almost
 * every move that lowers a tax bill — entity elections, retirement
 * contributions, the timing of income and equipment purchases — has to happen
 * before the year closes, so the room to act shrinks as the year runs out. The
 * two series are complements of one another, which is the whole point, and the
 * footnote says plainly that it is an illustration.
 *
 * Publishing invented client outcomes ("$164,800 saved") in a hero would be a
 * claim the firm cannot support, so the chart makes an argument instead.
 */

const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

// Room left to act, month by month. Complement = already locked in.
const OPEN = [100, 96, 90, 84, 77, 69, 61, 52, 43, 32, 20, 8];

const VIEW_W = 560;
const VIEW_H = 214;
const PLOT_LEFT = 16;
const PLOT_RIGHT = 544;
const BASELINE = 172;
const PLOT_TOP = 14;
const PLOT_H = BASELINE - PLOT_TOP;

const STEP = (PLOT_RIGHT - PLOT_LEFT) / OPEN.length;
const BAR_W = Math.min(26, STEP - 12);

const centerX = (index) => PLOT_LEFT + STEP * index + STEP / 2;
const valueY = (value) => BASELINE - (value / 100) * PLOT_H;

const locked = OPEN.map((value) => 100 - value);
const linePoints = locked.map((value, index) => [centerX(index), valueY(value)]);
const linePath = linePoints.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
const areaPath = `${linePath} L${centerX(locked.length - 1).toFixed(1)},${BASELINE} L${centerX(0).toFixed(1)},${BASELINE} Z`;

export default function PlanningWindowChart() {
  return (
    <figure className="m-0">
      <figcaption>
        <p className="font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-body/70">
          The planning window · Any tax year
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="font-display text-4xl font-extrabold leading-none text-navy sm:text-5xl">
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
          An illustration, not client data. Bars show the decisions you can still influence,
          starting at their highest in January and falling to almost nothing by December. A gold
          line shows the mirror image: decisions already locked in, rising steadily to nearly all of
          them by year end.
        </desc>

        <defs>
          <linearGradient id="pw-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#17396b" />
            <stop offset="100%" stopColor="#4a6a94" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="pw-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a44b" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#c9a44b" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal guides */}
        {[0, 0.25, 0.5, 0.75, 1].map((fraction) => (
          <line
            key={fraction}
            x1={PLOT_LEFT}
            x2={PLOT_RIGHT}
            y1={BASELINE - fraction * PLOT_H}
            y2={BASELINE - fraction * PLOT_H}
            stroke="#0b2545"
            strokeOpacity={fraction === 0 ? 0.18 : 0.07}
          />
        ))}

        {/* Bars — room left to act */}
        {OPEN.map((value, index) => {
          const height = (value / 100) * PLOT_H;
          return (
            <rect
              key={index}
              x={centerX(index) - BAR_W / 2}
              y={BASELINE - height}
              width={BAR_W}
              height={height}
              rx="5"
              fill="url(#pw-bar)"
            />
          );
        })}

        {/* Already locked in */}
        <path d={areaPath} fill="url(#pw-area)" />
        <path d={linePath} fill="none" stroke="#c9a44b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {linePoints.map(([x, y], index) =>
          index % 3 === 0 || index === linePoints.length - 1 ? (
            <circle key={index} cx={x} cy={y} r="4" fill="#ffffff" stroke="#c9a44b" strokeWidth="2.5" />
          ) : null,
        )}

        {/* Month initials */}
        {MONTHS.map((month, index) => (
          <text
            key={index}
            x={centerX(index)}
            y={VIEW_H - 22}
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill="#4b5563"
            fillOpacity="0.75"
          >
            {month}
          </text>
        ))}

        <text x={PLOT_LEFT} y={VIEW_H - 4} fontSize="11" fill="#4b5563" fillOpacity="0.6">
          Jan
        </text>
        <text x={PLOT_RIGHT} y={VIEW_H - 4} textAnchor="end" fontSize="11" fill="#4b5563" fillOpacity="0.6">
          Dec 31
        </text>
      </svg>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-navy/10 pt-4">
        <span className="flex items-center gap-2 text-xs font-semibold text-slate-body">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-sm bg-navy-600" />
          Decisions you can still influence
        </span>
        <span className="flex items-center gap-2 text-xs font-semibold text-slate-body">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-gold" />
          Decisions already locked in
        </span>
      </div>

      <p className="mt-3 text-[0.7rem] leading-relaxed text-slate-body/70">
        Illustration of how the planning window narrows — not client data.
      </p>
    </figure>
  );
}
