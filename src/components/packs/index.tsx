import {
    Flex,
    Text,
    HStack,
    VStack,
    Image,
    Stack
} from "@chakra-ui/react"
 
const Packs = () => (
    <Flex
        position="relative"
        w="full"
        py="50px"
        bgGradient="linear(to-tr, #03b476, #7437f1)"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
    >
        <HStack
            spacing="0px"
        >
            <Image
                src="/founder_pack.png"
                w="200px"
            />

            <Image
                src="/premium_pack.png"
                w="200px"
            />

            <Image
                src="/starter_pack.png"
                w="200px"
            />
        </HStack>
    </Flex>
)

export default Packs