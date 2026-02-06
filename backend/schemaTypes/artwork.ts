import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Main artwork image',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string'
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g. 15 × 15 cm'
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number'
    }),
    defineField({
      name: 'month',
      title: 'Month',
      type: 'number'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    })
  ]
})
