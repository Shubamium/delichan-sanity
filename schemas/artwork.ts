import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artwork',
  title: 'Artwork',
	type: 'object',
	
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
		defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
			options:{
				list: ['tiny','small','medium','large']
			},
			initialValue:'medium'
    }),
  ],
})
