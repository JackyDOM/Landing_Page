import { Box, List, Text } from "@chakra-ui/react";
import SectionComponent from "../SectionComponent";
import Image from 'next/image';
import HeaderSection from "../HeaderSection";
import ItemList from "../ItemListing";
import { useTranslations } from "next-intl";

export const sectionStyleProps = `{
  justify-items-center
  lg:flex 
  py-10 
  lg:justify-evenly
  items-center
  gap-10
}`;

const SPRComponent = () => {
  const t = useTranslations("SPR");

  return (
    <SectionComponent title={t("title")} isBorderBottom isPadding>
      <Box 
        className={`${sectionStyleProps} pb-0`} 
        data-aos="fade-up" 
        data-aos-delay="0"
      >
        <Image 
          src={"/images/what-is-ssrd.png"} 
          alt={"what is ssrd"}
          width={627}
          height={515}
          loading="lazy"
          unoptimized
          priority={false}
          className="mb-[-100px] w-[520px] xl:w-[627px] h-auto animate-breathe "
          data-aos="fade-up" 
          data-aos-delay="150"
          data-aos-anchor-placement="top-bottom"
        />
        <Box className="mt-12 lg:max-w-[560px]" data-aos="fade-up" data-aos-delay="300">
          <HeaderSection title={t("what_is_spr")} fontSize="text-[20px] sm:text-[26px]" />
          <Text
            className="text-center lg:text-start text-[16px] sm:text-[18px] lg:text-[20px]
             mt-4 sm:mt-5 lg:mt-6 max-w-prose mx-auto lg:mx-0 font-khmer-serif leading-loose sm:text-justify"
          >
            {t("what_is_spr_desc")}
          </Text>
        </Box>
      </Box>

      <Box 
        className={`${sectionStyleProps} flex flex-col-reverse lg:flex-row items-center gap-8`} 
        data-aos="fade-up" 
        data-aos-delay="450"
      >
        {/* Left content - text */}
        <Box className="lg:max-w-[640px] w-full">
          <HeaderSection title={t("advantages_of_spr")} fontSize="text-[24px] sm:text-[26px]" />
          <List spacing={3}>
            {Array.from({ length: 4 }).map((_, idx) => (
              <ItemList key={idx} content={t(`advantages_of_spr_items.item${idx + 1}`)} />
            ))}
          </List>
        </Box>

        {/* Right content - image */}
        <Image 
          src={"/images/benifits-ssrd.png"} 
          alt="social security registration database" 
          width={434} 
          height={534} 
          loading="lazy" 
          unoptimized
          className="pt-10 lg:pt-0 w-[360px] xl:w-[404px] h-auto animate-breathe"
          data-aos="fade-up" 
          data-aos-delay="600"
          data-aos-anchor-placement="top-bottom"
        />
      </Box>
    </SectionComponent>
  );
};

export default SPRComponent;
