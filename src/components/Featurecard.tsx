import { Card, Text } from "@chakra-ui/react";
import Image from "next/image";

const FeatureCard = ({ image, title, delay }: { image: string; title: string; delay: number; }) => {
  return (
    <Card
      className="grid justify-items-center transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100"
      data-aos="fade-up"
      data-aos-delay={delay}
      borderWidth={{ base: 1, xs: 1, sm: 2 }}
      borderColor="gray.300"
      borderStyle="solid"
      p={{ base: 2, xs: 2, sm: 4 }}
      boxShadow="none"
      width={{ base: "150px", xs: "120px", sm: "200px", md: "250px" }}
      height={{ base: "150px", xs: "120px", sm: "200px", md: "250px" }}
      minWidth="100px"
      minHeight="100px"
      marginTop={{ base: "8px", xs: "4px", sm: "12px", md: "16px" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
    >
      <Image
        src={image}
        alt="features"
        width={92}
        height={92}
        className="w-12 h-12 xs:w-10 xs:h-10 sm:w-16 sm:h-16 md:w-23 md:h-23"
        loading="lazy"
        unoptimized
      />
      <Text
        className="text-[16px] xs:text-[12px] sm:text-[18px] text-wrap md:text-[20px] pt-4 pb-1 text-header font-semibold text-center"
      >
        {title}
      </Text>
    </Card>
  );
};
export default FeatureCard;
