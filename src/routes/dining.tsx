import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage, ResortSiteFrame } from "@/components/resort-site";
import { editorialMetadata } from "@/lib/resort-data";

export const Route = createFileRoute("/dining")({
  head: () => ({ meta: [
    { title: editorialMetadata.dining.title },
    { name: "description", content: editorialMetadata.dining.description },
    { property: "og:title", content: editorialMetadata.dining.title },
    { property: "og:description", content: editorialMetadata.dining.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ResortSiteFrame><EditorialPage page="dining" /></ResortSiteFrame>,
});