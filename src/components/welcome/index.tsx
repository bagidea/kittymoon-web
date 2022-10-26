import {
    Flex,
    Text,
    HStack,
    VStack,
    Stack,
    Button,
    Image,
    Spacer
} from "@chakra-ui/react"

import Link from "next/link"

const Welcome = () => (
    <Flex
        w="full"
        h={ { base: "auto", lg: "600px" } }
        pt={ { base: "60px", lg: "80px" } }
        bgImage="/banner.png"
        bgSize="cover"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
    >
        <Stack
            direction={ { base: "column-reverse", lg: "row" } }
            w={ { base: "full", lg: "1280px" } }
            maxW={ { base: "full", lg: "1280px" } }
            px="10px"
            py="20px"
            color="white"
            alignItems="center"
            spacing={ { base: "-10px", lg: "10px" } }
        >
            <VStack
                position="relative"
                w={ { base: "full", lg: "650px" } }
                px="30px"
                pt="10px"
                pb="40px"
                spacing="20px"
                alignItems="start"
                rounded="25px"
                backdropFilter="blur(5px)"
                overflow="hidden"
            >
                <Flex
                    position="absolute"
                    w="full"
                    h="full"
                    top="0px"
                    left="0px"
                    bgGradient="linear(to-tr, #03b476, #7437f1)"
                    opacity="0.4"
                />

                <HStack
                    py="10px"
                    spacing="5px"
                    fontSize="14px"
                    zIndex="1"
                >
                    <Flex
                        w="50px"
                        h="4px"
                        bgColor="#13c486"
                    />

                    <Text>KITTIISM NFT GAME</Text>
                </HStack>

                <VStack
                    fontSize={ { base: "28px", xl: "45px" } }
                    fontWeight="800"
                    alignItems="start"
                    spacing="0px"
                    zIndex="1"
                >
                    <Text
                        lineHeight="45px"
                    >The Decentralized</Text>
                    <Text>Gamefi For Everyone!</Text>
                </VStack>

                <Text
                    fontSize="18px"
                    fontWeight="600"
                    zIndex="1"
                >KITTYMOON is a green virtual world where you are able to independently design your farm. The process begins from methods are such as preparing and loosening the soil, watering and harvesting to earn your $KITTEN!</Text>

                <Flex
                    w="full"
                    alignItems="center"
                    justifyContent="left"
                    zIndex="1"
                >
                    <HStack>
                        <Button
                            px="20px"
                            py="25px"
                            bgColor="#4dbc15"
                            boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
                        >PLAY</Button>

                        <Link
                            href="https://wax.atomichub.io/explorer/collection/kittymoonnft"
                        >
                            <a target="_blank">
                                <Button
                                    px="20px"
                                    py="25px"
                                    bgColor="white"
                                    color="#4dbc15"
                                    boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
                                    _hover={ { color: "white", bgColor: "rgba(255, 255, 255, 0.2)" } }
                                >MARKETPLACE</Button>
                            </a>
                        </Link>
                    </HStack>
                </Flex>
            </VStack>

            <Spacer />

            <Image
                src="/logo.png"
                w={ { base: "300px", lg: "500px" } }
            />
        </Stack>
    </Flex>
)

export default Welcome