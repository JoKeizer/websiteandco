import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import PricingSection from "@/src/components/sections/Prijzen"
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const Pricing = () => {
  return (
    <Layouts contactButton cartButton>
      <PageBanner pageTitle={"Prijzen"} pageDesc={"Kies jouw online succes."} />
      
      <PricingSection hiddenHeading />
      <PricingSection hiddenHeading />

      <CallToActionSection />

      <PartnersSection paddingTop />

    </Layouts>
  );
};
export default Pricing;