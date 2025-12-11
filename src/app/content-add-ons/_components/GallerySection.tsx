'use client'

import {  
  ScrollAnimatedSection
} from '@/components/Animations';

import ImageGrid from './ImageGrid';



interface GallerySectionProps {
  images: string[];
}


const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {

    return (
        <section className="bg-slate-100 py-25 sm:pt-18 sm:pb-20 lg:pt-22 lg:pb-25">
            <div className="mx-auto max-w-2xl sm:max-w-7xl">
                <div className='flex max-[550px]:flex-col items-center justify-center mx-auto min-[550px]:gap-5 sm:mb-6 max-w-md sm:max-w-full'>
                    {/* <span className='mb-12 font-bold text-lg text-center'>
                        Click the button below to view a gallery of our images
                    </span> */}
                    <span className='max-[550px]:mb-6 mt-0 mb-12 font-bold text-xl sm:text-2xl text-center'>
                        Scroll down to view our sample images
                    </span>
                    {/* <button 
                        type="button" 
                        onClick={() => setOpen(true)}
                        className="inline-flex items-center gap-4 w-44 h-14 px-4 py-2 bg-blue-600 text-white text-md font-bold rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                        <Images />
                        Open Gallery
                    </button> */}
                </div>
                <ScrollAnimatedSection>
                    <ImageGrid images={images} />
                </ScrollAnimatedSection>
               
            </div>
        </section>
    );
}

export default GallerySection;