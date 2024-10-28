import { Box } from "@chakra-ui/react";
import FAQCard from "./FAQCard";
import GeneralInfoItemList from "@/data/GeneralInfoItemList.json";
import { useTranslations } from "next-intl";

const GeneralInfoList = () => {
  const t = useTranslations("Q_and_A.general_info_list");

  return (
    <Box className="grid gap-4 mt-7">
      {GeneralInfoItemList.map((_, idx: number) => {
        const delay = idx * 200;
        return (
          <FAQCard
            key={idx}
            title={t(`info${idx + 1}_q`)}
            content={t(`info${idx + 1}_a`)}
            delay={delay}
          />
        )
      })}
    </Box>
  );
}

export default GeneralInfoList;
