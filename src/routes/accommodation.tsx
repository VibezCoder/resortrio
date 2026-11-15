import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage, ResortSiteFrame } from "@/components/resort-site";
import { editorialMetadata } from "@/lib/resort-data";

export const Route = createFileRoute("/accommodation")({
  head: () => ({ meta: [
    { title: editorialMetadata.accommodation.title },
    { name: "description", content: editorialMetadata.accommodation.description },
    { property: "og:title", content: editorialMetadata.accommodation.title },
    { property: "og:description", content: editorialMetadata.accommodation.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ResortSiteFrame><EditorialPage page="accommodation" /></ResortSiteFrame>,
});