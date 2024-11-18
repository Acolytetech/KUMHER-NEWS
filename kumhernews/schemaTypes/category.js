import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Category Title",
      type: "string",
      description: "Title of the news category (e.g., Politics, Sports, etc.)",
      validation: (Rule) => Rule.required().min(3).max(50),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      description: "Link to the API endpoint for fetching news articles from this category.",
     
    }),
    defineField({
      name: "slug",
      title: "Category Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true, // Allows for image cropping
      },
      description: "An image representing the category.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Category Description",
      type: "text",
      description: "A short description of the category.",
      validation: (Rule) => Rule.max(200),
    }),
  ],
});
