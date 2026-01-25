import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
})

const builder = imageUrlBuilder(sanity)
export const urlFor = (source: any) => builder.image(source)

export async function fetchArtworks() {
  const query = `*[_type == "artwork"] | order(year desc, month desc) {
    _id,
    title,
    medium,
    dimensions,
    year,
    month,
    description,
    image
  }`
  
  try {
    const artworks = await sanity.fetch(query)
    return artworks || []
  } catch (error) {
    console.error('Error fetching artworks:', error)
    return []
  }
}
