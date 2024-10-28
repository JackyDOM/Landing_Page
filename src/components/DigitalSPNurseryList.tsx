import { Box } from "@chakra-ui/react"
import DigitalSPNurseryItem from "@/data/DigitalSPNurseryList.json";
import FAQCard from "./FAQCard";
import { useTranslations } from "next-intl";

const DigitalSPNurseryList = () => {
  const t = useTranslations("Q_and_A.dp_spr_list")
  return (
    <Box className="grid gap-4 mt-7">
      {DigitalSPNurseryItem.map((_, idx: number) => {
        const delay = idx * 200;
        return (
          <FAQCard
            key={idx}
            title={t(`dp_spr${idx + 1}_q`)}
            content={t(`dp_spr${idx + 1}_a`)}
            delay={delay}
          />
        )
      })}
    </Box>
  )
}

export default DigitalSPNurseryList