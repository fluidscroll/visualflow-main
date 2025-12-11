import TwCaoHeader from "./_components/TwCaoHeader";
import TwCaoBentogrid from "./_components/TwCaoBentogrid";
import GallerySection from "./_components/GallerySection";
import TwCaoCta from "./_components/TwCaoCta";
import TwFooter from "@/components/TwFooter";
import CookieBanner from "@/components/CookieBanner";


import fs from 'fs';
import path from 'path';


export default function ContentAddOnsPage() {
    // 1. Get the full path to the public/images directory.
    const imageDirectory = path.join(process.cwd(), '/public/images_2');

    // 2. Read the filenames from the directory.
    const imageFilenames = fs
        .readdirSync(imageDirectory)
        .filter((file) =>
            /\.(jpe?g|png|svg)$/i.test(file)
        );

    // 3. Create the full paths for each image (e.g., /images/image1.jpg).
    const images = imageFilenames.map((file) => `/images_2/${file}`);

    return (
        <div className="flex flex-col items-center min-h-screen bg-neutral-100 text-slate-800">
            <main className="font-nexa-book w-full flex flex-col">
                <TwCaoHeader />
                <TwCaoBentogrid />
                {/* 4. Pass the image paths as a prop to the client component. */}
                <GallerySection 
                    images={images}
                />
                <TwCaoCta />
                <TwFooter />
            </main>
        </div>
    );
}