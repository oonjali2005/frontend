import {
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  useItems,
} from "../context/ItemContext";

export default function Browse() {

  const {
    items,
  } = useItems();

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("All");

  const filtered =
    items.filter((item) => {

      const text =
        `${item.name} ${item.location} ${item.category}`
          .toLowerCase();

      const searchMatch =
        text.includes(
          search.toLowerCase()
        );

      const typeMatch =
        filter === "All" ||
        item.type === filter;

      return (
        searchMatch &&
        typeMatch
      );
    });

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-14">

      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold tracking-[0.3em] text-slate-400">
          COMMUNITY
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Browse Items
        </h1>

        <p className="mt-4 text-slate-500">
          Lost and found reports search pannu.
        </p>

        {/* SEARCH */}

        <div className="mt-10 flex flex-col gap-4 md:flex-row">

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search item, category or location..."
            className="flex-1 rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-slate-950"
          />

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="rounded-xl border border-slate-300 bg-white px-5 py-4 outline-none"
          >

            <option value="All">
              All Items
            </option>

            <option value="Lost">
              Lost
            </option>

            <option value="Found">
              Found
            </option>

          </select>

        </div>

        {/* ITEMS */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filtered.map(
            (item) => (

              <div
                key={item.id}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center justify-between">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black ${
                      item.type === "Lost"
                        ? "bg-red-50 text-red-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {item.type}
                  </span>

                  <span className="text-xs font-bold text-slate-400">
                    {item.category}
                  </span>

                </div>

                <h2 className="mt-6 text-xl font-black">
                  {item.name}
                </h2>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 space-y-2 text-sm text-slate-500">

                  <p>
                    📍 {item.location}
                  </p>

                  <p>
                    📅 {item.date}
                  </p>

                </div>

                <Link
                  to={`/item/${item.id}`}
                  className="mt-6 block rounded-xl bg-slate-950 py-3 text-center text-sm font-bold text-white"
                >
                  View Details
                </Link>

              </div>

            )
          )}

        </div>

        {filtered.length === 0 && (

          <div className="mt-10 rounded-2xl bg-white p-14 text-center">

            <p className="text-4xl">
              🔍
            </p>

            <h3 className="mt-4 text-xl font-black">
              No items found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Search keyword change panni try pannu.
            </p>

          </div>

        )}

      </div>

    </main>
  );
}