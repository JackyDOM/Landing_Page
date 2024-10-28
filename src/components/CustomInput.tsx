import { FormControl, FormLabel, Input, InputProps, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

type CustomInputProps = InputProps & {
  label?: string;
  placeholder: string;
  errorMessage?: string;
};

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, placeholder, errorMessage, ...props }, ref) => (
    <FormControl isInvalid={!!errorMessage}>
      {label ? (
        <FormLabel className="!text-lg !text-oldPrimary">{label}</FormLabel>
      ) : (
        <div className="sm:p-[18px]"></div>
      )}
      <Input
        placeholder={placeholder}
        className="!placeholder:text-placeholder !placeholder:font-medium !placeholder:text-base !rounded-lg"
        ref={ref}
        {...props}
      />
      {errorMessage && (
        <Text color="red.500" fontSize="sm" mt={1}>
          {errorMessage}
        </Text>
      )}
    </FormControl>
  )
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
