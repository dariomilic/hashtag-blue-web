import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

type LegalLayoutProps = {
  children: React.ReactNode;
};

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Header />
      <main className="px-6 py-16 md:px-10 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[860px]">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
