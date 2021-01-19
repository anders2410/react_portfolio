/* Used to talk with Sanity */
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "jn8ejrao",
  dataset: "production"
});