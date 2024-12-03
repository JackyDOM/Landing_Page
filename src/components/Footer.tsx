import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const FooterItems = [
    { menu: t('footer_menu.menu1'), path: "spr" },
    { menu: t('footer_menu.menu2'), path: "portal" },
    { menu: t('footer_menu.menu3'), path: "about-us" },
    { menu: t('footer_menu.menu4'), path: "members" },
    { menu: t('footer_menu.menu5'), path: "faq" },
    { menu: t('footer_menu.menu6'), path: "contact" }
  ];

  return (
    <div 
      className="
        bg-footer-gradient 
        lg:bg-[url('/images/BG.png')] 
        lg:bg-cover 
        lg:bg-right-top 
        relative
        lg:h-[540px]
        mt-10
        !w-full
      "
    >
      <div className="absolute right-0 top-[-45px] hidden lg:flex">
        <Image src={"/images/left-band-2.svg"} alt="right band" width={300} height={100} />
      </div>
      <div className="right-0 absolute top-0 hidden lg:flex">
        <Image src={"/images/left-band1.png"} alt="right band" width={360} height={100} />
      </div>
      <div className="left-0 absolute bottom-[262px] hidden lg:flex">
        <Image src={"/images/right-band3.png"} alt="right band" width={180} height={100} />
      </div>

      {/* content */}
      <Box className="p-5 lg:absolute lg:bottom-[60px] w-full">
        <Box className="grid lg:flex lg:justify-between gap-4 !max-w-screen-2xl !mx-auto">
          <Box 
            className="
              grid 
              lg:flex 
              lg:justify-between 
              sm:gap-x-[20px] 
              lg:gap-x-[70px] 
              xl:gap-x-[200px] 
              2xl:gap-x-[250px] 
              gap-y-4 
              !items-start 
              text-center
            "
          >
            <Image 
              src={"/images/spr.png"} 
              alt="spr" 
              width={260} 
              height={144} 
              unoptimized 
              loading="lazy" 
              quality={95}
              className="z-10"
            />

            <div 
              className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[80px] lg:gap-x-5 gap-y-2.5 z-20">
              {FooterItems.map((footer: any, idx: number) => (
                <ReactScrollLink 
                  to={footer.path}
                  spy={true} 
                  smooth={true}    
                  duration={700} 
                  offset={-98}
                  key={idx} 
                  className="flex gap-2.5 items-baseline cursor-pointer group"
                >
                  <MdArrowForwardIos size={16} className="rounded-xl text-[#7E8299]  group-hover:text-primary"/>
                  <Text className="text-start text-[#7E8299] group-hover:text-primary">
                    {footer.menu}
                  </Text>
                </ReactScrollLink>
              ))}
            </div>
          </Box>

          <Box className="text-[#B5B5C3] z-20">
            <Text>{t("keep_in_touch")}</Text>
            <Link 
              target="_blank" 
              href={'https://www.facebook.com/CAMNSPC/'} 
              className="flex gap-2.5 items-baseline xl:items-center group"
            >
              <Image src={"/images/facebook.webp"} alt="facebook" width={20} height={20}/>  
              <Text className="text-[#7E8299] group-hover:text-primary">
                {t("facebook")}
              </Text>
            </Link>
          </Box>

          {/* Download Section */}
          <Box className="text-[#B5B5C3] z-20">
            <Text>{t("download_drivers")}</Text>
            <Box className="space-y-2">
              <a
                href="/images/digital-spr-nursery-registration-portal.png"
                download="file1.pdf"
                className="flex gap-2.5 items-baseline xl:items-center text-[#7E8299] hover:text-primary"
              >
                {t("webcam_driver")}
              </a>
              <a
                href="/images/digital-spr-nursery-registration-portal.png"
                download="file2.docx"
                className="flex gap-2.5 items-baseline xl:items-center text-[#7E8299] hover:text-primary"
              >
                {t("fingerprint_driver")}
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="border-t border-slate-200 p-5 lg:absolute lg:bottom-0 !w-full">
        <Box className="max-w-screen-2xl mx-auto grid justify-items-center md:flex md:justify-between">
          <Text className="text-center text-base">{t("footer1")}</Text>
          <Text className="text-base text-center">{t("footer2")}</Text>
        </Box>
      </Box>
    </div>
  )
}

export default Footer;
