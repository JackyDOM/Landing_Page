import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";

const FAQCard = ({ content, title, delay }: { content: string; title: string; delay: number; }) => {
  return (
    <Accordion allowMultiple p={0} data-aos="fade-up" data-aos-delay={delay}>
      <AccordionItem 
        border={0} 
        bgColor={"white"} 
        p={'40px'} 
        borderRadius={"18px"} 
        className="!shadow-[0px_1px_6px_0px_rgba(0,0,0,0.12)]"
      >
        {({ isExpanded }) => (
          <>
            <AccordionButton 
              _expanded={{ color: "#223976"}} 
              _hover={{bg: "none"}} 
              p={0}
              display={"flex"}
              gap={4}
            >
              <Text as='span' flex='1' textAlign='left' fontSize={"20px"}>
                {title}
              </Text>
              <Box
                as={isExpanded ? IoIosArrowUp : IoIosArrowForward}
                fontSize="40px"
                transition="transform 0.3s"
                color="#4A3AFF"
                bgColor={"white"}
                p={"6px"}
                borderRadius={"100%"}
                className="shadow-lg hover:scale-110 hover:duration-300"
              />
            </AccordionButton>
            <AccordionPanel p={4}>
              {content}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}

export default FAQCard;
