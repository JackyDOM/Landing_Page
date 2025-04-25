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
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from 'next/image';

const LanguageSwitcher = ({ ...rest }: any) => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const [active, setActive] = useState<string>(locale ?? "km");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const flag: any = {
    en: "/EngFlag.webp",
    km: "/KhmFlag.webp",
  };

  useEffect(() => {
    setActive(locale ?? "km");
  }, [locale]);

  const handleChange = (e: string | string[]) => {
    const newLocale = Array.isArray(e) ? e[0] : e;
    setActive(newLocale);
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Box {...rest}>
      <Menu closeOnSelect={true} onOpen={onOpen} onClose={onClose}>
      <MenuButton
        as={Button}
        size="sm"
        bg="white"
        border="1px solid #CBD5E0"
        borderRadius="md"
        px={5}
        py={5}
        _hover={{ bg: "gray.50" }}
        _active={{ bg: "gray.100" }}
      >
        <HStack spacing={2}>
          <Avatar src={flag[active]} size="sm" name="languages" />
          {isOpen ? (
            <ChevronUpIcon boxSize={6} color="gray.600" />
          ) : (
            <ChevronDownIcon boxSize={6} color="gray.600" />
          )}
        </HStack>
      </MenuButton>

        <MenuList minWidth="auto" width="140px" borderRadius="md" boxShadow="lg" zIndex={4}>
          <MenuOptionGroup
            defaultValue="en"
            type="radio"
            value={active}
            onChange={handleChange}
          >
            <MenuItemOption
              value="km"
              color={active === "km" ? "white" : "#464255"}
              fontWeight={400}
              fontSize="14px"
              lineHeight="24px"
              bg={active === "km" ? "blue.500" : "transparent"}
              _hover={{ bg: "blue.100" }}
              _active={{ bg: "blue.200" }}
            >
              <MenuOptions src={flag.km} name="KM" width={34} height={23} />
            </MenuItemOption>

            <MenuItemOption
              value="en"
              color={active === "en" ? "white" : "#464255"}
              fontWeight={400}
              fontSize="14px"
              lineHeight="24px"
              bg={active === "en" ? "blue.500" : "transparent"}
              _hover={{ bg: "blue.100" }}
              _active={{ bg: "blue.200" }}
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
}: {
  src: any;
  name: string;
  width: number | `${number}` | undefined;
  height: number | `${number}` | undefined;
}) => {
  return (
    <HStack spacing={3}>
      <Image width={width} height={height} src={src} alt="flag" unoptimized loading="lazy" />
      <Text fontWeight={500} fontSize="15px" lineHeight="23px">
        {name}
      </Text>
    </HStack>
  );
};

export default LanguageSwitcher;
