import { Box } from "@chakra-ui/react"
import SectionComponent from "../SectionComponent";
import Carousel from "../Carousel";
import Image from "next/image";
import MemberItems from "@/data/MemberItemList.json";
import { useTranslations } from "next-intl";

const Members = () => {
  const t = useTranslations("Members");
  return (
    <Box className="pb-4">
      <SectionComponent title={t("title")} isPadding isBorderBottom>
        <Carousel>
          {MemberItems.map((member: any, idx: number) => (
            <div key={idx} className="flex justify-items-center items-center justify-center !w-auto">
              <Image 
                src={member.image} 
                alt="all members" 
                width={130} 
                height={130} 
                loading="lazy" 
                unoptimized
                className="w-[130px] !h-auto"
              />
            </div>
          ))}
        </Carousel>
      </SectionComponent>
    </Box>
  )
}
export default Members;