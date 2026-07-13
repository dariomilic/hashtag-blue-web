type SectionNumberProps = {
  number: string;
  className?: string;
};

export default function SectionNumber({ number, className = "" }: SectionNumberProps) {
  return (
    <span className={`section-number ${className}`} aria-hidden="true">
      {number}
    </span>
  );
}
