import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
  
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            {title:'Latest' , value:'breaking news'},
            {title:'Accident' , value:'accident'},
            { title: 'Technology', value: 'technology' },
            { title: 'Health', value: 'health' },
            { title: 'Sports', value: 'sports' },
            { title: 'Business', value: 'business' },
            { title: 'Entertainment', value: 'entertainment' },

          ],
      
      },
       
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})