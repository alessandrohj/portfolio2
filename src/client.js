import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "rtr3qdh9",
    dataset: "production",
    apiVersion: '2021-06-18',
    useCdn: true
})