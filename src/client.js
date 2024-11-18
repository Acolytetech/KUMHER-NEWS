// import SanityClient from "@sanity/client"
// export default SanityClient ({
//     projectId:"314mt2ok",
//     dadaset:"production"
// })
import  { createClient } from "@sanity/client";

export default createClient({
  projectId: '314mt2ok', // Replace with your project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true, // Set to false if you need fresh data
});
