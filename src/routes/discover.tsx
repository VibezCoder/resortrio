import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage, ResortSiteFrame } from "@/components/resort-site";
import { editorialMetadata } from "@/lib/resort-data";

export const Route = createFileRoute("/discover")({
  head: () => ({ meta: [
    { title: editorialMetadata.discover.title },
    { name: "description", content: editorialMetadata.discover.description },
    { property: "og:title", content: editorialMetadata.discover.title },
    { property: "og:description", content: editorialMetadata.discover.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ResortSiteFrame><EditorialPage page="discover" /></ResortSiteFrame>,
});