import { Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import SectionComponent from "../SectionComponent";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

// const VideoItems = [
//     {
//       thumbnail: "https://i.ytimg.com/vi/wN3KT1LDaHk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxirBitYQaKSoA44s3iX1brp2vOQ",
//       title: "SPR",
//       link: "https://www.youtube.com/embed/wN3KT1LDaHk?si=Uizxev4CVe2Dwevn&autoplay=1&mute=1",
//     },
//     {
//       thumbnail: "https://i.ytimg.com/vi/wN3KT1LDaHk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxirBitYQaKSoA44s3iX1brp2vOQ",
//       title: "SPR",
//       link: "https://www.youtube.com/embed/wN3KT1LDaHk?si=Uizxev4CVe2Dwevn&autoplay=1&mute=1",
//     },
//     {
//       thumbnail: "https://i.ytimg.com/vi/wN3KT1LDaHk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxirBitYQaKSoA44s3iX1brp2vOQ",
//       title: "SPR",
//       link: "https://www.youtube.com/embed/wN3KT1LDaHk?si=Uizxev4CVe2Dwevn&autoplay=1&mute=1",
//     },
//   ];
const VideoItems = [
  {
    title: "SPR",
    link: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fnarith.chan.52%2Fvideos%2F1289230135466058%2F&show_text=0&width=5600",
  },
  {
    title: "DigitalSP",
    link: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCAMNSPC%2Fvideos%2F225881620336827%2F&show_text=0&width=560",
  },
  {
    title: "SPR",
    link: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCAMNSPC%2Fvideos%2F1248523055334844%2F&show_text=0&width=560",
  },
];


const Videos = () => {
  const t = useTranslations("Videos");
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // const handleThumbnailClick = (videoLink: string) => {
  //   setSelectedVideo(videoLink);
  //   onOpen();
  // };

  return (
    // <Box className="pb-4">
    //   <SectionComponent title={t("title")} isPadding isBorderBottom>
    //     <Box className="mt-5"></Box>
    //     <Box className="flex justify-around items-center flex-wrap gap-4">
    //       {VideoItems.map((video: any, idx: number) => (
    //         <div key={idx} className="flex flex-col items-center w-[300px] text-center cursor-pointer" onClick={() => handleThumbnailClick(video.link)}>
    //           <Image
    //             src={video.thumbnail}
    //             alt={video.title}
    //             width={300}
    //             height={180}
    //             loading="lazy"
    //             unoptimized
    //             className="rounded-lg"
    //           />
    //           <h3 className="text-lg font-medium mt-2">{video.title}</h3>
    //         </div>
    //       ))}
    //     </Box>
    //   </SectionComponent>

    //   {/* Modal for Video Playback */}
    //   <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
    //     <ModalOverlay />
    //     <ModalContent>
    //       <ModalCloseButton />
    //       <ModalBody>
    //         {selectedVideo && (
    //           <Box className="w-full aspect-video">
    //             <iframe
    //               width="100%"
    //               height="100%"
    //               src={selectedVideo}
    //               title="Video Player"
    //               frameBorder="0"
    //               allow="autoplay; encrypted-media; picture-in-picture"
    //               allowFullScreen
    //             ></iframe>
    //           </Box>
    //         )}
    //       </ModalBody>
    //     </ModalContent>
    //   </Modal>
    // </Box>
    <Box className="pb-4">
      <SectionComponent title={t("title")} isPadding isBorderBottom>
        <Box className="mt-5"></Box>
        <Flex justifyContent="center" flexWrap="wrap" gap="12">
          {VideoItems.map((video: any, idx: number) => (
            <Box
            key={idx}
            className="w-full sm:w-[300px] md:w-[340px] lg:w-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white"
            borderWidth="1px"
            borderColor="gray.200"
          >
            <Box className="aspect-video bg-gray-100">
              <iframe
                width="100%"
                height="100%"
                src={video.link}
                title={video.title}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-t-2xl"
              ></iframe>
            </Box>
            <Box p="4" textAlign="center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 font-khmer-battambang">{video.title}</h3>
            </Box>
          </Box>          
          
          ))}
        </Flex>
      </SectionComponent>
    </Box>
  );
};
  
  export default Videos;