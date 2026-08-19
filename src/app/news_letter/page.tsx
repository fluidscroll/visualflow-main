// import TwLdHeader from "./_components/TwLdHeader";
import TwLdContentSection from "./_components/TwLdEmailnewsletter";
// import TwLdCta from "./_components/TwLdCta";
import TwFooter from "@/components/TwFooter";
import CookieBanner from "@/components/CookieBanner";


export default function news_letter() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-neutral-100 text-slate-800">
            <main className="font-nexa-book w-full flex flex-col">
                {/* <TwLdHeader/> */}
                <TwLdContentSection />
                {/* <TwLdCta/> */}
                <TwFooter />
                
            </main>
        </div>
    );
}