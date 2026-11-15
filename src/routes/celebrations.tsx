import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage, ResortSiteFrame } from "@/components/resort-site";
import { editorialMetadata } from "@/lib/resort-data";

export const Route = createFileRoute("/celebrations")({
  head: () => ({ meta: [
    { title: editorialMetadata.celebrations.title },
    { name: "description", content: editorialMetadata.celebrations.description },
    { property: "og:title", content: editorialMetadata.celebrations.title },
    { property: "og:description", content: editorialMetadata.celebrations.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ResortSiteFrame><EditorialPage page="celebrations" /></ResortSiteFrame>,
});