import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

import {
  useItems,
} from "../context/ItemContext";

export default function ReportItem() {

  const {
    user,
  } = useAuth();

  const {
    addItem,
  } = useItems();

  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      type: "Lost",
      category: "Phone",
      name: "",
      description: "",
      location: "",
      date: "",
    });

  const change = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const submit = (e) => {

    e.preventDefault();

    addItem({
      ...form,
      user: user.name,
    });

    alert(
      "Your report has been submitted!"
    );

    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-14">

      <div className="mx-auto max-w-3xl">

        <div>

          <p className="text-xs font-bold tracking-[0.3em] text-slate-400">
            REPORT
          </p>

          <h1 className="mt-3 text-5xl font-black">
            Report an Item
          </h1>

          <p className="mt-4 text-slate-500">
             Provide the details of the lost or found item.
          </p>

        </div>

        <form
          onSubmit={submit}
          className="mt-10 rounded-3xl bg-white p-7 shadow-sm sm:p-10"
        >

          <div className="grid gap-6 sm:grid-cols-2">

            <Field label="Report Type">

              <select
                name="type"
                value={form.type}
                onChange={change}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 outline-none focus:border-slate-950"
              >

                <option value="Lost">
                  Lost
                </option>

                <option value="Found">
                  Found
                </option>

              </select>

            </Field>

            <Field label="Category">

              <select
                name="category"
                value={form.category}
                onChange={change}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 outline-none focus:border-slate-950"
              >

                <option>Phone</option>
                <option>Wallet</option>
                <option>ID Card</option>
                <option>Bag</option>
                <option>Keys</option>
                <option>Pet</option>
                <option>Documents</option>
                <option>Other</option>

              </select>

            </Field>

          </div>

          <Field label="Item Name">

            <input
              required
              name="name"
              value={form.name}
              onChange={change}
              placeholder="Example: Black iPhone 14"
              className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-slate-950"
            />

          </Field>

          <Field label="Description">

            <textarea
              required
              name="description"
              value={form.description}
              onChange={change}
              rows="5"
              placeholder="Color, model, special identification marks..."
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-slate-950"
            />

          </Field>

          <div className="grid gap-6 sm:grid-cols-2">

            <Field label="Location">

              <input
                required
                name="location"
                value={form.location}
                onChange={change}
                placeholder="Gandhipuram"
                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-slate-950"
              />

            </Field>

            <Field label="Date">

              <input
                required
                type="date"
                name="date"
                value={form.date}
                onChange={change}
                className="w-full rounded-xl border border-slate-300 px-4 py-4 outline-none focus:border-slate-950"
              />

            </Field>

          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-slate-950 py-4 font-bold text-white transition hover:bg-slate-800"
          >
            Submit Report →
          </button>

        </form>

      </div>

    </main>
  );
}

function Field({
  label,
  children,
}) {

  return (
    <div className="mt-6">

      <label className="mb-2 block text-sm font-bold">
        {label}
      </label>

      {children}

    </div>
  );
}