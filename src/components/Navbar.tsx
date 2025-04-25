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
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);


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

  useEffect(() => {
    if (pathname === "/") {
      setSelectedMenu(MenuItems[0]?.path); // Set first menu as default
    } else {
      setSelectedMenu(pathname); // Set selected menu based on the current path
    }
  }, [pathname]);

  const handleMenuClick = (path: string) => {
    setSelectedMenu(path);
    onClose();
  };

  const handleMenuClick1 = () => {
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
        border-2
        shadow-2xs
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
            <div className="relative w-[140px] h-[80px] sm:w-[180px] sm:h-[100px] mt-2 ml-1">
              <Image
                src="/images/spr1.png"
                alt="spr"
                fill
                className="object-contain"
                unoptimized
                priority
              />
            </div>
          </Link>

          <div className="xs:hidden lg:flex lg:gap-10 xl:gap-19">
            {MenuItems.map((menu: IMenuList | any, idx: number) => (
              <Link 
                key={idx}
                to={menu.path}
                spy={true}
                smooth={true}
                duration={700}
                delay={0}
                offset={-106}
                className={`cursor-pointer font-medium font-khmer-battambang px-3 py-2 transition-all duration-200
                  ${
                    selectedMenu === menu.path 
                      ? "border-b-2 border-[#4F9CF9] text-[#4F9CF9]" 
                      : "text-gray-800"
                  } 
                  hover:text-[#4F9CF9]
                `}
                onClick={() => handleMenuClick(menu.path)}
                onSetActive={() => setSelectedMenu(menu.path)} // 👈 ADD THIS LINE
              >
                {t(menu.title)}
              </Link>
            ))}
          </div>
          <HStack className="!flex-row-reverse lg:flex mr-1">
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
                  px-5 
                  font-khmer-serif 
                  hover:text-primary 
                  flex 
                  items-center 
                  gap-5 
                  hover:bg-primary/10 
                  py-3
                  border-2
                  border-slate-100
                  rounded-full
                  mt-2
                "
                activeClass="text-[#4F9CF9]"
                onClick={handleMenuClick1}
              >
                <IconComponent size={22}/>
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
        <DrawerHeader className="border-b border-slate-200 !p-5 flex items-start justify-between">
          <div className="relative w-[130px] h-[40px] ml-5 mt-2 mb-5">
            <Image 
              src={"/images/spr1.png"} 
              alt="spr" 
              width={136} 
              height={87}
            />
          </div>
          <IoCloseOutline 
            className="text-[40px] text-blue-800 cursor-pointer mt-3 border-blue-400 border-2 rounded-full" 
            onClick={onClose}/>
        </DrawerHeader>
        <DrawerBody padding={5}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Navbar;
