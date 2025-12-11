
import TwVpHeader from "./_components/TwVpHeader";
import TwVpContentSection from "./_components/TwVpContentSection";
import TwVpVideo from "./_components/TwVpVideo";
import TwVpVideo2 from "./_components/TwVpVideo2";
import TwVpCta from "./_components/TwVpCta";  
import TwFooter from "@/components/TwFooter";
import CookieBanner from "@/components/CookieBanner";


export default function VideoProductionPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-sky-950 text-slate-800">
            <main className="font-nexa-book w-full flex flex-col">
                <TwVpHeader />
                <TwVpContentSection />
                <TwVpVideo />
                
                    <TwVpVideo2 />
                
                <TwVpCta />
                <TwFooter />
            </main>
        </div>
    );
}