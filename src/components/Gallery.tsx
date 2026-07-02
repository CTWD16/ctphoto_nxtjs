'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Image } from '@imagekit/next'

const galleryImages = [
  {
    id: 1,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-800,h-600/wedding-accesories.jpg',
    alt: 'Professional portrait photography',
    category: 'weddings'
  },
  {
    id: 2,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-600,h-800/wedding-Dilks-1.jpg',
    alt: 'Wedding ceremony photography',
    category: 'weddings'
  },
  {
    id: 3,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-600,h-800/headshot-1.jpg',
    alt: 'Corporate Headshot photography',
    category: 'portraits'
  },
  {
    id: 4,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-800,h-600/landscape-france-nice.jpg',
    alt: 'Landscape photography',
    category: 'landscapes'
  },
  {
    id: 5,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-800,h-600/product-raybans.jpg',
    alt: 'Corporate product photography - Ray Bans',
    category: 'commercial'
  },
  {
    id: 6,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-600,h-800/portrait-senior.jpg',
    alt: 'Senior portrait session',
    category: 'portraits'
  },
  {
    id: 7,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-800,h-600/wedding-ringshot.jpg',
    alt: 'Professional portrait photography - Rings',
    category: 'weddings'
  },
  {
    id: 8,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-600,h-800/portrait-prom.jpg',
    alt: 'Event photography',
    category: 'events'
  },
  {
    id: 9,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-800,h-600/drone-vabeach.jpg',
    alt: 'Drone photography',
    category: 'drone'
  },
  {
    id: 10,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-800,h-600/portrait-family.jpg',
    alt: 'Professional Portrait photography - family',
    category: 'portraits'
  },
  {
    id: 11,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-600,h-800/headshot-2.jpg',
    alt: 'Corporate Headshot photography',
    category: 'portraits'
  },
  {
    id: 12,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-800,h-600/product-bmwbike.jpg',
    alt: 'Corporate product photography - Motorcycle',
    category: 'commercial'
  },
  {
    id: 13,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-600,h-800/wedding-beach.jpg',
    alt: 'Wedding ceremony photography',
    category: 'weddings'
  },
  {
    id: 14,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-800,h-600/drone-anguilla.jpg',
    alt: 'Drone photography - Anguilla beach',
    category: 'drone'
  },
  {
    id: 15,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-800,h-600/landscape-greece.jpg',
    alt: 'Landscape photography - Greece',
    category: 'landscapes'
  },
  {
    id: 16,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-600,h-800/portrait-prom-3girls.jpg',
    alt: 'Event photography',
    category: 'events'
  },
  {
    id: 17,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-800,h-600/realestate-1.jpg',
    alt: 'Real estate photography',
    category: 'real-estate'
  },
  {
    id: 18,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-600,h-800/portrait-Shirley.jpg',
    alt: 'Professional Portrait photography - Shirley',
    category: 'portraits'
  },
  {
    id: 19,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-600,h-800/bw-concourse.jpg',
    alt: 'Real estate photography',
    category: 'real-estate'
  },
  {
    id: 20,
    src: 'https://ik.imagekit.io/ctp1581/assets/tr:w-1600/event-familyreunion.jpg',
    alt: 'Professional Portrait photography - Family Reunion',
    category: 'events'
  }
]

const categories = ['all', 'portraits', 'weddings', 'events', 'commercial', 'real-estate', 'landscapes', 'drone']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
    if (direction === 'prev') {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
      setSelectedImage(filteredImages[prevIndex].id)
    } else {
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
      setSelectedImage(filteredImages[nextIndex].id)
    }
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my work across different photography specialties. Each image tells a unique story 
            captured with artistic vision and technical excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  transformation={[{ quality: 80, crop: 'at_max' }]}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-2">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={closeLightbox}>
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-full">
              <Image
                src={filteredImages.find(img => img.id === selectedImage)?.src || ''}
                alt={filteredImages.find(img => img.id === selectedImage)?.alt || ''}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                transformation={[
                  { quality: 90 },
                  { overlay: { type: "image", input: "CTP_logo.jpg"}}
                ]}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
