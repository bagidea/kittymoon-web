import {
    Flex,
    Text,
    HStack,
    VStack,
    Image,
    Button,
    Spacer
} from "@chakra-ui/react"

const HowToPlay = () => (
    <Flex
        w="full"
        py="50px"
        bgGradient="linear(to-tr, #03b476, #7437f1)"
        alignItems="center"
        justifyContent="center"
    >
        <VStack
            px="10px"
            color="white"
            spacing="50px"
        >
            <HStack
                spacing="100px"
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
                    spacing="20px"
                >
                    <Image
                        position="absolute"
                        top="-110px"
                        src="/icon.png"
                        w="100px"
                        rounded="25px"
                    />

                    <Image
                        position="absolute"
                        top="-80px"
                        left="0px"
                        src="/icon.png"
                        w="50px"
                        rounded="25px"
                    />

                    <Image
                        position="absolute"
                        top="-50px"
                        right="0px"
                        src="/icon.png"
                        w="50px"
                        rounded="25px"
                    />

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

            <HStack
                w="1000px"
                pr="100px"
                color="white"
            >
                <VStack
                    w="600px"
                    alignItems="start"
                    spacing="20px"
                >
                    <Text
                        fontSize="28px"
                        fontWeight="800"
                    >$KITTEN</Text>

                    <Text
                        fontSize="16px"
                        fontWeight="600"
                    >This is our proudest govermence token use to buy a new tools seeds or even upgrade your tools!</Text>

                    <Text
                        fontSize="16px"
                        fontWeight="600"
                    >Especially, $KITTEN have a Burn and Return mechanism so when you refill your Energy it's will be burnned forever.</Text>

                    <Text
                        fontSize="16px"
                        fontWeight="600"
                    >Total Supply: 5,000,000,000 KITTEN with a Burn and Return Mechanism</Text>

                    <HStack>
                        <Button>Buy Tools</Button>
                        <Button>Buy Seed</Button>
                        <Button>Upgraded</Button>
                    </HStack>

                    <Button>With The Burn And Return Mechanism!</Button>
                </VStack>

                <Spacer />

                <Image
                    src="/icon.png"
                    w="200px"
                />
            </HStack>
        </VStack>
    </Flex>
)

export default HowToPlay