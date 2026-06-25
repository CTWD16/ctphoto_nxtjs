'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageKitImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  onClick?: (e: React.MouseEvent) => void
  transformation?: {
    width?: number
    height?: number
    quality?: number
    crop?: string
    focus?: string
  }
}

// Helper function to build ImageKit URL with transformations
function buildImageKitUrl(src: string, transformation: any): string {
  if (!src.includes('ik.imagekit.io')) {
    return src
  }

  const params = []
  
  if (transformation.width) params.push(`w-${transformation.width}`)
  if (transformation.height) params.push(`h-${transformation.height}`)
  if (transformation.quality) params.push(`q-${transformation.quality}`)
  if (transformation.crop) params.push(`c-${transformation.crop}`)
  if (transformation.focus) params.push(`fo-${transformation.focus}`)

  if (params.length === 0) return src
  
  return `${src}?tr=${params.join(',')}`
}

export default function ImageKitImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  onClick,
  transformation = {}
}: ImageKitImageProps) {
  const [imageError, setImageError] = useState(false)

  // If it's an ImageKit URL, build transformed URL
  if (src.includes('ik.imagekit.io') && !imageError) {
    const transformedSrc = buildImageKitUrl(src, { ...transformation, width, height })
    
    return (
      <Image
        src={transformedSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onError={() => setImageError(true)}
        onClick={onClick}
      />
    )
  }

  // Fallback to Next.js Image for non-ImageKit URLs or on error
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setImageError(true)}
      onClick={onClick}
    />
  )
}
