import {
  Link,
  useParams,
} from "react-router-dom";

import {
  useItems,
} from "../context/ItemContext";

export default function ItemDetails() {

  const {
    id,
  } = useParams();

  const {
    items,
  } = useItems();

  const item =
    items.find(
      (item) =>
        item.id === Number(id)
    );

  if (!item) {

    return (
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">

        <div className="text-center">

          <p className="text-5xl">
            🔍
          </p>

          <h1 className="mt-5 text-4xl font-black">
            Item Not Found
          </h1>

          <Link
            to="/browse"
            className="mt-6 inline-block rounded-xl bg-slate-950 px-6 py-3 font-bold text-white"
          >
            Back to Browse
          </Link>

        </div>

      </main>
    );
  }

  const claim = () => {

    alert(
      "Claim request sent successfully!"
    );
  };

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-14">

      <div className="mx-auto max-w-4xl">

        <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">

          <div className="flex flex-col justify-between gap-5 sm:flex-row">

            <div>

              <span
                className={`rounded-full px-4 py-2 text-xs font-black ${
                  item.type === "Lost"
                    ? "bg-red-50 text-red-600"
                    : "bg-green-50 text-green-600"
                }`}
              >
                {item.type}
              </span>

              <h1 className="mt-6 text-4xl font-black sm:text-5xl">
                {item.name}
              </h1>

            </div>

            <span className="h-fit rounded-full bg-slate-100 px-4 py-2 text-xs font-bold">
              {item.status}
            </span>

          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">

            <div>

              <p className="text-xs font-black tracking-widest text-slate-400">
                DESCRIPTION
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                {item.description}
              </p>

            </div>

            <div className="space-y-6">

              <Info
                title="Category"
                value={item.category}
              />

              <Info
                title="Location"
                value={item.location}
              />

              <Info
                title="Date"
                value={item.date}
              />

              <Info
                title="Reported By"
                value={item.user}
              />

            </div>

          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">

            <button
              onClick={claim}
              className="w-full rounded-xl bg-slate-950 py-4 font-bold text-white sm:w-auto sm:px-10"
            >
              Request Claim
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

function Info({
  title,
  value,
}) {

  return (
    <div>

      <p className="text-xs font-black tracking-widest text-slate-400">
        {title}
      </p>

      <p className="mt-2 font-bold text-slate-800">
        {value}
      </p>

    </div>
  );
}