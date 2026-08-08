import { useState } from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

export default function OTP() {

  const [otp, setOtp] =
    useState("");

  const {
    verifyOTP,
  } = useAuth();

  const navigate =
    useNavigate();

  const submit = (e) => {

    e.preventDefault();

    if (otp.length !== 6) {

      alert("Please Enter 6 digit OTP enter.");

      return;
    }

    const success =
      verifyOTP(otp);

    if (!success) {

      alert(
        "Wrong OTP. Demo OTP = 123456"
      );

      return;
    }

    navigate("/dashboard");
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-100 px-6 py-16">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl sm:p-10">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-2xl">
          🔑
        </div>

        <h1 className="mt-7 text-3xl font-black">
          Verify OTP
        </h1>

        <p className="mt-3 text-slate-500">
          Please Enter the OTP sent to the mobile number
        </p>

        <form
          onSubmit={submit}
          className="mt-8"
        >

          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) =>
              setOtp(
                e.target.value.replace(
                  /\D/g,
                  ""
                )
              )
            }
            placeholder="123456"
            className="w-full rounded-xl border border-slate-300 px-5 py-4 text-center text-2xl font-black tracking-[0.4em] outline-none focus:border-slate-950"
          />

          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-slate-950 py-4 font-bold text-white"
          >
            Verify & Continue
          </button>

        </form>

        <p className="mt-6 text-xs text-slate-400">
          Demo OTP: 123456
        </p>

      </div>

    </main>
  );
}