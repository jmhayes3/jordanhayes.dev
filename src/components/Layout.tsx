import React from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkBase =
  "text-xs font-medium hover:text-white transition-colors";
const navLinkInactive = "text-slate-300";
const navLinkActive = "text-emerald-400";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-sm font-semibold tracking-wide text-emerald-300">
            Jordan Hayes
          </Link>
          <nav className="flex items-center gap-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                [navLinkBase, isActive ? navLinkActive : navLinkInactive].join(" ")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                [navLinkBase, isActive ? navLinkActive : navLinkInactive].join(" ")
              }
            >
              Services
            </NavLink>
            <a
              href="mailto:admin@jordanhayes.dev"
              className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow hover:bg-emerald-400"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
};
