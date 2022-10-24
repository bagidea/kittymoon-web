import {
    Flex,
    Text,
    HStack,
    Spacer
} from "@chakra-ui/react"

import Link from "next/link"

const Header = () => (
    <Flex
        position="fixed"
        w="full"
        h="80px"
        bgGradient="linear(to-tr, #03b476, #7437f1)"
        alignItems="center"
        justifyContent="center"
        zIndex="5"
    >
        <HStack
            w="1280px"
            maxW="1280px"
            px="10px"
            color="white"
        >
            <Link
                href="/"
            >
                <a>
                    <Text
                        fontSize="24px"
                        fontWeight="800"
                    >KITTYMOON.IO</Text>
                </a>
            </Link>

            <Spacer />

            <HStack
                spacing="20px"
                fontWeight="600"
            >
                <Link
                    href="/"
                >
                    <a><Text>HOME</Text></a>
                </Link>

                <Link
                    href="https://doc.kittymoon.io"
                >
                    <a target="_blank">
                        <Text
                            cursor="pointer"
                        >WHITEPAPER</Text> 
                    </a>
                </Link>

                <Text
                    cursor="pointer"
                >NFT</Text>

                <Text
                    cursor="pointer"
                >HOW TO PLAY</Text>

                <Text
                    cursor="pointer"
                >$KITTEN</Text>

                <Text
                    cursor="pointer"
                >ROADMAP</Text>

                <Text
                    cursor="pointer"
                >TEAM</Text>

                <Link
                    href="https://discord.com/invite/6pQvShSBqD"
                >
                    <a target="_blank">
                        <Text
                            cursor="pointer"
                        >DISCORD</Text>
                    </a>
                </Link>
            </HStack>
        </HStack>
    </Flex>
)

export default Header