import {
  useItems,
} from "../context/ItemContext";

export default function Admin() {

  const {
    items,
    updateStatus,
  } = useItems();

  const total =
    items.length;

  const lost =
    items.filter(
      (item) =>
        item.type === "Lost"
    ).length;

  const found =
    items.filter(
      (item) =>
        item.type === "Found"
    ).length;

  const pending =
    items.filter(
      (item) =>
        item.status === "Pending"
    ).length;

  const resolved =
    items.filter(
      (item) =>
        item.status === "Resolved"
    ).length;

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-14">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="text-xs font-black tracking-[0.3em] text-slate-400">
              ADMIN PANEL
            </p>

            <h1 className="mt-3 text-4xl font-black sm:text-5xl">
              Reclaim Management
            </h1>

            <p className="mt-4 text-slate-500">
              User reports and status management.
            </p>

          </div>

          <div className="w-fit rounded-xl bg-white px-5 py-3 text-sm font-bold shadow-sm">
            👤 Administrator
          </div>

        </div>

        {/* STATISTICS */}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

          <Stat
            title="Total"
            value={total}
          />

          <Stat
            title="Lost"
            value={lost}
          />

          <Stat
            title="Found"
            value={found}
          />

          <Stat
            title="Pending"
            value={pending}
          />

          <Stat
            title="Resolved"
            value={resolved}
          />

        </div>

        {/* TABLE */}

        <section className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm">

          <div className="border-b border-slate-200 p-6">

            <h2 className="text-xl font-black">
              User Reports
            </h2>

            <p className="mt-3 text-slate-500">
             Manage and monitor all user reports from the admin dashboard.
            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead className="bg-slate-50">

                <tr>

                  <th className="px-6 py-4 text-left text-xs font-black text-slate-400">
                    ITEM
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-black text-slate-400">
                    TYPE
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-black text-slate-400">
                    USER
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-black text-slate-400">
                    LOCATION
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-black text-slate-400">
                    DATE
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-black text-slate-400">
                    STATUS
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-black text-slate-400">
                    ACTION
                  </th>

                </tr>

              </thead>

              <tbody>

                {items.map(
                  (item) => (

                    <tr
                      key={item.id}
                      className="border-t border-slate-100 hover:bg-slate-50"
                    >

                      <td className="px-6 py-5">

                        <p className="font-black">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {item.category}
                        </p>

                      </td>

                      <td className="px-6 py-5">

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black ${
                            item.type === "Lost"
                              ? "bg-red-50 text-red-600"
                              : "bg-green-50 text-green-600"
                          }`}
                        >
                          {item.type}
                        </span>

                      </td>

                      <td className="px-6 py-5 text-sm">
                        {item.user}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-500">
                        {item.location}
                      </td>

                      <td className="px-6 py-5 text-sm text-slate-500">
                        {item.date}
                      </td>

                      <td className="px-6 py-5">

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">
                          {item.status}
                        </span>

                      </td>

                      <td className="px-6 py-5">

                        <select
                          value={item.status}
                          onChange={(e) =>
                            updateStatus(
                              item.id,
                              e.target.value
                            )
                          }
                          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold outline-none"
                        >

                          <option value="Pending">
                            Pending
                          </option>

                          <option value="Match Found">
                            Match Found
                          </option>

                          <option value="Resolved">
                            Resolved
                          </option>

                          <option value="Rejected">
                            Rejected
                          </option>

                        </select>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </section>

      </div>

    </main>
  );
}

function Stat({
  title,
  value,
}) {

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <p className="mt-3 text-4xl font-black">
        {value}
      </p>

    </div>
  );
}