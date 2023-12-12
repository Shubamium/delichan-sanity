import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: "You can have multiple presets, Set the one you want to use to 'main'",
      type: 'string',
    }),
    defineField({
      name: 'waitlist',
      title: 'Current Waitlist',
      type: 'string',
    }),
		defineField({
      name: 'status',
      title: 'Commission Status: CLOSED | OPEN',
      type: 'boolean',
    }),
	
  ],
})
