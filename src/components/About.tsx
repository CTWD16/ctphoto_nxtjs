import Image from 'next/image'
import { Award, Camera, Heart, Users } from 'lucide-react'
import ImageKitImage from './ImageKitImage'

export default function About() {
  const stats = [
    { icon: Camera, label: 'Photos Captured', value: '10,000+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Heart, label: 'Weddings Shot', value: '100+' },
    { icon: Award, label: 'Years Experience', value: '15+' }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 relative">
              <Image
                src="https://images.unsplash.com/photo-1503437313881-503a91226402?w=600&h=750&fit=crop"
                alt="Charlie Trotter - Professional Photographer"
                width={600}
                height={750}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
              About Charlie Trotter
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg leading-relaxed">
                With over 15 years of professional photography experience, I specialize in capturing 
                life's most precious moments with artistic vision and technical excellence. My passion 
                for photography began as a hobby and evolved into a career dedicated to preserving 
                memories that last a lifetime.
              </p>
              <p className="text-lg leading-relaxed">
                I believe that great photography is about more than just taking pictures—it's about 
                understanding people, telling stories, and creating images that evoke emotion. Whether 
                it's a wedding, corporate event, or personal portrait session, I approach every project 
                with creativity, professionalism, and attention to detail.
              </p>
              <p className="text-lg leading-relaxed">
                My work has been featured in various publications and I've had the privilege of working 
                with wonderful clients from all walks of life. I'm committed to delivering exceptional 
                quality and service that exceeds expectations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 font-serif">
            My Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Artistic Vision</h4>
              <p className="text-gray-600">
                Every photo is a work of art, crafted with creativity and attention to composition, 
                lighting, and emotion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Personal Connection</h4>
              <p className="text-gray-600">
                Building rapport with clients ensures authentic moments and comfortable, natural-looking photos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Excellence</h4>
              <p className="text-gray-600">
                Professional equipment, expert editing, and commitment to delivering the highest quality results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
