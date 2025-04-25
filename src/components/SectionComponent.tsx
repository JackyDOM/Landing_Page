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
        className="text-[20px] sm:text-4xl font-semibold text-center leading-[40px] font-khmer-battambang
                  bg-bgGraySection text-header border border-gray-200 rounded-xl px-8 py-4 
                  shadow-md shadow-myShadow2 inline-block"
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