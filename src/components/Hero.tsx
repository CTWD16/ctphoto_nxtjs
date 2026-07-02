import { ArrowRight, Play } from 'lucide-react'
import { Image } from '@imagekit/next'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://ik.imagekit.io/ctp1581//vecteezy_slow-motion-of-wedding-bride-happy-fun-walking-and-running_1620548.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
          <Image
            src="https://ik.imagekit.io/ctp1581/assets/wedding-beach.jpg"
            alt="Photography background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority={true}
            transformation={[{ quality: 85, crop: 'at_max' }]}
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif animate-fade-in">
          Capturing Life's
          <span className="block text-accent-500">Beautiful Moments</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
          Professional photography and videography services that transform special moments into timeless memories. 
          Quality work with artistic vision and attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a href="#contact" className="btn-primary inline-flex items-center justify-center">
            Book a Session
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="#gallery" className="btn-secondary inline-flex items-center justify-center">
            <Play className="mr-2 w-5 h-5" />
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
