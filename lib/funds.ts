/** All figures and text below are fictional data supplied for this design demonstration. */
export type AnnualReturn = {
  year: number;
  fund: number;
  benchmark?: number;
};

export type Fund = {
  slug: string;
  name: string;
  category: string;
  risk: string;
  benchmark: string | null;
  benchmarkLabel: string;
  minimum: string;
  fee: string;
  inception: string;
  /** Trailing 12-month return, in percentage points. */
  return1y: number;
  benchmarkReturn: number | null;
  /** Daily volatility, in percentage points (0.9 means 0.9%). */
  dailyVol: number;
  navEndpoint: number;
  annual: AnnualReturn[];
  blurb: string;
  strategy: string[];
};

export const funds: Fund[] = [
  {
    "slug": "sjh-balanced",
    "name": "SJH Balanced Fund",
    "category": "Multi-Asset",
    "risk": "R3 Moderate",
    "benchmark": "60% S&P 500 / 40% Bloomberg US Aggregate",
    "benchmarkLabel": "60% S&P 500 / 40% Bloomberg US Aggregate",
    "minimum": "US$100,000",
    "fee": "1.15%",
    "inception": "March 2013",
    "return1y": 7.8,
    "benchmarkReturn": 6.9,
    "dailyVol": 0.9,
    "navEndpoint": 1.4826,
    "annual": [
      {
        "year": 2021,
        "fund": 14.8,
        "benchmark": 16.9
      },
      {
        "year": 2022,
        "fund": -6.2,
        "benchmark": -8.4
      },
      {
        "year": 2023,
        "fund": 17.4,
        "benchmark": 15.2
      },
      {
        "year": 2024,
        "fund": 19.6,
        "benchmark": 21.8
      },
      {
        "year": 2025,
        "fund": 8.3,
        "benchmark": 6.9
      }
    ],
    "blurb": "Dynamic multi-asset allocation with moderate risk",
    "strategy": [
      "The SJH Balanced Fund is a multi-asset strategy that seeks long-term capital appreciation with controlled volatility. The portfolio allocates dynamically across US and international equities, investment-grade fixed income and select alternatives within a strategic envelope of 40–75% equity exposure.",
      "We rebalance tactically around the strategic allocation, using valuation signals and our macro framework rather than short-term market noise. Position sizing is governed by risk budget, not return forecast: every holding must earn its place on a risk-adjusted basis.",
      "The fund is suitable for investors seeking a single, all-weather portfolio with moderate risk and a multi-year horizon. It is the firm's flagship strategy and has been continuously managed since inception."
    ]
  },
  {
    "slug": "sjh-core-equity",
    "name": "SJH Core Equity Fund",
    "category": "US Large-Cap Equity",
    "risk": "R4 High",
    "benchmark": "S&P 500 Index",
    "benchmarkLabel": "S&P 500 Index",
    "minimum": "US$25,000",
    "fee": "1.20%",
    "inception": "June 2013",
    "return1y": 9.4,
    "benchmarkReturn": 10.8,
    "dailyVol": 1.6,
    "navEndpoint": 2.3174,
    "annual": [
      {
        "year": 2021,
        "fund": 28.4,
        "benchmark": 26.9
      },
      {
        "year": 2022,
        "fund": -17.9,
        "benchmark": -18.1
      },
      {
        "year": 2023,
        "fund": 26.8,
        "benchmark": 24.3
      },
      {
        "year": 2024,
        "fund": 25.1,
        "benchmark": 25.0
      },
      {
        "year": 2025,
        "fund": 9.8,
        "benchmark": 11.4
      }
    ],
    "blurb": "Long-only US large-cap portfolio built on quality and value",
    "strategy": [
      "The SJH Core Equity Fund is a long-only US large-cap strategy. We invest in high-quality companies with durable competitive advantages, predictable cash flows and management teams that allocate capital sensibly.",
      "Our process is fundamentally driven: we build a broad universe of candidates, rank them on economic moat quality and valuation, and concentrate in our highest-conviction holdings — typically 40 to 60 positions. We are patient, and we accept short-term underperformance when it reflects disciplined positioning.",
      "The fund is benchmarked against the S&P 500 Index, but we do not manage to it. We believe the gap between quality and value in the US large-cap universe rewards investors who can hold their convictions through cycles."
    ]
  },
  {
    "slug": "sjh-us-small-cap",
    "name": "SJH US Small Cap Opportunities Fund",
    "category": "US Small/Mid-Cap Equity",
    "risk": "R4 High",
    "benchmark": "Russell 2000 Index",
    "benchmarkLabel": "Russell 2000 Index",
    "minimum": "US$50,000",
    "fee": "1.35%",
    "inception": "November 2015",
    "return1y": 6.2,
    "benchmarkReturn": 7.9,
    "dailyVol": 1.8,
    "navEndpoint": 1.8642,
    "annual": [
      {
        "year": 2021,
        "fund": 24.6,
        "benchmark": 23.8
      },
      {
        "year": 2022,
        "fund": -21.3,
        "benchmark": -24.6
      },
      {
        "year": 2023,
        "fund": 28.9,
        "benchmark": 27.1
      },
      {
        "year": 2024,
        "fund": 16.2,
        "benchmark": 15.9
      },
      {
        "year": 2025,
        "fund": 7.4,
        "benchmark": 8.6
      }
    ],
    "blurb": "Fundamental and systematic signals in the US small-cap universe",
    "strategy": [
      "The SJH US Small Cap Opportunities Fund targets the US small and mid-cap universe, where we believe information inefficiencies are most persistent. We combine fundamental value screens with proprietary quality and momentum signals to identify companies the market has mispriced.",
      "Positions are sized by conviction and liquidity, with an emphasis on balance sheet strength in smaller issuers. In a higher-for-longer rate environment, the quality of the balance sheet matters more, not less.",
      "The fund is benchmarked against the Russell 2000 Index. We expect to deviate from it in both directions, and we measure success on a risk-adjusted basis over full market cycles."
    ]
  },
  {
    "slug": "sjh-municipal-income",
    "name": "SJH Municipal Income Fund",
    "category": "Fixed Income",
    "risk": "R2 Low-Moderate",
    "benchmark": "Bloomberg US Muni Total Return Index",
    "benchmarkLabel": "Bloomberg US Muni Total Return Index",
    "minimum": "US$25,000",
    "fee": "0.95%",
    "inception": "February 2014",
    "return1y": 3.4,
    "benchmarkReturn": 3.9,
    "dailyVol": 0.35,
    "navEndpoint": 1.1937,
    "annual": [
      {
        "year": 2021,
        "fund": 3.8,
        "benchmark": 4.1
      },
      {
        "year": 2022,
        "fund": -4.6,
        "benchmark": -5.8
      },
      {
        "year": 2023,
        "fund": 7.9,
        "benchmark": 7.4
      },
      {
        "year": 2024,
        "fund": 5.2,
        "benchmark": 4.9
      },
      {
        "year": 2025,
        "fund": 3.1,
        "benchmark": 3.6
      }
    ],
    "blurb": "Investment-grade US municipal bonds with active duration management",
    "strategy": [
      "The SJH Municipal Income Fund invests primarily in investment-grade US municipal bonds, with an emphasis on tax-exempt credit from financially strong issuers. We manage duration actively within a 5–8 year target range and favor states with strong fiscal fundamentals, diversified revenue bases and low pension liabilities.",
      "The fund is designed for US taxpaying investors seeking after-tax yield with limited credit risk. At current spreads, we believe the opportunity in munis is in credit selection rather than duration.",
      "Portfolio turnover is low and trading costs are a minor consideration; the strategy is built to be held, not traded."
    ]
  },
  {
    "slug": "sjh-global-dividend",
    "name": "SJH Global Dividend Fund",
    "category": "Equity Income",
    "risk": "R3 Moderate",
    "benchmark": "MSCI ACWI Index",
    "benchmarkLabel": "MSCI ACWI Index",
    "minimum": "US$25,000",
    "fee": "1.05%",
    "inception": "September 2016",
    "return1y": 7.1,
    "benchmarkReturn": 8.4,
    "dailyVol": 1.3,
    "navEndpoint": 1.5283,
    "annual": [
      {
        "year": 2021,
        "fund": 24.9,
        "benchmark": 23.4
      },
      {
        "year": 2022,
        "fund": -15.8,
        "benchmark": -17.6
      },
      {
        "year": 2023,
        "fund": 22.6,
        "benchmark": 21.9
      },
      {
        "year": 2024,
        "fund": 19.8,
        "benchmark": 20.6
      },
      {
        "year": 2025,
        "fund": 7.9,
        "benchmark": 8.8
      }
    ],
    "blurb": "Global portfolio of established, cash-generative dividend payers",
    "strategy": [
      "The SJH Global Dividend Fund seeks income and capital preservation through a global portfolio of established, cash-generative companies. We screen for dividend sustainability — payout ratios supported by free cash flow, balance sheet strength and business durability — rather than headline yield.",
      "The portfolio spans developed markets with a tilt toward sectors that pay reliable dividends: utilities, consumer staples, financials and select industrials. Headline yield is a lagging indicator; cash flow coverage is the leading one.",
      "Our objective is total return with income as a byproduct. We believe income-oriented investors are better served by quality payers than by the highest yields available, and the data from the past decade supports that view."
    ]
  },
  {
    "slug": "sjh-quant-multi",
    "name": "SJH Quantitative Multi-Strategy Fund",
    "category": "Absolute Return",
    "risk": "R3 Moderate",
    "benchmark": null,
    "benchmarkLabel": "none (risk-based objective)",
    "minimum": "US$1,000,000",
    "fee": "1.50% + 10% performance fee",
    "inception": "April 2018",
    "return1y": 6.8,
    "benchmarkReturn": null,
    "dailyVol": 0.7,
    "navEndpoint": 1.6419,
    "annual": [
      {
        "year": 2021,
        "fund": 9.6
      },
      {
        "year": 2022,
        "fund": 4.8
      },
      {
        "year": 2023,
        "fund": 11.2
      },
      {
        "year": 2024,
        "fund": 7.9
      },
      {
        "year": 2025,
        "fund": 6.4
      }
    ],
    "blurb": "Systematic models targeting uncorrelated, low-volatility returns",
    "strategy": [
      "The SJH Quantitative Multi-Strategy Fund is an absolute-return strategy that combines systematic equity, fixed income and derivatives-based models. Each model targets a distinct return source with a defined risk budget; the portfolio is constructed to deliver uncorrelated, low-volatility returns across market regimes.",
      "The fund has no benchmark and is managed against a risk-based objective. Model weights are adjusted as correlations shift, and the portfolio's maximum drawdown target is a binding constraint rather than an aspiration.",
      "The strategy is suitable for investors seeking a core holding with defined risk characteristics and limited public-market correlation, and who can commit capital for at least three years."
    ]
  },
  {
    "slug": "sjh-asia-credit",
    "name": "SJH Asia Credit Opportunities Fund",
    "category": "Fixed Income",
    "risk": "R3 Moderate",
    "benchmark": "Bloomberg Asia IG Corporate Index",
    "benchmarkLabel": "Bloomberg Asia IG Corporate Index",
    "minimum": "US$250,000",
    "fee": "1.10%",
    "inception": "January 2019",
    "return1y": 4.9,
    "benchmarkReturn": 5.1,
    "dailyVol": 0.6,
    "navEndpoint": 1.3728,
    "annual": [
      {
        "year": 2021,
        "fund": 5.4,
        "benchmark": 5.9
      },
      {
        "year": 2022,
        "fund": -3.9,
        "benchmark": -4.8
      },
      {
        "year": 2023,
        "fund": 6.8,
        "benchmark": 6.1
      },
      {
        "year": 2024,
        "fund": 5.9,
        "benchmark": 5.2
      },
      {
        "year": 2025,
        "fund": 4.7,
        "benchmark": 4.9
      }
    ],
    "blurb": "Investment-grade and selective high-yield credit across Asia",
    "strategy": [
      "The SJH Asia Credit Opportunities Fund invests in investment-grade and selective high-yield corporate credit across Asia, with a focus on issuers where we believe the market underprices credit quality. We emphasize issuer-level analysis, covenants and structural protections.",
      "We manage the portfolio for total return with an eye to after-tax outcomes for US investors. The fund is currently hedged approximately 60% against currency risk, a level we review quarterly.",
      "Flows into Asian credit have been strong and spreads have compressed accordingly. We believe the opportunity has shifted from duration to issuer selection, and our process is built for exactly that environment."
    ]
  },
  {
    "slug": "sjh-real-assets",
    "name": "SJH Real Assets & Infrastructure Fund",
    "category": "Alternatives",
    "risk": "R4 High",
    "benchmark": "MSCI World REIT Index",
    "benchmarkLabel": "MSCI World REIT Index",
    "minimum": "US$500,000",
    "fee": "1.25%",
    "inception": "August 2020",
    "return1y": 8.2,
    "benchmarkReturn": 7.6,
    "dailyVol": 1.4,
    "navEndpoint": 1.5864,
    "annual": [
      {
        "year": 2021,
        "fund": 18.9,
        "benchmark": 17.2
      },
      {
        "year": 2022,
        "fund": -14.2,
        "benchmark": -16.8
      },
      {
        "year": 2023,
        "fund": 16.8,
        "benchmark": 15.9
      },
      {
        "year": 2024,
        "fund": 12.4,
        "benchmark": 11.8
      },
      {
        "year": 2025,
        "fund": 9.6,
        "benchmark": 8.9
      }
    ],
    "blurb": "Listed real estate, infrastructure and inflation-linked assets",
    "strategy": [
      "The SJH Real Assets & Infrastructure Fund invests in listed real estate, infrastructure and commodity-linked assets that provide inflation sensitivity and diversification from traditional financials. We favor assets with contractual cash flows, regulated returns or structural supply constraints.",
      "Listed real assets have undergone a significant repricing over the past eighteen months, and we believe much of the de-rating has been driven by rates rather than fundamentals. These characteristics provide the most predictable path to re-rating as rates normalize.",
      "We see real assets playing an increasingly important role in diversified portfolios, and we expect to continue adding to the strategy's capacity over time."
    ]
  },
  {
    "slug": "sjh-private-credit",
    "name": "SJH Private Credit Fund",
    "category": "Alternatives (Private)",
    "risk": "R4 High",
    "benchmark": null,
    "benchmarkLabel": "none (absolute return)",
    "minimum": "US$1,000,000",
    "fee": "2.00% + 8% performance fee",
    "inception": "May 2021",
    "return1y": 8.6,
    "benchmarkReturn": null,
    "dailyVol": 0.5,
    "navEndpoint": 1.3092,
    "annual": [
      {
        "year": 2022,
        "fund": 6.8
      },
      {
        "year": 2023,
        "fund": 9.4
      },
      {
        "year": 2024,
        "fund": 10.8
      },
      {
        "year": 2025,
        "fund": 9.2
      }
    ],
    "blurb": "Direct lending to North American middle-market companies",
    "strategy": [
      "The SJH Private Credit Fund is a closed-end strategy that provides direct lending and unitranche exposure to middle-market companies in North America. The fund targets double-digit net returns with limited public market correlation.",
      "We remain selective: we pass on more deals than we fund, and the portfolio's weighted average leverage sits below the market median. The most important change in private credit since 2023 has been the professionalization of underwriting standards, and we hold ourselves to that bar.",
      "The fund is suitable for investors with a multi-year horizon who can accept illiquidity. For such investors, we believe private credit remains one of the more attractive risk-adjusted opportunities in the fixed income complex."
    ]
  }
];

export function formatReturn(value: number): string {
  return `${value >= 0 ? "+" : "−"}${Math.abs(value).toFixed(1)}%`;
}

/** Total compounded return for the complete 2023–2025 or 2021–2025 period. */
export function periodReturn(fund: Fund, years: 3 | 5 = 3): number | null {
  const firstYear = 2026 - years;
  const rows = fund.annual.filter((row) => row.year >= firstYear && row.year <= 2025);
  if (rows.length !== years || new Set(rows.map((row) => row.year)).size !== years) {
    return null;
  }
  return (rows.reduce((value, row) => value * (1 + row.fund / 100), 1) - 1) * 100;
}

export type NavPoint = {
  date: string;
  nav: number;
  /** Benchmark rebased to the same initial NAV as the fund; null if absent. */
  benchmark: number | null;
  /** Percentage daily change, calculated from the same series shown in the chart. */
  dailyChange: number;
};

function seedFromText(value: string): number {
  let seed = 2166136261;
  for (let i = 0; i < value.length; i++) {
    seed = Math.imul(seed ^ value.charCodeAt(i), 16777619);
  }
  return seed >>> 0;
}

function randomFromSeed(seed: number): () => number {
  let state = seed;
  return () => {
    state += 0x6d2b79f5;
    let result = Math.imul(state ^ (state >>> 15), state | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

/** A log-return random bridge, with independent noise and exact endpoints. */
function calibratedWalk(
  start: number,
  end: number,
  dailyVol: number,
  observations: number,
  seed: number,
): number[] {
  const random = randomFromSeed(seed);
  const intervals = observations - 1;
  const noise = Array.from({ length: intervals }, () => {
    const u = Math.max(Number.EPSILON, random());
    const v = random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  });
  const mean = noise.reduce((sum, value) => sum + value, 0) / intervals;
  const deviation = Math.sqrt(
    noise.reduce((sum, value) => sum + (value - mean) ** 2, 0) / intervals,
  );
  const sigma = dailyVol / 100;
  const drift = Math.log(end / start) / intervals;
  const path = [start];
  for (let i = 0; i < intervals; i++) {
    const increment = drift + ((noise[i] - mean) / deviation) * sigma;
    path.push(path[i] * Math.exp(increment));
  }
  // Remove accumulated floating-point error from the supplied endpoint.
  path[observations - 1] = end;
  return path;
}

/**
 * Exactly 252 weekday observations ending October 21, 2026. The brief defines
 * trading days as weekdays; no exchange holiday calendar is applied.
 * Series and daily table values share this single deterministic source.
 */
export function generateNav(fund: Fund): NavPoint[] {
  const dates: string[] = [];
  const cursor = new Date("2026-10-21T12:00:00.000Z");
  while (dates.length < 252) {
    const weekday = cursor.getUTCDay();
    if (weekday !== 0 && weekday !== 6) {
      dates.push(cursor.toISOString().slice(0, 10));
    }
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  dates.reverse();
  const start = fund.navEndpoint / (1 + fund.return1y / 100);
  const values = calibratedWalk(
    start,
    fund.navEndpoint,
    fund.dailyVol,
    dates.length,
    seedFromText(`${fund.slug}:fund`),
  );
  const benchmark = fund.benchmarkReturn === null ? null : calibratedWalk(
    start,
    start * (1 + fund.benchmarkReturn / 100),
    fund.dailyVol * 0.95,
    dates.length,
    seedFromText(`${fund.slug}:benchmark`),
  );
  return dates.map((date, index) => ({
    date,
    nav: values[index],
    benchmark: benchmark?.[index] ?? null,
    dailyChange: index === 0 ? 0 : (values[index] / values[index - 1] - 1) * 100,
  }));
}
