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
                <Text
                    fontSize="24px"
                    fontWeight="800"
                    cursor="pointer"
                >KITTYMOON.IO</Text>
            </Link>

            <Spacer />

            <HStack
                spacing="20px"
                fontWeight="600"
            >
                <Text
                    cursor="pointer"
                >HOME</Text>

                <Link
                    href="https://doc.kittymoon.io"
                >
                    <Text
                        cursor="pointer"
                    >WHITEPAPER</Text>
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
                    href="https://discord.gg/rfQBs9KJzx"
                >
                    <Text
                        cursor="pointer"
                    >DISCORD</Text>
                </Link>
            </HStack>
        </HStack>
    </Flex>
)

export default Header