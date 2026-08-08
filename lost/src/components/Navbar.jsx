import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function Navbar() {

  const {
    user,
    logout,
  } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        <Link
          to="/"
          className="text-2xl font-black tracking-[0.2em]"
        >
          RECLAIM
        </Link>

        <div className="flex items-center gap-3 sm:gap-7">

          <Link
            to="/"
            className="hidden text-sm font-semibold text-slate-600 hover:text-slate-950 sm:block"
          >
            Home
          </Link>

          <Link
            to="/browse"
            className="text-sm font-semibold text-slate-600 hover:text-slate-950"
          >
            Browse
          </Link>

          {user && user.role === "user" && (

            <Link
              to="/dashboard"
              className="hidden text-sm font-semibold text-slate-600 hover:text-slate-950 sm:block"
            >
              Dashboard
            </Link>

          )}

          {user?.role === "admin" && (

            <Link
              to="/admin"
              className="text-sm font-semibold text-slate-600"
            >
              Admin
            </Link>

          )}

          {!user ? (

            <Link
              to="/login"
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"
            >
              Login
            </Link>

          ) : (

            <button
              onClick={handleLogout}
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white"
            >
              Logout
            </button>

          )}

        </div>

      </div>

    </nav>
  );
}