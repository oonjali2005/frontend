import {
  Link,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

import {
  useItems,
} from "../context/ItemContext";

export default function Dashboard() {

  const {
    user,
  } = useAuth();

  const {
    items,
  } = useItems();

  const myItems =
    items.filter(
      (item) =>
        item.user === user?.name
    );

  const matches =
    myItems.filter(
      (item) =>
        item.status === "Match Found"
    );

  const resolved =
    myItems.filter(
      (item) =>
        item.status === "Resolved"
    );

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-14">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="text-sm text-slate-500">
              Welcome back 👋
            </p>

            <h1 className="mt-2 text-4xl font-black sm:text-5xl">
              Hi, {user?.name}
            </h1>

          </div>

          <Link
            to="/report"
            className="w-fit rounded-xl bg-slate-950 px-6 py-4 font-bold text-white"
          >
            + Report Item
          </Link>

        </div>

        {/* CARDS */}

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <Card
            title="My Reports"
            value={myItems.length}
          />

          <Card
            title="Matches"
            value={matches.length}
          />

          <Card
            title="Resolved"
            value={resolved.length}
          />

        </div>

        {/* REPORTS */}

        <section className="mt-12">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-black">
              My Reports
            </h2>

            <Link
              to="/browse"
              className="text-sm font-bold underline"
            >
              Browse all
            </Link>

          </div>

          <div className="mt-6 space-y-4">

            {myItems.length === 0 ? (

              <div className="rounded-2xl bg-white p-12 text-center">

                <div className="text-4xl">
                  📦
                </div>

                <h3 className="mt-4 text-xl font-black">
                  No reports yet
                </h3>

                <p className="mt-2 text-slate-500">
                  You have not submitted any reports yet.
                </p>

                <Link
                  to="/report"
                  className="mt-6 inline-block rounded-xl bg-slate-950 px-6 py-3 font-bold text-white"
                >
                  Create Report
                </Link>

              </div>

            ) : (

              myItems.map(
                (item) => (

                  <div
                    key={item.id}
                    className="flex flex-col justify-between gap-5 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center"
                  >

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="font-black">
                          {item.name}
                        </h3>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">
                          {item.type}
                        </span>

                      </div>

                      <p className="mt-2 text-sm text-slate-500">
                        📍 {item.location}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        📅 {item.date}
                      </p>

                    </div>

                    <span className="w-fit rounded-full bg-slate-100 px-4 py-2 text-xs font-bold">
                      {item.status}
                    </span>

                  </div>

                )
              )

            )}

          </div>

        </section>

      </div>

    </main>
  );
}

function Card({
  title,
  value,
}) {

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-3 text-4xl font-black">
        {value}
      </p>

    </div>
  );
}