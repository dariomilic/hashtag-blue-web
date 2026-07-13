type BrandWordmarkProps = {
  className?: string;
  onHero?: boolean;
};

export function BrandWordmark({ className = "", onHero = false }: BrandWordmarkProps) {
  const hashtagClass = onHero ? "text-[#F7F6F4]" : "text-[#1C1C1C]";

  return (
    <span
      className={`brand-wordmark text-sm font-medium uppercase leading-none md:text-lg ${className}`}
    >
      <span className={hashtagClass}>HASHTAG</span>{" "}
      <span className="text-[#205B8C]">BLUE</span>
    </span>
  );
}
