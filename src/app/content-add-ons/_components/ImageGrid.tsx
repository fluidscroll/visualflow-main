'use client';

import { useState } from 'react';
import Image from 'next/image';


interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-full min-[450px]:max-w-9/10 min-[525px]:max-w-4/5 min-[825px]:max-w-full min-[1024px]:max-w-9/10 min-[1100px]:max-w-full xl:max-w-9/10 2xl:max-w-full mx-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="cursor-pointer overflow-hidden rounded-lg border border-black"
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            width={800}
                            height={800}
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl max-h-full mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Selected image"
                            width={1200}
                            height={800}
                            className="object-contain"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white text-2xl"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGrid;