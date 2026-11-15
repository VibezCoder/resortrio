import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage, ResortSiteFrame } from "@/components/resort-site";
import { editorialMetadata } from "@/lib/resort-data";

export const Route = createFileRoute("/wellness")({
  head: () => ({ meta: [
    { title: editorialMetadata.wellness.title },
    { name: "description", content: editorialMetadata.wellness.description },
    { property: "og:title", content: editorialMetadata.wellness.title },
    { property: "og:description", content: editorialMetadata.wellness.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ResortSiteFrame><EditorialPage page="wellness" /></ResortSiteFrame>,
});