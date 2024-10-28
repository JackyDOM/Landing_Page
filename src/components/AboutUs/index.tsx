import { Box } from "@chakra-ui/react";
import SectionComponent from "../SectionComponent";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("About_us");

  return (
    <div className="bg-bgGraySection relative">
      <div className="absolute left-0">
        <Image 
          src={"/images/BGAboutUs.webp"} 
          alt="bg about us" 
          width={300} 
          height={300} 
          priority
          className="!w-[140px] sm:!w-[170px] md:!w-[200px] lg:!w-[260px] !h-auto" 
        />
      </div>
      <SectionComponent title={t("title")} isPadding isBorderBottom>
        <Box className="flex justify-center mt-10" data-aos="fade-up" data-aos-delay="150">
          <Image 
            src={t("image")} 
            alt="about us" 
            width={790} 
            height={749} 
            loading="lazy" 
            unoptimized
            quality={100}
            className="z-10 max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[790px] h-auto"
          />
        </Box>
      </SectionComponent>
    </div>
  );
};

export default AboutUs;
