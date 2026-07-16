import Image from 'next/image'
import { Award, Camera, Heart, Users } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Camera, label: 'Photos Captured', value: '12,000+' },
    { icon: Users, label: 'Happy Clients', value: '350+' },
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
                src="https://ik.imagekit.io/ctp1581/ctp_about_action.png"
                alt="Charlie Trotter - Professional Photographer"
                width={600}
                height={750}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-tl from-primary-300 via-primary-400 to-primary-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
              About Charlie Trotter Photography
            </h2>
            <h4 className="text-xl md:text-2xl font-bold text-primary-500 mb-6 font-serif">
              Every Story Deserves to Be Remembered
            </h4>
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg leading-relaxed">
                Some of life's most meaningful moments happen in an instant—a father seeing his daughter in her wedding dress for the first time, the laughter shared between lifelong friends, the pride of a professional milestone, or the quiet embrace between loved ones that says more than words ever could. Those moments are fleeting, but their memories shouldn't be. That's why I became a photographer. More than 15 years ago, I picked up a camera simply because I loved capturing life as it unfolded. What began as a passion soon became a calling: preserving the moments that people never want to forget.
              </p>

              <p className="text-lg leading-relaxed">
                Photography, to me, is about so much more than creating beautiful images. It's about telling your story in a way that feels honest, emotional, and timeless. Every smile, every tear, every celebration, and every quiet glance has a story worth remembering. When I'm behind the camera, I'm not just searching for perfect lighting or the ideal composition—I'm looking for genuine connection and authentic emotion. Those are the moments that become the photographs you'll treasure for a lifetime.
              </p>

              <p className="text-lg leading-relaxed">
                Whether I'm documenting a wedding, capturing the energy of a corporate event, creating professional portraits, or celebrating life's milestones with families, my approach is always the same. I take the time to get to know you, understand your vision, and create an experience where you can simply be yourself. When you're comfortable, the camera disappears, and your story naturally unfolds. That's where the magic happens.
              </p>

              <p className="text-lg leading-relaxed">
                Over the past 15 years, I've had the privilege of working with incredible people from all walks of life. While I'm grateful to have my work recognized and featured, the greatest compliment I can receive is hearing a client say, "Looking at these photos takes me right back to that moment." Knowing that an image can preserve not only how something looked, but how it felt, is what inspires me to give my very best to every session, every event, and every client.
              </p>

              <p className="text-lg leading-relaxed">
                Years from now, the photographs we create together will become more than images—they'll become part of your family's story, reminders of milestones, celebrations, and moments that deserve to be remembered. It's an honor to be trusted with those memories, and I approach that responsibility with creativity, passion, and an unwavering commitment to excellence. I look forward to telling your story, one unforgettable moment at a time.
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
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Artistic Vision</h4>
              <p className="text-gray-600">
                Every photo is a work of art, crafted with creativity and attention to composition, 
                lighting, and emotion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Personal Connection</h4>
              <p className="text-gray-600">
                Building rapport with clients ensures authentic moments and comfortable, natural-looking photos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500">
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
