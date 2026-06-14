import { cn } from "@/lib/utils";

export interface MarqueeImage {
  src: string;
  alt?: string;
}

/**
 * Bandeau d'images défilant en boucle (animation CSS horizontale).
 * Aucun parallax : translation linéaire indépendante du scroll.
 */
export function MarqueeRow({
  images,
  direction = "left",
  className,
  imgClassName,
}: {
  images: MarqueeImage[];
  direction?: "left" | "right";
  className?: string;
  imgClassName?: string;
}) {
  const loop = [...images, ...images];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-4 animate-marquee-x",
          direction === "right" && "[animation-direction:reverse]",
        )}
      >
        {loop.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={img.src}
            alt={img.alt ?? ""}
            loading="lazy"
            className={cn(
              "h-40 w-auto shrink-0 rounded-xl object-cover md:h-56",
              imgClassName,
            )}
          />
        ))}
      </div>
    </div>
  );
}
