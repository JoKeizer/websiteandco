import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import PricingSection from "@/src/components/sections/Prijzen"
import PricingSectionAllInClusive from "@/src/components/sections/Prijzen-all-inclusive"

import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const Pricing = () => {
  return (
    <Layouts contactButton cartButton>
      <PageBanner pageTitle={"Prijzen"} pageDesc={"Kies jouw online succes."} />
      
      <PricingSection hiddenHeading />
      <PricingSectionAllInClusive hiddenHeading />

      <CallToActionSection />

      <PartnersSection paddingTop />

    </Layouts>
  );
};
export default Pricing;