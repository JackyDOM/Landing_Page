import { Box, Text } from "@chakra-ui/react"

const SectionComponent = ({
  title, 
  children, 
  isBorderBottom, 
  isPadding,
  padding
}:{
  title?: string; 
  children: any; 
  isBorderBottom?: boolean;
  isPadding?: boolean;
  padding?: any;
}) => {
  return (
    <Box 
      className={`max-w-screen-2xl mx-auto  ${isPadding ? "pt-[60px] px-5 pb-5": "p-5"}`} 
      padding={padding}
      data-aos="fade-up" 
    >
      <Box display={'grid'} justifyItems={"center"}>
        <Text 
          className="text-[30px] sm:text-4xl text-header font-semibold text-center leading-[46px]"
        >
          {title}
        </Text>
        {isBorderBottom && 
          <Box className="w-[123px] border-[3px] text-secondary border-secondary rounded-3xl mt-5 text-center"></Box>
        }
      </Box>

      {children}
    </Box>
  )
}

export default SectionComponent;