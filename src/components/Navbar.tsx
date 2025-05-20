import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon, Video } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";

function Navbar() {
  return (
    <nav className="bg-[#0d1117] border-b border-emerald-500 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* LEFT SIDE - LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-lg text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <CodeIcon className="w-6 h-6 text-emerald-400 hover:text-emerald-300 transition-colors" />
          <span className="text-[25px] tracking-tight">
            &lt;<span className="text-cyan-400">codeo-call</span> /&gt;
          </span>
          <Video className="w-6 h-6 text-emerald-400 hover:text-emerald-300 transition-colors" />
        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center gap-3 text-sm">
            <DasboardBtn />
            <ModeToggle />
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navbar;
