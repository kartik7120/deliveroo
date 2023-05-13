import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const SanityClient = createClient({
    projectId: "cdwfoiah",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-03-25",
})

const builder = ImageUrlBuilder(SanityClient);

export const urlFor = (source: any) => builder.image(source);
export default SanityClient;