import {
  HStack,
  Menu,
  MenuItemOption,
  MenuOptionGroup,
  Text,
  MenuButton,
  Button,
  MenuList,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from 'next/image';

const LanguageSwitcher = ({ ...rest }: any) => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const [active, setActive] = useState<string>(locale ?? "km");

  const flag: any = {
    en: "/EngFlag.webp",
    km: "/KhmFlag.webp",
  };

  useEffect(() => {
    setActive(locale ?? "km");
  }, [locale]);

  const handleChange = (e: string | string[]) => {
    if (Array.isArray(e)) {
      setActive(e[0]);
      router.push({ pathname, query }, asPath, { locale: e[0] });
    } else {
      setActive(e);
      router.push({ pathname, query }, asPath, { locale: e });
    }
  };
  return (
    <Box {...rest}>
      <Menu closeOnSelect={true} size={"sm"}>
        <MenuButton
          as={Button}
          bg={"none"}
          size="sm"
          _hover={{ bg: "unset" }}
          _active={{bg:"none"}}
        >
          <Avatar src={flag[active]} size={"sm"} name='languages' />
        </MenuButton>
        <MenuList minWidth="auto" width={"120px"} borderRadius={"12px"} zIndex={4}>
          <MenuOptionGroup
            defaultValue="en"
            type="radio"
            value={active}
            onChange={(e) => handleChange(e)}
          >
            <MenuItemOption
              value="km"
              color={"#464255"}
              fontWeight={400}
              fontSize={"14px"}
              lineHeight={"24px"}
            >
              <MenuOptions src={flag.km} name="KM" width={34} height={23}/>
            </MenuItemOption>

            <MenuItemOption
              value="en"
              color={"#464255"}
              fontWeight={400}
              fontSize={"14px"}
              lineHeight={"24px"}
            >
              <MenuOptions src={flag.en} name="EN" width={34} height={17} />
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

const MenuOptions = ({
  src, 
  name, 
  width, 
  height
}:{
  src: any; 
  name: string; 
  width: number | `${number}` | undefined; 
  height: number | `${number}` | undefined;
}) => {
  return (
    <HStack>
      <Image width={width} height={height} src={src} alt="logo nations" unoptimized loading="lazy" />
      <Text
        color={"#464255"}
        fontWeight={500}
        fontSize={"15px"}
        lineHeight={"23px"}
      >
        {name}
      </Text>
    </HStack>
  )
}
export default LanguageSwitcher;
