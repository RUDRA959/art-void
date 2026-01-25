import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'e26mzpce',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  studio: {
    // name: 'artist-portfolio', // can be anything
  },

  schema: {
    types: schemaTypes,
  },
})
