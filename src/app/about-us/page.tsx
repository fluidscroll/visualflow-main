
import TwAboutHeader from "./_components/TwAboutHeader";
import TwFounderProfile from "./_components/TwFounderProfile";
import TwAboutCta from "./_components/TwAboutCta";
import TwAboutTestimonials from "./_components/TwAboutTestimonials";
import TwFooter from "@/components/TwFooter";
import CookieBanner from "@/components/CookieBanner";


export default function AboutUsPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-neutral-100 text-slate-800">
            <main className="font-nexa-book w-full flex flex-col">
                <TwAboutHeader />
                <TwFounderProfile />
                <TwAboutTestimonials />
                <TwAboutCta />
                <TwFooter />
                <CookieBanner /> 
            </main>
        </div>
    );
}