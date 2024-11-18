import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import { memo, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

// Dynamically import heavy components
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });
const Inner = dynamic(() => import("../components/Inner"), { ssr: true });

// Lazy load Hover component as it's only needed for gallery items
const Hover = dynamic(() => import("react-3d-hover"), { 
  ssr: false,
  loading: ({ children }) => <div className="transform-gpu">{children}</div>
});

// Memoized room images data
const roomImages = Array.from({ length: 8 }, (_, i) => ({
  src: `/assets/works/room/room${i + 1}.webp`,
  alt: `Room design ${i + 1}`,
  width: 800,
  height: 600
}));

// Memoized Image component for gallery items
const GalleryImage = memo(({ src, alt, inView }) => (
  <div className="relative aspect-video">
    {inView && (
      <Image
        className="rounded transform-gpu"
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={75}
        loading="lazy"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-delay="0"
      />
    )}
  </div>
));

GalleryImage.displayName = 'GalleryImage';

// Memoized gallery item with hover effect
const GalleryItem = memo(({ image, inView }) => (
  <Hover scale={1.03} perspective={1000} speed={500}>
    <GalleryImage {...image} inView={inView} />
  </Hover>
));

GalleryItem.displayName = 'GalleryItem';

const RoomGallery = () => {
  // Hero section intersection observer
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Gallery section intersection observer
  const { ref: galleryRef, inView: galleryInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px'
  });

  // Memoize the hero content
  const heroContent = useMemo(() => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 w-full">
      <div className="mx-4 lg:mx-24 text-center">
        <h2 className="font-omiofont2 text-[16px] lg:text-3xl tracking-widest lg:tracking-[24px] uppercase mb-4">
          Cozy Rooms
        </h2>
        <h3 className="font-omiofont2 tracking-wide mb-2">Blender / 3D Design</h3>
        <h3 className="font-omiofont2 tracking-wide">Personal Work</h3>
      </div>
    </div>
  ), []);

  return (
    <Inner>
      <div className="w-full">
        <Navbar />
        
        {/* Hero Section with lazy loading */}
        <div ref={heroRef} className="relative h-[30vh] lg:h-[100vh]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          {heroInView && (
            <Image
              className="absolute z-1"
              fill
              priority
              quality={90}
              sizes="100vw"
              objectFit="cover"
              src="/assets/works/room/room.webp"
              alt="Room hero image"
            />
          )}
          {heroContent}
        </div>

        {/* Overview Section */}
        <section className="mx-4 lg:mx-24 mt-8">
          <h2 className="text-xl lg:text-3xl font-omiofont1">Overview</h2>
          <p className="font-omiofont3 mt-6 lg:mt-8 text-justify text-slate-500">
            The 3D Isometric Cozy Room project is all about creating a warm and inviting virtual space. 
            The focus is on designing room layouts, furniture, and decor with meticulous attention to detail. 
            Using isometric perspective adds depth and dimension, while lighting and texture enhance the room&apos;s ambiance 
            through warm color palettes and subtle details.
          </p>
        </section>

        {/* Gallery Grid with intersection observer and virtualization */}
        <section 
          ref={galleryRef} 
          className="mx-4 lg:mx-24 mt-8"
        >
          <div className="grid md:grid-cols-2 gap-4 lg:gap-12">
            {galleryInView && roomImages.map((image, index) => (
              <GalleryItem 
                key={image.src} 
                image={image}
                inView={galleryInView}
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-offset="0"
                data-aos-duration="1000"
                data-aos-delay="0"
              />
            ))}
          </div>
        </section>

        {/* Navigation */}
        <nav className="mx-4 lg:mx-24 mt-8 mb-8">
          <div className="flex justify-between">
            <Link 
              href="/typo" 
              className="text-[16px] lg:text-xl hover:underline hover:text-sky-500 font-omiofont3 transform-gpu"
              prefetch={false}
            >
              Previous Work
            </Link>
            <Link 
              href="https://www.behance.net/gallery/142907041/36-Days-of-Typo" 
              className="text-[16px] lg:text-xl hover:underline hover:text-sky-500 font-omiofont3 transform-gpu"
              prefetch={false}
            >
              Next Work
            </Link>
          </div>
        </nav>

        <Footer />
      </div>
    </Inner>
  );
};

// Prevent unnecessary re-renders
export default memo(RoomGallery);