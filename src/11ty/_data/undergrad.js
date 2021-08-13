const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '2mbfu5es',
  dataset: 'production',
  apiVersion: '2021-08-12',
  useCdn: true,
})

const query = `
  *[_type == 'art' && 'archive' in tags && 'undergrad' in tags]{
    "imgurl": image.public_id +"."+image.format,
    title,  
  }
`

module.exports = client.fetch(query)

