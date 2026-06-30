import { useState } from "react";
import { useNavigate } from "react-router";
import { Github, Eye, EyeOff } from "lucide-react";
import logo from "./lodo-dev.jpeg";

export default function AuthScreen() {
  const navigate = useNavigate();

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const inp = [
    "w-full border border-[#D0D7DE] rounded-md px-3 py-[8px] text-[14px]",
    "text-[#1F2328] bg-white outline-none",
    "focus:border-[#05B7D7] focus:ring-2 focus:ring-[#05B7D7]/20",
    "placeholder-[#6E7781] transition-all",
  ].join(" ");

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center px-4"
      style={{
        background: "#F6F8FA",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-6">
        <img
          src={logo}
          alt="DevLink Logo"
          className="h-15 w-15 rounded-full"
        />
        <span className="text-[40px] font-bold text-[#1F2328] tracking-tight">
          DevLink
        </span>
      </div>

      {/* Card */}
      <div className="w-full max-w-[500px] bg-white border border-[#D0D7DE] rounded-md px-8 py-6">
        {/* GitHub */}
        <button className="w-full flex items-center justify-center gap-2.5 border border-[#D0D7DE] rounded-md py-[8px] px-3 text-[14px] font-medium text-[#1F2328] bg-white hover:bg-[#F3F4F6] transition-colors mb-3">
          <Github size={16} />
          Continue with GitHub
        </button>

        {/* Google */}
        <button className="w-full flex items-center justify-center gap-2.5 border border-[#D0D7DE] rounded-md py-[8px] px-3 text-[14px] font-medium text-[#1F2328] bg-white hover:bg-[#F3F4F6] transition-colors mb-5">
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-[#D0D7DE]" />
          <span className="text-[12px] text-[#6E7781]">Or</span>
          <div className="flex-1 h-px bg-[#D0D7DE]" />
        </div>

        {/* Name */}
        {mode === "signup" && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-[13px] font-semibold text-[#1F2328] mb-1">
                First name
              </label>
              <input type="text" className={inp} />
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#1F2328] mb-1">
                Last name
              </label>
              <input type="text" className={inp} />
            </div>
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="block text-[13px] font-semibold text-[#1F2328] mb-1">
            Email
          </label>
          <input type="email" className={inp} />
        </div>

        {/* Password */}
        <div className="mb-1">
          <label className="block text-[13px] font-semibold text-[#1F2328] mb-1">
            Password
          </label>

          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              className={`${inp} pr-9`}
            />

            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6E7781]"
            >
              {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        {mode === "signin" && (
          <div className="flex justify-end mt-1.5 mb-4">
            <a
              href="#"
              className="text-[13px] font-medium hover:underline"
              style={{ color: "#05B7D7" }}
            >
              Forgot password?
            </a>
          </div>
        )}

        {/* Confirm Password */}
        {mode === "signup" && (
          <div className="mt-4 mb-4">
            <label className="block text-[13px] font-semibold text-[#1F2328] mb-1">
              Confirm password
            </label>

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                className={`${inp} pr-9`}
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6E7781]"
              >
                {showConfirm ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>
        )}

        {/* Submit */}
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full py-[9px] mt-2 rounded-md text-[14px] font-semibold text-white transition-all active:scale-[0.98] hover:opacity-90"
          style={{ background: "#05B7D7" }}
        >
          {mode === "signin" ? "Sign In" : "Create account"}
        </button>

        {/* Switch */}
        <p className="text-center text-[13px] text-[#6E7781] mt-4">
          {mode === "signin" ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="font-medium hover:underline"
                style={{ color: "#05B7D7" }}
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("signin")}
                className="font-medium hover:underline"
                style={{ color: "#05B7D7" }}
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-5 mt-6">
        {["Privacy", "Security", "Terms", "Status"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[12px] text-[#6E7781] hover:text-[#05B7D7] hover:underline"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}