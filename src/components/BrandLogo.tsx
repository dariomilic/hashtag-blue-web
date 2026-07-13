import Image from "next/image";
import {
  LOGO_ICON_HEIGHT,
  LOGO_ICON_WIDTH,
  logos,
  type LogoVariant,
} from "@/lib/brand";

type BrandLogoProps = {
  variant: LogoVariant;
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({
  variant,
  className = "",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={logos[variant]}
      alt=""
      width={LOGO_ICON_WIDTH}
      height={LOGO_ICON_HEIGHT}
      priority={priority}
      className={`logo-fade-in ${className}`}
    />
  );
}
