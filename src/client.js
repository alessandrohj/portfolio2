import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "72m01q5b",
    dataset: "production",
    apiVersion: '2022-03-06',
    useCdn: false
})