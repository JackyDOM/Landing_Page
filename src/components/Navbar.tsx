import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, HStack, useDisclosure } from "@chakra-ui/react";
import LanguageSwitcher from "./LanguageSwitcher";
import { IMenuList } from "@/models/menuProps.model";
import { Link } from "react-scroll";
import MenuItems from "@/data/MenuItems.json";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { menuIconMapping } from "@/utils/iconMapping";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const t = useTranslations("MenuBar");
  const [isScrolled, setIsScrolled] = useState<boolean>(false); 
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (pathname === "/") {
        setIsScrolled(offset > 106);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleMenuClick = () => {
    onClose();
  };

  return (
    <Box 
      className={`
        top-0 
        fixed 
        w-full 
        z-30 
        transition-shadow 
        duration-300 
        ${
          pathname === "/" && !isScrolled ? "shadow-none bg-[#f5f9ff]" : "shadow-md bg-white"
        }
      `}
    >
      <Box className="max-w-screen-2xl mx-auto px-5 py-1.5">
        <HStack justifyContent="space-between">
          <Link 
            to="/" 
            spy={true} 
            smooth={true} 
            duration={700} 
            rel="preload" 
            className="flex gap-2.5 cursor-pointer"
            onSetActive={() => setIsScrolled(false)} 
          >
            <Image 
              src="/images/spr1.png" 
              alt="spr" 
              width={180} 
              height={91} 
              unoptimized 
              priority 
            />
          </Link>

          <div className="xs:hidden lg:flex lg:gap-5 xl:gap-12">
            {MenuItems.map((menu: IMenuList | any, idx: number) => (
              <Link 
                key={idx}
                to={menu.path}
                spy={true}
                smooth={true}
                duration={700}
                delay={0}
                offset={-106}
                className="cursor-pointer font-medium hover:text-primary"
                activeClass="text-[#4F9CF9]"
                onClick={handleMenuClick}
              >
                {t(menu.title)}
              </Link>
            ))}
          </div>
          
          <HStack className="!flex-row-reverse lg:flex">
            <IoMdMenu 
              size={36} 
              className="text-oldPrimary xs:flex lg:hidden cursor-pointer" 
              onClick={onOpen} 
            />
            <LanguageSwitcher />
          </HStack>
        </HStack>
      </Box>
      <DrawerSPR 
        isOpen={isOpen} 
        onClose={onClose} 
        btnRef={btnRef}
      >
        <Box className="grid">
          {MenuItems.map((menu: IMenuList | any, idx: number) => {
            const IconComponent = menuIconMapping[menu.icon];
            return (
              <Link 
                key={idx}
                to={menu.path}
                spy={true}
                smooth={true}
                duration={700}
                delay={0}
                offset={-106}
                className="
                  cursor-pointer 
                  px-4 
                  font-medium 
                  hover:text-primary 
                  flex 
                  items-center 
                  gap-5 
                  hover:bg-primary/10 
                  p-3
                  border-b
                  border-slate-50
                "
                activeClass="text-[#4F9CF9]"
                onClick={handleMenuClick}
              >
                <IconComponent size={24}/>
                {t(menu.title)}
              </Link>
            );
          })}
        </Box>
      </DrawerSPR>
    </Box>
  );
};

const DrawerSPR = ({
  isOpen, 
  onClose, 
  btnRef,
  children,
}: {
  isOpen: boolean; 
  onClose: () => void; 
  btnRef: React.RefObject<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement='top'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerContent>
        <DrawerHeader className="border-b border-slate-100 !p-5 flex items-start justify-between">
          <Image src={"/images/spr1.webp"} alt="spr" width={136} height={87}/>
          <IoCloseOutline className="text-[30px] text-gray-500 cursor-pointer" onClick={onClose}/>
        </DrawerHeader>
        <DrawerBody padding={6}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Navbar;
