import Image from "next/image";
import PlaceholderImage from "@/components/shared/PlaceholderImage";
import { cn } from "@/lib/utils";

interface PortfolioImageProps {
  src?: string;
  alt: string;
  label?: string;
  tone?: "dark" | "gold";
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Renders a real local/Cloudinary image when `src` is set, otherwise falls
 * back to PlaceholderImage. Always used inside a `relative` (or `absolute
 * inset-0`) sized wrapper — it fills that wrapper via next/image `fill`.
 */
export default function PortfolioImage({
  src,
  alt,
  label,
  tone,
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: PortfolioImageProps) {
  if (!src) {
    return <PlaceholderImage label={label ?? alt} tone={tone} className={className} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}
