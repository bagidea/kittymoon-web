import {
    Flex,
    Text,
    HStack,
    VStack,
    Image,
    Button,
    Spacer
} from "@chakra-ui/react"

const Team = () => (
    <Flex
        position="relative"
        w="full"
        h="500px"
        pt="40px"
        bgGradient="linear(to-b, #003010, #4407d1)"
        alignItems="center"
        justifyContent="center"
    >
        <Flex
            position="absolute"
            w="full"
            h="full"
            top="0px"
            left="0px"
            bgImage="/banner.png"
            bgSize="cover"
            opacity="0.4"
            zIndex="0"
        />

        <VStack
            h="full"
            color="white"
            spacing="20px"
            zIndex="1"
        >
            <Text
                fontSize="45px"
                fontWeight="800"
            >KITTIISM TEAM</Text>

            <HStack
                spacing="100px"
            >
                <VStack
                    w="300px"
                    spacing="0px"
                >
                    <Image
                        src="/vp.png"
                        w="200px"
                    />

                    <Text
                        fontSize="18px"
                        fontWeight="600"
                    >KITTICUTi</Text>

                    <Text
                        fontSize="45px"
                        fontWeight="800"
                    >VP</Text>

                    <Text
                        fontSize="16px"
                        fontWeight="600"
                    >Game Developer & Legal Director</Text>
                </VStack>

                <VStack
                    w="300px"
                    spacing="0px"
                >
                    <Image
                        src="/ceo.png"
                        w="200px"
                    />

                    <Text
                        fontSize="18px"
                        fontWeight="600"
                    >KITTIAUDi</Text>

                    <Text
                        fontSize="45px"
                        fontWeight="800"
                    >CEO</Text>

                    <Text
                        fontSize="16px"
                        fontWeight="600"
                    >Full Stack & Smart Contract Developer</Text>
                </VStack>

                <VStack
                    w="300px"
                    spacing="0px"
                >
                    <Image
                        src="/avp.png"
                        w="200px"
                    />

                    <Text
                        fontSize="18px"
                        fontWeight="600"
                    >KITTIARTi</Text>

                    <Text
                        fontSize="45px"
                        fontWeight="800"
                    >AVP</Text>

                    <Text
                        fontSize="16px"
                        fontWeight="600"
                    >Art Director</Text>
                </VStack>
            </HStack>
        </VStack>
    </Flex>
)

export default Team