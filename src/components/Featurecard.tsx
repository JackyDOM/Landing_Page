import { Card, Text } from "@chakra-ui/react";
import Image from "next/image";

const FeatureCard = ({image, title, delay}:{image: string; title: string; delay: number;}) => {
  return (
    <Card className="p-4 !shadow-none !grid justify-items-center" data-aos="fade-up" data-aos-delay={delay}>
      <Image 
        src={image} 
        alt="features" 
        width={92} 
        height={92} 
        loading="lazy" 
        unoptimized
      />
      <Text className="!text-[20px] pt-6 pb-2 text-header !font-semibold text-center">{title}</Text>
    </Card>
  )
}

export default FeatureCard;