import NewsletterHero from "@/components/newsletter/NewsletterHero";
import WhatYouGet from "@/components/newsletter/WhatYouGet";
import WhatYouWontGet from "@/components/newsletter/WhatYouWontGet";
import SampleIssue from "@/components/newsletter/SampleIssue";
import Testimonials from "@/components/newsletter/Testimonials";
import FinalCTA from "@/components/newsletter/FinalCTA";

export const metadata = {
  title: "The OneFoundr Letter — Weekly Tips for Solo Founders",
  description:
    "Join our growing community of solo founders getting one actionable idea every Tuesday to build a better one-person business. No fluff, just results."
};

export default function NewsletterPage() {
  return (
    <>
      <NewsletterHero />
      <WhatYouGet />
      <WhatYouWontGet />
      <SampleIssue />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
