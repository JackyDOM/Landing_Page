import { Text } from "@chakra-ui/react";

const HeaderSection = ({ title, fontSize }: { title: string; fontSize: any }) => {
  return (
    <Text fontWeight="semibold" mb={2} className={`text-center lg:text-start ${fontSize}`}>
      {title}
    </Text>
  );
};

export default HeaderSection;
