import { Box, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import SectionComponent from "../SectionComponent";
import CustomTab from "../CustomTab";
import GeneralInfoList from "../GeneralInfoList";
import SPRDatabaseList from "../SPRDatabaseList";
import DigitalSPNurseryList from "../DigitalSPNurseryList";
import { useTranslations } from "next-intl";

const FAQComponent = () => {
  const t = useTranslations("Q_and_A");
  return (
    <Box>
      <SectionComponent title={t("title")} isBorderBottom isPadding>
        <Tabs variant='unstyled' className="max-w-screen-lg mx-auto mt-10">
          <TabList 
            className="!flex !justify-center gap-[20px] md:gap-[38px]" 
            flexDirection={["column","column", "row"]}
          >
            <CustomTab delay={0}>{t("general_info")}</CustomTab>
            <CustomTab delay={100}>{t("db_spr")}</CustomTab>
            <CustomTab delay={200}>{t("digital_platform_spr")}</CustomTab>
          </TabList>

          <TabPanels>
            <TabPanel p={[2, 0]} >
              <GeneralInfoList />
            </TabPanel>
            <TabPanel p={[2, 0]}>
              <SPRDatabaseList />
            </TabPanel>
            <TabPanel p={[2, 0]}>
              <DigitalSPNurseryList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </SectionComponent>
    </Box>
  );
};

export default FAQComponent;
