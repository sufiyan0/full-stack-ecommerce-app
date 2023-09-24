import { createClient } from "next-sanity";


export const client = createClient({
    apiVersion:process.env.NEXT_PUBLIC_SANITY_VERSION,
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn:false,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
})