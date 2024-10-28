import { ListIcon, ListItem, Text } from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";

const ItemList = ({content}:{content: string;}) => {
  return (
    <ListItem className="flex items-start">
      <ListIcon as={FiCheckCircle} className="!text-secondary mt-1.5" />
      <Text className="leading-8">{content}</Text>
    </ListItem>
  )
}

export default ItemList;