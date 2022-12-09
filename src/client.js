import sanityClient from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECTID,
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN
});

const builder = imgUrlBuilder(client);

export const urlFor = source => builder.image(source);
