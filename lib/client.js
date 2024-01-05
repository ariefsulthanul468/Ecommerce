import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'wn0aqg4f',
    dataset: 'production',
    apiVersion: '2024-01-04',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);
console.log("The builder is ", builder)

export const urlFor = (source) => {
    try {
        console.log("The image builder source is ", source);
        return builder.image(source);
    } catch (error) {
        console.error('Error building image URL:', error);
    }
}
