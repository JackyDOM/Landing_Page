import { Box } from "@chakra-ui/react"
import FAQCard from "./FAQCard";
import SPRDataBaseItems from "@/data/SPRDatabaseList.json"
import { useTranslations } from "next-intl";

const SPRDatabaseList = () => {
  const t = useTranslations("Q_and_A.db_spr_list")
  return (
    <Box className="grid gap-4 mt-7">
      {SPRDataBaseItems.map((_, idx: number) => {
        const delay = idx * 200;
        return (
          <FAQCard
            key={idx}
            title={t(`db_spr${idx + 1}_q`)}
            content={t(`db_spr${idx + 1}_a`)}
            delay={delay}
          />
        )
      })}
    </Box>
  )
}

export default SPRDatabaseList