"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Fund } from "@/lib/funds";

type NavPoint = {
  date: string;
  nav: number;
  benchmark: number | null;
  dailyChange: number;
};

const navy = "#0B1F3A";
const gold = "#B98A2F";
const grid = "#E3E7EE";
const axis = { fill: "#6B7480", fontSize: 11, fontFamily: "inherit" };
const tooltipStyle = {
  border: `1px solid ${grid}`,
  borderRadius: 0,
  boxShadow: "0 4px 20px rgba(11,31,58,0.08)",
  fontSize: 12,
  lineHeight: 1.8,
};

function monthLabel(value: string) {
  return new Date(`${value}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    year: "2-digit",
    timeZone: "UTC",
  });
}

function dateLabel(value: string) {
  return new Date(`${value}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function AumChart() {
  const amounts = [948, 971, 993, 1012, 1046, 1078, 1103, 1094, 1128, 1163, 1197, 1238];
  const labels = ["Nov '25", "Dec '25", "Jan '26", "Feb '26", "Mar '26", "Apr '26", "May '26", "Jun '26", "Jul '26", "Aug '26", "Sep '26", "Oct '26"];
  const data = amounts.map((aum, i) => ({ month: labels[i], aum }));

  return (
    <>
      <div className="chart-canvas aum-chart" role="img" aria-label="Monthly assets under management in US dollars millions, November 2025 through October 2026. Values are available in the data table below.">
        <ResponsiveContainer width="100%" height={300} minWidth={0}>
          <BarChart data={data} margin={{ top: 25, right: 2, bottom: 10, left: 5 }} accessibilityLayer>
            <CartesianGrid stroke={grid} vertical={false} />
            <XAxis dataKey="month" tick={axis} axisLine={false} tickLine={false} interval="preserveStartEnd" minTickGap={14} dy={10} />
            <YAxis tick={axis} axisLine={false} tickLine={false} width={47} tickFormatter={(v: number) => v.toLocaleString("en-US")} domain={[0, 1400]} />
            <Tooltip cursor={{ fill: "rgba(11,31,58,0.035)" }} contentStyle={tooltipStyle} formatter={(value) => [`US$${Number(value).toLocaleString("en-US")}M`, "AUM"]} />
            <Bar dataKey="aum" name="AUM" maxBarSize={40} isAnimationActive={false}>
              {data.map((entry, index) => <Cell key={entry.month} fill={index === 11 ? gold : navy} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <details className="chart-data-details">
        <summary>View chart data</summary>
        <div className="table-wrap">
          <table className="data-table">
            <caption className="sr-only">Assets under management, US$M</caption>
            <thead><tr><th scope="col">Month</th><th scope="col">AUM (US$M)</th></tr></thead>
            <tbody>{data.map((row) => <tr key={row.month}><th scope="row">{row.month}</th><td>{row.aum.toLocaleString("en-US")}</td></tr>)}</tbody>
          </table>
        </div>
      </details>
    </>
  );
}

export function FundNavChart({ fund, data }: { fund: Fund; data: NavPoint[] }) {
  return (
    <>
      <div className="chart-key" aria-label="Chart legend">
        <span><i style={{ background: navy }} /> Fund NAV</span>
        {fund.benchmark && <span><i style={{ background: gold }} /> Benchmark</span>}
      </div>
      <div className="chart-canvas" role="img" aria-label={`${fund.name}, 252 trading days of net asset value ending October 21, 2026. ${fund.benchmark ? `Compared with ${fund.benchmark}.` : "No benchmark."} Current NAV ${fund.navEndpoint.toFixed(4)}.`}>
        <ResponsiveContainer width="100%" height={330} minWidth={0}>
          <LineChart data={data} margin={{ top: 22, right: 12, bottom: 15, left: 4 }} accessibilityLayer>
            <CartesianGrid stroke={grid} vertical={false} />
            <XAxis dataKey="date" tickFormatter={monthLabel} tick={axis} axisLine={false} tickLine={false} minTickGap={55} dy={10} />
            <YAxis tick={axis} tickFormatter={(v: number) => v.toFixed(2)} domain={["auto", "auto"]} axisLine={false} tickLine={false} width={45} />
            <Tooltip contentStyle={tooltipStyle} labelFormatter={(label) => dateLabel(String(label))} formatter={(value, name) => [Number(value).toFixed(4), name === "nav" ? "Fund NAV" : "Benchmark"]} />
            {fund.benchmark && <Line type="linear" dataKey="benchmark" stroke={gold} strokeWidth={1.5} dot={false} activeDot={{ r: 3, strokeWidth: 0 }} isAnimationActive={false} />}
            <Line type="linear" dataKey="nav" stroke={navy} strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 0 }} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export function AnnualReturnsChart({ fund }: { fund: Fund }) {
  return (
    <>
      <div className="chart-key" aria-label="Chart legend">
        <span><i style={{ background: navy }} /> Fund</span>
        {fund.benchmark && <span><i style={{ background: gold }} /> Benchmark</span>}
      </div>
      <div className="chart-canvas" role="img" aria-label={`Annual returns for ${fund.name}. Exact percentages are provided in the annual returns table.`}>
        <ResponsiveContainer width="100%" height={280} minWidth={0}>
          <BarChart data={fund.annual} barGap={4} margin={{ top: 15, right: 4, bottom: 12, left: 0 }} accessibilityLayer>
            <CartesianGrid stroke={grid} vertical={false} />
            <XAxis dataKey="year" tick={axis} axisLine={false} tickLine={false} dy={8} />
            <YAxis tick={axis} tickFormatter={(v: number) => `${v}%`} axisLine={false} tickLine={false} width={43} />
            <ReferenceLine y={0} stroke="#AAB3BE" />
            <Tooltip cursor={{ fill: "rgba(11,31,58,0.035)" }} contentStyle={tooltipStyle} formatter={(value, name) => [`${Number(value) > 0 ? "+" : ""}${Number(value).toFixed(1)}%`, name === "fund" ? "Fund" : "Benchmark"]} />
            <Bar dataKey="fund" name="fund" fill={navy} maxBarSize={31} isAnimationActive={false} />
            {fund.benchmark && <Bar dataKey="benchmark" name="benchmark" fill={gold} maxBarSize={31} isAnimationActive={false} />}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
