import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(120)
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: Rule => Rule.required().min(2000).max(2100)
    }),
    defineField({
      name: 'month',
      title: 'Month',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(12)
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    })
  ]
})
