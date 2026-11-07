import data from "../../testimonials.json";

export const socialLinks = data.socialLinks;
export const { imageBasePath, fallbackImage } = data;

export const testimonials = data.testimonials
  .filter(({ name, quote }) => name.trim() && quote.trim())
  .sort((first, second) => Number(second.featured) - Number(first.featured));
