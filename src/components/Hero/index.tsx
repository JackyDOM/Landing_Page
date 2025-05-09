import { Box, Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlinePlayCircle } from "react-icons/ai";
import MyModal from "../MyModal";
import ButtonEffect from "../ButtonEffect";
import { Button as ReactScrollButton } from "react-scroll";
import { useTranslations } from "next-intl";

const HeroComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const t = useTranslations("Hero")
  return (
    <div
      className="
        bg-[#f5f9ff]
        xl:bg-transparent
       
        xl:bg-cover 
        xl:bg-top
        relative
        xl:h-[90vh]
       
        
      "
    >
      <Box 
        className="max-w-full-2xl mx-auto relative xl:!bg-[url('/images/Hero-BG.svg')]" 
        padding={"106px 20px 20px 20px"} 
        data-aos="zoom-out" 
        data-aos-offset="0"
      >
        <div className="absolute right-5 top-[150px] xl:hidden">
          <Image 
            src={"/images/dots-hero.png"} 
            alt="dots" 
            width={200} 
            height={154} 
            unoptimized 
            quality={95}
          />
        </div>
        <Box 
          className="grid justify-items-center xl:flex xl:justify-evenly lg:mt-[60px]"
          data-aos="zoom-out"
          data-aos-offset="0"
          data-aos-delay="0"
        >
          <Box 
            className="h-fit pt-[60px] text-center xl:text-start z-20" 
            data-aos="zoom-out" 
            data-aos-delay="0"
            data-aos-offset="0"
          >
            <Text 
              fontWeight="bold" 
              mb={2} 
              className="text-center xl:text-start text-[30px] 
              sm:text-[45px] sm:font-khmer-battambang font-khmer-battambang"
            >
              {t("title")}
            </Text>
            <Text className="xl:max-w-[600px] mt-4 lg:px-14 xl:px-0 text-[17px] 
              sm:text-[18px] text-gray-600 line-clamp-5 font-khmer-battambang">
              {/* {t("content")} */}
              {t("content").split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>))}
            </Text>
            <HStack className="mt-10 !grid sm:!flex justify-center xl:justify-start !gap-8 sm:!gap-4">
            <div className="flex justify-center">
              

              <ReactScrollButton
                to="spr"
                spy={true}
                duration={700}
                smooth={true}
                offset={-98}
                className="
                  !bg-primary 
                  !text-white 
                  hover:!bg-primary/80 
                  !text-lg 
                  px-8 
                  py-2.5 
                  rounded-lg
                  max-w-[200px] 
                  whitespace-nowrap
                  text-center
                  opacity-100
                  font-khmer-battambang
                  flex
                  !flex-row-reverse 
                  justify-center
                  shadow-lg shadow-indigo-500/50
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-[28px] h-[26px] ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
                {t("start-btn")}
              </ReactScrollButton>
            </div>
              {/* <Button
                className="
                 !text-primary 
                  !bg-transparent 
                  !text-lg 
                  hover:!text-primary/60 
                  max-w-[124px] 
                  sm:max-w-full
                  !flex-row-reverse
                "
                leftIcon={
                  <>
                    <ButtonEffect color="#223976" size="60px">
                      <AiOutlinePlayCircle size={24} className="top-[18px] absolute w-full" />
                    </ButtonEffect>
                  </>
                }
                onClick={onOpen}
              >
                {t("video-btn")}
              </Button> */}
            </HStack>
          </Box>

          <div className="mt-10 xl:ml-[-60px] pt-20 xl:pt-8 animate-breathe !z-50 
          relative w-full max-w-[600px] aspect-[670/512]" 
          data-aos="zoom-out" data-aos-delay="150" data-aos-offset="0">
            <Image
              src="/images/hero.png"
              alt="hero"
              fill
              loading="lazy"
              unoptimized
              className="object-contain"
            />
          </div>

        </Box>
      </Box> 

      <MyModal isOpen={isOpen} onClose={onClose}>
        <iframe
          src="https://www.youtube.com/embed/wN3KT1LDaHk?si=Uizxev4CVe2Dwevn&autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: '100%', height: '100%', maxWidth: '1100px', maxHeight: '620px' }}
        />
      </MyModal>

    </div>
  );
};

export default HeroComponent;