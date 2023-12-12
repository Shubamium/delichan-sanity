import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'panel',
  title: 'Panel',
  type: 'document',
  fields: [
		defineField({
			name:'title',
			title:'Title',
			type:'string'
		}),
		defineField({
      name: 'art',
      title: 'Artwork',
      type: 'artwork',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'art.image',
    },
  },
})
