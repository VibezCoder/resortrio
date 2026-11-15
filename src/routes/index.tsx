import { createFileRoute } from "@tanstack/react-router";
import { HomePage, ResortSiteFrame } from "@/components/resort-site";

function IndexPage() {
  return <ResortSiteFrame><HomePage /></ResortSiteFrame>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Resort Rio | Find Your Sussegado in Goa" },
      { name: "description", content: "Riverside days, Goan evenings and room to be entirely here. Discover Resort Rio in Arpora, North Goa." },
      { property: "og:title", content: "Resort Rio | Find Your Sussegado in Goa" },
      { property: "og:description", content: "Riverside days, Goan evenings and room to be entirely here. Discover Resort Rio in Arpora, North Goa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});
