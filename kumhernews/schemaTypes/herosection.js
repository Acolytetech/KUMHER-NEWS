import { defineType, defineField } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Main headline text for the hero section.",
      validation: (Rule) => Rule.required().min(10).max(80),
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      description: "Short subheading text to display below the headline.",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
    }),
    defineField({
      name: "ctaButton",
      title: "Call-To-Action Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Button Label",
          type: "string",
          description: "Text to display on the button.",
          validation: (Rule) => Rule.required().max(30),
        }),
        defineField({
          name: "link",
          title: "Button Link",
          type: "url",
          description: "URL where the button will redirect.",
         
        }),
      ],
      description: "Details for the button in the hero section.",
    }),
    defineField({
      name: "alignment",
      title: "Text Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      description: "Choose the alignment for the text content.",
      initialValue: "center",
    }),
  ],
});
