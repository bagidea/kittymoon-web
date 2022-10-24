import {
    Flex,
    Text,
    HStack,
    VStack,
    Image
} from "@chakra-ui/react"

const HowToPlay = () => (
    <Flex
        w="full"
        py="50px"
        bgGradient="linear(to-tr, #03b476, #7437f1)"
        alignItems="center"
        justifyContent="center"
    >
        <HStack
            px="10px"
            color="white"
            spacing="50px"
        >
            <VStack
                w="450px"
                padding="20px"
                border="2px solid"
                borderColor="rgba(255, 255, 255, 0.2)"
                spacing="30px"
                alignItems="start"
                _hover={ { boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 30px" } }
                rounded="25px"
            >
                <Text
                    fontSize="28px"
                    fontWeight="800"
                >HOW TO PLAY</Text>

                <Flex
                    w="full"
                    h="4px"
                    bgColor="rgba(255, 255, 255, 0.2)"
                />

                <HStack
                    fontSize="20px"
                    fontWeight="600"
                >
                    <Flex
                        w="20px"
                        h="20px"
                        bgColor="#4dbc15"
                        rounded="full"
                        alignItems="center"
                        justifyContent="center"
                    >1</Flex>

                    <Text>EQUIP NFTs</Text>
                </HStack>

                <Text
                    fontSize="16px"
                    fontWeight="600"
                >Use a hoe for dig an empty space in order to turn it into a space that are suitable for planting.</Text>

                <HStack
                    fontSize="20px"
                    fontWeight="600"
                >
                    <Flex
                        w="20px"
                        h="20px"
                        bgColor="#4dbc15"
                        rounded="full"
                        alignItems="center"
                        justifyContent="center"
                    >2</Flex>

                    <Text>PLANTING YOUR SEED AND WATERING</Text>
                </HStack>

                <Text
                    fontSize="16px"
                    fontWeight="600"
                >You need to use a watering can for watering the seed immediately after the planting is done. Otherwise, the growing period shall not be counted.</Text>

                <HStack
                    fontSize="20px"
                    fontWeight="600"
                >
                    <Flex
                        w="20px"
                        h="20px"
                        bgColor="#4dbc15"
                        rounded="full"
                        alignItems="center"
                        justifyContent="center"
                    >3</Flex>

                    <Text>MINE AND COLLECT</Text>
                </HStack>

                <Text
                    fontSize="16px"
                    fontWeight="600"
                >Use you Axe to harvesting the full-growth plants in order to receive KITTEN Token.</Text>
            </VStack>

            <VStack
                position="relative"
            >
                <Image
                    src="/cover.png"
                    w="450px"
                    rounded="25px"
                />

                <Image
                    src="/cover.jpg"
                    w="450px"
                    rounded="25px"
                />
            </VStack>
        </HStack>
    </Flex>
)

export default HowToPlay