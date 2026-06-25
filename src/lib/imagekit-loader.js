'use client'

export default function imageKitLoader({ src, width, quality }) {
  // If the image is already from ImageKit, return it with transformation parameters
  if (src.includes('ik.imagekit.io')) {
    const transformationParams = `w-${width},q-${quality || 75}`
    return `${src}?tr=${transformationParams}`
  }
  
  // For external images (like Unsplash), return as-is or proxy through ImageKit
  // You can set up ImageKit URL endpoints to proxy external images
  return src
}
