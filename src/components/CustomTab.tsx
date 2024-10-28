import { Tab } from "@chakra-ui/react"

const CustomTab = ({ children, delay }: { children: any; delay: number; }) => {
  return (
    <Tab
      _selected={{
        color: 'white',
        bg: "#223976",
        fontSize: '20px',
        fontWeight: 600,
        boxShadow: '0px 0px 30px rgba(126, 130, 153, 0.15)',
      }}
      py={4}
      px={10}
      rounded="xl"
      fontSize="20px"
      fontWeight="semibold"
      bg="#E0E0E0"
      color="#111827"
      boxShadow="0px 0px 30px rgba(126, 130, 153, 0.15)"
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      {children}
    </Tab>
  )
}

export default CustomTab
