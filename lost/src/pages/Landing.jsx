import { Link } from "react-router-dom";

import Footer from "../components/Footer";

export default function Landing() {

  return (
    <>
      <main>

        {/* HERO */}

        <section className="bg-[#e8e5dc]">

          <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

            <div>

              <p className="text-xs font-bold tracking-[0.3em] text-slate-500">
                LOST & FOUND COMMUNITY
              </p>

              <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Lost something?
                <br />
                Let's bring it
                <br />
                back.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                RECLAIM helps people report lost
                belongings, discover found items and
                reconnect with what matters.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/report"
                  className="rounded-xl bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
                >
                  Report an Item →
                </Link>

                <Link
                  to="/browse"
                  className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-950 transition hover:bg-slate-100"
                >
                  Browse Items
                </Link>

              </div>

            </div>

            {/* MATCH CARD */}

            <div className="rounded-[2rem] bg-slate-950 p-4 shadow-2xl">

              <div className="rounded-[1.5rem] bg-white p-7 sm:p-9">

                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold">
                    POSSIBLE MATCH
                  </span>

                  <span className="text-lg font-black text-green-600">
                    92%
                  </span>

                </div>

                <div className="mt-9">

                  <p className="text-xs font-bold tracking-widest text-slate-400">
                    LOST ITEM
                  </p>

                  <h2 className="mt-3 text-2xl font-black">
                    Samsung Galaxy S23
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Black phone · Gandhipuram
                  </p>

                </div>

                <div className="my-8 border-t border-dashed border-slate-300" />

                <div>

                  <p className="text-xs font-bold tracking-widest text-slate-400">
                    FOUND ITEM
                  </p>

                  <h2 className="mt-3 text-2xl font-black">
                    Samsung Galaxy S23
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Black phone · Gandhipuram
                  </p>

                </div>

                <button className="mt-8 w-full rounded-xl bg-slate-950 py-4 font-bold text-white">
                  View Match
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURES */}

        <section className="bg-white px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <p className="text-xs font-bold tracking-[0.3em] text-slate-400">
              HOW IT WORKS
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-black sm:text-5xl">
              Simple process. Real community impact.
            </h2>

            <div className="mt-16 grid gap-8 md:grid-cols-3">

              <Feature
                number="01"
                title="Report"
                description="Lost or found item details submit pannu."
              />

              <Feature
                number="02"
                title="Discover"
                description="Other people's reports search panni possible matches find pannu."
              />

              <Feature
                number="03"
                title="Reclaim"
                description="Claim request send panni item-ai safely recover pannu."
              />

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="bg-slate-950 px-6 py-20 text-white">

          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">

            <Stat value="248+" label="Reports" />

            <Stat value="116+" label="Found Items" />

            <Stat value="47+" label="Matches" />

            <Stat value="31+" label="Reclaimed" />

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

function Feature({
  number,
  title,
  description,
}) {

  return (
    <div className="border-t border-slate-200 pt-7">

      <span className="text-sm font-black text-slate-400">
        {number}
      </span>

      <h3 className="mt-6 text-2xl font-black">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-500">
        {description}
      </p>

    </div>
  );
}

function Stat({
  value,
  label,
}) {

  return (
    <div>

      <p className="text-4xl font-black">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-400">
        {label}
      </p>

    </div>
  );
}