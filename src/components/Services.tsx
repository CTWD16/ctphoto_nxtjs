import { Camera, Users, Heart, Briefcase, MapPin, Calendar, Video } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Portrait Photography',
    description: 'Professional headshots and personal portraits that capture your unique personality and style.',
    features: ['Professional lighting', 'Retouched images', 'Studio or location', 'Wardrobe consultation']
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Complete wedding coverage from engagement to reception, preserving every precious moment.',
    features: ['Full day coverage', 'Engagement session', 'Online gallery', 'Album design']
  },
  {
    icon: Users,
    title: 'Event Photography',
    description: 'Corporate events, parties, and special occasions captured with professionalism and creativity.',
    features: ['Event coverage', 'Candid moments', 'Fast turnaround', 'Online delivery']
  },
  {
    icon: Briefcase,
    title: 'Commercial Photography',
    description: 'Professional business photography for brands, products, and corporate needs.',
    features: ['Product shots', 'Brand photography', 'Logo design', 'Corporate headshots', 'Marketing materials']
  },
  {
    icon: MapPin,
    title: 'Real Estate Photography',
    description: 'Stunning property photography that showcases homes and commercial spaces at their best.',
    features: ['Interior shots', 'Exterior photography', 'Drone footage', 'Virtual tours', 'Walkthrough videos']
  },
  {
    icon: Calendar,
    title: 'Special Events',
    description: 'Custom photography packages for birthdays, anniversaries, and life celebrations.',
    features: ['Custom packages', 'Themed sessions', 'Backdrop design', 'Print options', 'Gift prints']
  },
  {
    icon: Video,
    title: 'Drone Videography',
    description: 'Aerial video services capturing stunning perspectives from above for events, properties, and promotional content.',
    features: ['4K aerial footage', 'Cinematic editing', 'Property showcases', 'Event coverage']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Photography & Videography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate portraits to grand celebrations, I provide professional photography and videography services 
            tailored to your unique vision and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
