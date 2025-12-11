import TwLdHeader from "./_components/TwLdHeader";
import TwLdContentSection from "./_components/TwLdContentSection";
import TwLdBentogrid from "./_components/TwLdBentogrid";
import TwLdMidheader from "./_components/TwLdMidheader";
import TwLdContentSection2 from "./_components/TwLdContentSection2";
import PricingSection from "./_components/PricingSection";
import TwLdCta from "./_components/TwLdCta";
import TwFooter from "@/components/TwFooter";
import CookieBanner from "@/components/CookieBanner";


export default function LearningDesignPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-neutral-100 text-slate-800">
            <main className="font-nexa-book w-full flex flex-col">
                <TwLdHeader />
                <TwLdContentSection />
                <TwLdBentogrid />
                <TwLdMidheader />
                <TwLdContentSection2 />
                <PricingSection />
                <TwLdCta />
                <TwFooter />
            </main>
        </div>
    );
}