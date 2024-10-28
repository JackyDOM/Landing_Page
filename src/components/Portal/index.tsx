import { Box, Heading, List, Text } from "@chakra-ui/react";
import SectionComponent from "../SectionComponent";
import { sectionStyleProps } from "../SPR";
import Image from "next/image";
import HeaderSection from "../HeaderSection";
import ItemList from "../ItemListing";
import FeatureList from "@/data/FeatureItemList.json";
import { IFeatureProps } from "@/models/featureProps.model";
import FeatureCard from "../Featurecard";
import { useTranslations } from "next-intl";

const PortalComponent = () => {
  const t = useTranslations("Portal");

  return (
    <SectionComponent title={t("title")} isBorderBottom isPadding>
      <Box className={sectionStyleProps}>
        <Image 
          src={"/images/digital-spr-nursery-registration-portal.png"} 
          alt="social security registration database" 
          width={488} 
          height={344} 
          loading="lazy" 
          unoptimized
          data-aos="fade-up" 
          data-aos-delay="0"
        />

        <Box className="mt-12 max-w-[560px]" data-aos="fade-up" data-aos-delay="150">
          <HeaderSection title={t("what_is_portal")} fontSize="text-[24px] sm:text-[26px]"/>
          <Text className="leading-8 indent-12 lg:indent-0 text-center lg:text-start">
            {t("what_isPortal_desc")}
          </Text>
        </Box>
      </Box>

      <Box className={sectionStyleProps}>
        <Box className="lg:max-w-[640px]" data-aos="fade-up" data-aos-delay="300">
          <HeaderSection title={t("advantages_of_portal")} fontSize="text-[24px] sm:text-[26px]" />
          <List spacing={3}>
            {Array.from({ length: 4 }).map((_, idx) => (
              <ItemList key={idx} content={t(`advantages_of_portal_items.item${idx + 1}`)} />
            ))}
          </List>
        </Box>

        <Image 
          src={"/images/benifits-digital-spr-suport-nursery-registration-portal.png"} 
          alt="social security registration database" 
          width={434} 
          height={430} 
          loading="lazy" 
          unoptimized
          className="mt-10 lg:mt-0"
          data-aos="fade-up" 
          data-aos-delay="450"
        />
      </Box>

      <Box className="max-w-screen-2xl mx-auto pt-16 container">
        <Heading fontSize={"30px"} textAlign={"center"}>{t("main_feature")}</Heading>

        <Box className="grid sm:grid-cols-2 lg:grid-cols-3 my-10 gap-7 justify-items-center">
          {FeatureList.map((feature: IFeatureProps, idx: number) => {
            const delay = idx * 200;
            return (
              <FeatureCard 
                key={idx} 
                image={feature.image} 
                title={t(`important_features.feature${idx + 1}`)}
                delay={delay}
              />
            )
          })}
        </Box>
      </Box>
    </SectionComponent>
  )
}

export default PortalComponent;