import { useState } from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

export default function Login() {

  const [phone, setPhone] =
    useState("");

  const {
    sendOTP,
    loginAdmin,
  } = useAuth();

  const navigate =
    useNavigate();

  const submit = (e) => {

    e.preventDefault();

    if (phone.length !== 10) {

      alert(
        "Valid 10 digit mobile number enter pannu."
      );

      return;
    }

    sendOTP(phone);

    navigate("/otp");
  };

  const adminLogin = () => {

    loginAdmin();

    navigate("/admin");
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-100 px-6 py-16">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl sm:p-10">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-xl">
          🔐
        </div>

        <p className="mt-7 text-xs font-bold tracking-[0.25em] text-slate-400">
          RECLAIM ACCOUNT
        </p>

        <h1 className="mt-3 text-4xl font-black">
          Login
        </h1>

        <p className="mt-3 text-slate-500">
  No password required. Login securely using your mobile OTP.
</p>

        <form
          onSubmit={submit}
          className="mt-8"
        >

          <label className="text-sm font-bold">
            Mobile Number
          </label>

          <div className="mt-2 flex">

            <span className="flex items-center rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 px-4 font-semibold">
              +91
            </span>

            <input
              type="tel"
              maxLength="10"
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value.replace(
                    /\D/g,
                    ""
                  )
                )
              }
              placeholder="9876543210"
              className="w-full rounded-r-xl border border-slate-300 px-4 py-4 outline-none focus:border-slate-950"
            />

          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-slate-950 py-4 font-bold text-white hover:bg-slate-800"
          >
            Send OTP
          </button>

        </form>

        <div className="my-7 flex items-center gap-3">

          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-xs text-slate-400">
            DEMO
          </span>

          <div className="h-px flex-1 bg-slate-200" />

        </div>

        <button
          onClick={adminLogin}
          className="w-full rounded-xl border border-slate-300 py-4 text-sm font-bold hover:bg-slate-50"
        >
          Demo Admin Login
        </button>

      </div>

    </main>
  );
}