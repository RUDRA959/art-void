export async function fetchAllBlogSlugs() {
  const query = `*[_type == "blog"]{ _id }`;
  try {
    const slugs = await sanity.fetch(query);
    return slugs.map((b: any) => b._id);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
}
export async function fetchBlogs() {
  const query = `*[_type == "blog"] | order(year desc, month desc) {
    _id,
    title,
    year,
    month,
    image,
    "slug": _id,
    body
  }`;
  try {
    const blogs = await sanity.fetch(query);
    return blogs || [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function fetchBlogBySlug(slug: string) {
  const query = `*[_type == "blog" && _id == $slug][0] {
    _id,
    title,
    year,
    month,
    image,
    body
  }`;
  try {
    const blog = await sanity.fetch(query, { slug });
    return blog;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null;
  }
}
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
