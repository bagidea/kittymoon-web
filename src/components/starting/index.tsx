import {
    Flex,
    Text,
    HStack,
    VStack,
    Image
} from "@chakra-ui/react"

const Starting = () => (
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
            spacing="20px"
        >
            <Text
                fontSize="16px"
            >GETTING START</Text>

            <Text
                fontSize="45px"
                fontWeight="800"
            >CHECK OUR NFT HERE!</Text>

            <Text
                w="550px"
                fontSize="18px"
                fontWeight="600"
                textAlign="center"
            >Players can begin the game by opening three mechanic toolboxes consisting of 1. a hoe 2. a watering can 3. an axe. It can be said that the axe is the most essential tool due to its use is for harvesting your products.</Text>

            <Flex
                w="full"
                pt="30px"
                justifyContent="center"
            >
                <VStack
                    spacing="20px"
                >
                    <HStack
                        spacing="20px"
                        alignItems="start"
                    >
                        <VStack
                            w="250px"
                            padding="20px"
                            border="2px solid"
                            borderColor="rgba(255, 255, 255, 0.2)"
                            spacing="30px"
                            _hover={ { boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 30px" } }
                            rounded="25px"
                        >
                            <Image
                                src="/tool_hoe.png"
                                w="200px"
                            />

                            <Text
                                fontSize="20px"
                                fontWeight="600"
                            >A Hoe</Text>

                            <Text
                                w="full"
                                fontSize="16px"
                                fontWeight="600"
                            >A hoe is very significant! Due to if you do not prepare and loosen the soil for growing plants, it is impossible for you plant the seeds.</Text>
                        </VStack>

                        <VStack
                            w="250px"
                            padding="20px"
                            border="2px solid"
                            borderColor="rgba(255, 255, 255, 0.2)"
                            spacing="30px"
                            _hover={ { boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 30px" } }
                            rounded="25px"
                        >
                            <Image
                                src="/tool_watering_can.png"
                                w="200px"
                            />

                            <Text
                                fontSize="20px"
                                fontWeight="600"
                            >A Watering Can</Text>

                            <Text
                                w="full"
                                fontSize="16px"
                                fontWeight="600"
                            >After planting the seeeds, you need to employ a watering can in order to water the seeds. Please bear in mind that the growing period of your plants will not countdown if without watering the plants!</Text>
                        </VStack>

                        <VStack
                            w="250px"
                            padding="20px"
                            border="2px solid"
                            borderColor="rgba(255, 255, 255, 0.2)"
                            spacing="30px"
                            _hover={ { boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 30px" } }
                            rounded="25px"
                        >
                            <Image
                                src="/tool_axe.png"
                                w="200px"
                            />

                            <Text
                                fontSize="20px"
                                fontWeight="600"
                            >An Axe</Text>

                            <Text
                                w="full"
                                fontSize="16px"
                                fontWeight="600"
                            >At the final stage, you need to use an axe in order to harvest the plants when the plants are ready to be harvested. it can be said that you can sell your plants in the market or exchange for $KITTEN according to your convenience.</Text>
                        </VStack>

                        <VStack
                            w="250px"
                            padding="20px"
                            border="2px solid"
                            borderColor="rgba(255, 255, 255, 0.2)"
                            spacing="30px"
                            _hover={ { boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 30px" } }
                            rounded="25px"
                        >
                            <Image
                                src="/seed.png"
                                w="200px"
                            />

                            <Text
                                fontSize="20px"
                                fontWeight="600"
                            >The Seed</Text>

                            <Text
                                w="full"
                                fontSize="16px"
                                fontWeight="600"
                            >The seeds in each plant species have four different levels. By the higher level you are, the better benefit you can earn according to such level. By 1 Seed/4Block.</Text>
                        </VStack>
                    </HStack>

                    <HStack
                        spacing="20px"
                        alignItems="start"
                    >
                        <VStack
                            w="450px"
                            padding="20px"
                            border="2px solid"
                            borderColor="rgba(255, 255, 255, 0.2)"
                            spacing="30px"
                            _hover={ { boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 30px" } }
                            rounded="25px"
                        >
                            <Image
                                src="/land.png"
                                w="400px"
                            />

                            <Text
                                fontSize="20px"
                                fontWeight="600"
                            >Lands</Text>

                            <Text
                                w="full"
                                fontSize="16px"
                                fontWeight="600"
                            >You are able to buy a land in order to earn increasingly. By 1 Wax Account can have merely 4 Lands and each Land shall choose its level whimsically. However, there is a huge limitation of Land. An essential capabilly of Land is to increase much more energy.</Text>
                        </VStack>

                        <VStack
                            w="450px"
                            padding="20px"
                            border="2px solid"
                            borderColor="rgba(255, 255, 255, 0.2)"
                            spacing="30px"
                            _hover={ { boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 30px" } }
                            rounded="25px"
                        >
                            <Image
                                src="/house.png"
                                w="400px"
                            />

                            <Text
                                fontSize="20px"
                                fontWeight="600"
                            >Houses</Text>

                            <Text
                                w="full"
                                fontSize="16px"
                                fontWeight="600"
                            >Normally, you can hold merely 'two tools' for each category. However, if you feel that it is too slow, you can buy a house as well. Buying a house can bring about many special advantages.</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </Flex>
        </VStack>
    </Flex>
)

export default Starting