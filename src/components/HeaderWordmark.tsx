type BrandWordmarkProps = {
  className?: string;
};

export function BrandWordmark({ className = "" }: BrandWordmarkProps) {
  return (
    <span
      className={`brand-wordmark text-sm font-medium uppercase leading-none md:text-lg ${className}`}
    >
      <span className="text-[#111111]">HASHTAG</span>{" "}
      <span className="text-[#205B8C]">BLUE</span>
    </span>
  );
}
