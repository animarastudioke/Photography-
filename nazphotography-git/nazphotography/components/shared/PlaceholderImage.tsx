import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  label?: string;
  className?: string;
  tone?: "dark" | "gold";
}

/**
 * Stands in for real photography until Cloudinary asset URLs are wired into
 * lib/data/*.ts. Swap for <Image src={cld("portfolio/...")} /> once real
 * shoot images are uploaded to Cloudinary.
 */
export default function PlaceholderImage({ label, className, tone = "dark" }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-end overflow-hidden",
        tone === "dark"
          ? "bg-[linear-gradient(160deg,#1a1a1d_0%,#0a0a0b_60%)]"
          : "bg-[linear-gradient(160deg,#3a2f14_0%,#0a0a0b_65%)]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 18px)",
        }}
      />
      <Camera className="absolute right-4 top-4 h-4 w-4 text-ivory/20" strokeWidth={1.5} />
      {label && (
        <span className="relative z-10 m-3 rounded-sm bg-ink/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-ivory/60 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
