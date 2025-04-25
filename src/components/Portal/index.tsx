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
          className="animate-breathe"
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
          className="mt-10 lg:mt-0 animate-breathe"
          data-aos="fade-up" 
          data-aos-delay="450"
        />
      </Box>

      <Box className="max-w-screen-2xl mx-auto pt-16 container">
        <Heading fontSize={"30px"} textAlign={"center"} fontFamily="Battambang">{t("main_feature")}</Heading>

        <Box className="grid  
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-3 
            xs:grid-cols-2 
            xs:grid-rows-2 
            gap-4 
            xs:gap-20 
            my-10 
            justify-items-center 
            cursor-pointer 
            max-w-7xl 
            mx-auto
            px-4
            mt-10
            "
            >

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