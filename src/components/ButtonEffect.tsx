import { keyframes } from "@emotion/react";
import { Box, Flex } from "@chakra-ui/react";

const ButtonEffect = ({
  size, 
  color, 
  
  children,
}:{
  size: string; 
  color: string; 
  children: any;
}) => {
    const ringScaleMin = 0.33
  const ringScaleMax = 0.66
  const pulseRing = keyframes `
  0% {
    transform: scale(${ringScaleMin});
  }
  30% {
    transform: scale(${ringScaleMax});
  }
  40%, 50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h={size}
      w={size}
      overflow="hidden"
      position="relative"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)" 
        w={size}
        h={size}
        borderRadius="50%" 
        _before={{
          content: "''",
          position: 'absolute',
          display: 'block',
          width: '150%', 
          height: '150%',
          boxSizing: 'border-box',
          marginLeft: '-25%', 
          marginTop: '-25%',
          borderRadius: '50%',
          bgColor: color,
          opacity: 0.5, 
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite`, 
        }}>
        {children}
      </Box>
    </Flex>
  );
};

export default ButtonEffect