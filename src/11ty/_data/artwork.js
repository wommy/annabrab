const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '2mbfu5es',
  dataset: 'production',
  apiVersion: '2021-08-12',
  useCdn: true,
})

const query = `
  *[_type == 'art' && !('archive' in tags)] | order(_createdAt desc){
    "image": image.public_id +"."+image.format,
    title,
    "year": publishedYear,
    landscape,
    tags,
  }
`

module.exports = client.fetch(query)

