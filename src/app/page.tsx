
import TwHero from "@/components/home/TwHero";
import TwLogoCloud from "@/components/home/TwLogoCloud";  
import TwHomeVideo from "@/components/home/TwHomeVideo";
import ServicesSection from "@/components/home/ServicesSection";
import TwTestimonials from "@/components/home/TwTestimonials";
import TwHomeCta from "@/components/home/TwHomeCta";
import TwFooter from "@/components/TwFooter";
import CookieBanner from "@/components/CookieBanner";


export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-neutral-100 text-slate-800">
      <main className="font-nexa-book w-full flex flex-col james">
        <TwHero />
        <TwLogoCloud />
        <TwHomeVideo />
        <ServicesSection />
        <TwTestimonials />
        <TwHomeCta />
        <TwFooter />
        <CookieBanner />       
        </main>
    </div>
  );
}
