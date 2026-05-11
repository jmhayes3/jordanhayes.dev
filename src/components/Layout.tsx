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
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-800 bg-slate-950 py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <Link to="/terms" className="hover:text-emerald-400">
                Terms of Service
              </Link>
              <span className="text-slate-700">|</span>
              <Link to="/privacy" className="hover:text-emerald-400">
                Privacy Policy
              </Link>
            </div>
            <div className="text-xs text-slate-400">
              <a
                href="mailto:admin@jordanhayes.dev"
                className="hover:text-emerald-400"
              >
                admin@jordanhayes.dev
              </a>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Jordan Hayes. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
