"use client";

import { useAuth } from "@/lib/auth-context";

interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function LockedSection({ title, description, icon }: Props) {
  const { login } = useAuth();

  return (
    <div className="card p-6 text-center mb-4">
      <i className={`ti ${icon} text-3xl text-gray-300 block mb-3`} aria-hidden />
      <p className="text-sm font-medium text-gray-800 mb-1">{title}</p>
      <p className="text-xs text-gray-400 leading-relaxed mb-4 max-w-xs mx-auto">
        {description}
      </p>
      <div className="flex gap-2 justify-center">
        <button onClick={login} className="btn-primary text-xs py-1.5 px-4">
          Sign up free
        </button>
        <button
          onClick={login}
          className="bg-transparent text-gray-400 text-xs border border-black/10
                     rounded-lg px-4 py-1.5 hover:border-black/20 transition-colors cursor-pointer"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
