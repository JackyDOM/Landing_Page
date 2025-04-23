import { Box, Button, FormControl, FormLabel, Stack, Text, Textarea } from "@chakra-ui/react";
import SectionComponent from "../SectionComponent";
import { contactIconMapping } from "@/utils/iconMapping";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import { useTranslations } from "next-intl";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  message: string;
};

const Contact = () => {
  const t = useTranslations("Contact");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  // const onSubmit: SubmitHandler<FormValues> = async (data) => {
  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log(result.message); // Handle success
  //     } else {
  //       console.error('Form submission failed');
  //     }
  //     reset();
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };
  const onSubmit = (data: FormValues) => {
    const email = "gs_nspc@mef.gov.kh";
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(data.message);

    // Construct the mailto link
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open the mailto link
    window.location.href = mailtoLink;
  };

  const ContactItems = [
    {
      icon: "PiPhoneCallFill",
      content: "+855 10 292 822"
    },
    {
      icon: "IoMailSharp",
      content: "gs_nspc@mef.gov.kh"
    },
    {
      icon: "PiMapPinFill",
      content: t('address')
    }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-bgGraySection pb-10">
    {/* <form action="mailto:gs_nspc@mef.gov.kh" method="post" className="bg-bgGraySection pb-8"> */}
      <SectionComponent title={t("title")} isBorderBottom isPadding>
        <div 
          className="max-w-screen-lg mx-auto grid md:grid-cols-2 mt-10 gap-6 lg:gap-7 md:mb-0"
          data-aos="fade-up" 
          data-aos-delay="0"
        >
          {/* Contact Information Section */}
          <Box className="bg-oldPrimary h-[597px] relative overflow-hidden rounded-xl">
            <Stack className="px-10 pt-10" data-aos="fade-up" data-aos-delay="0">
              <Text 
                className="font-semibold text-2xl text-white" 
                data-aos="fade-up" 
                data-aos-delay="300"
                >
                  {t("head1")}
                </Text>
              <Text 
                className="text-[#C9C9C9] text-lg" 
                data-aos="fade-up" 
                data-aos-delay="300"
              >
                {t("head2")
              }</Text>

              <Box className="grid gap-12 mt-[80px]">
                {ContactItems.map((contact: any, idx: number) => {
                  const IconComponent = contactIconMapping[contact.icon];
                  const delay = 150 + idx * 300;
                  return (
                    <Box 
                      className="flex gap-6 text-white items-start" 
                      key={idx} 
                      data-aos="fade-up"
                      data-aos-delay={delay}
                    >
                      <IconComponent size={24} />
                      <Text className="flex items-center text-lg w-full z-20">{contact.content}</Text>
                    </Box>
                  );
                })}
              </Box>
            </Stack>

            <Box className="grid justify-end absolute right-0 pt-3.5 bottom-0">
              <Image 
                src={"/images/ellipse2.webp"} 
                alt="ellipse2" 
                width={100} 
                height={100} 
                priority
                className="mb-[-48px] hover:scale-10 hover:ease-in-out hover:duration-700 cursor-pointer"
              />
              <Image 
                src={"/images/ellipse1.webp"} 
                alt="ellipse1" 
                width={150} 
                height={153}
                priority
                className="hover:ease-linear hover:duration-700 hover:scale-110 z-10 cursor-pointer"
              />
            </Box>
          </Box>

          {/* Form Section */}
          <div 
            className="p-4 !shadow-[0px_1px_6px_0px_rgba(0,0,0,0.12)] !rounded-xl bg-white"
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            {/* Name Fields */}
            <Box className="grid sm:grid-cols-2 gap-4">
              <CustomInput
                label={t("name")}
                placeholder={`${t("first_name")} *`}
                errorMessage={errors.firstName?.message}
                {...register("firstName", {
                  required: t("first_name_required"),
                })}
              />
              <CustomInput
                placeholder={`${t("last_name")} *`}
                errorMessage={errors.lastName?.message}
                {...register("lastName", {
                  required: t("last_name_required"), 
                })}
              />
            </Box>

            {/* Contact Fields */}
            <Box className="grid sm:grid-cols-2 gap-4 my-4 md:my-8">
              <CustomInput
                label={t("email")}
                placeholder={`${t("email")} *`}
                errorMessage={errors.email?.message}
                {...register("email", {
                  required: t("email_required"),
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: t("email_invalid"),
                  },
                })}
              />
              <CustomInput
                label={t("phone_number")}
                placeholder={`${t("phone_number")} *`}
                errorMessage={errors.phoneNumber?.message}
                {...register("phoneNumber", {
                  required: t("phone_number_required")
                })}
              />
            </Box>

            {/* Message Field */}
            <FormControl isInvalid={!!errors.message}>
              <FormLabel className="!text-oldPrimary !text-lg">{t("message")}</FormLabel>
              <Textarea 
                placeholder={`${t("message_placeholder")} *`}
                className="
                  !placeholder:text-placeholder 
                  !placeholder:font-medium 
                  !placeholder:text-base 
                  !rounded-lg
                "
                {...register("message", {
                  required: t("message_required")
                })}
              />
            </FormControl>

            <Box className="mt-[34px] flex justify-end">
              <Button 
                className="!bg-oldPrimary !text-white !px-8" 
                type="submit"
              >
                {t("submit")} 
              </Button>
            </Box>
          </div>
        </div>
      </SectionComponent>
    </form>
  );
};

export default Contact;
