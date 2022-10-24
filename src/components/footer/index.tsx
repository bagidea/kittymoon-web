import {
    Flex,
    Text,
    HStack,
    VStack,
    Spacer
} from "@chakra-ui/react"

import {
    FaTelegram,
    FaFacebookF,
    FaTwitter,
    FaDiscord
} from "react-icons/fa"

import Link from "next/link"

const Footer = () => (
    <Flex
        position="relative"
        w="full"
        py="50px"
        bgColor="black"
        alignItems="center"
        justifyContent="center"
    >
        <HStack
            w="1280px"
            px="10px"
            color="white"
            fontSize="16px"
            fontWeight="600"
        >
            <VStack
                alignItems="start"
            >
                <Text>Copyright © 2022 KITTIISM TEAM powered by</Text>
                <Text>BagIdea Co.,Ltd.</Text>
                <Text>0405557002215</Text>
                <Text>123/207 Moo 16 Mittraphap road, Nai Mueang,</Text>
                <Text>Amphoe Mueang Khon Khaen, Khon Khaen,</Text>
                <Text>Thailand</Text>
                <Text>CEO: Thanawat Suriya</Text>
            </VStack>

            <Spacer />

            <Text>Email: admin@kittymoon.io</Text>

            <Spacer />

            <HStack>
                <Link
                    href="https://t.me/kittymoongame"
                >
                    <a target="_blank">
                        <FaTelegram />
                    </a>
                </Link>

                <Link
                    href="https://fb.com/kittymoongame"
                >
                    <a target="_blank">
                        <FaFacebookF />
                    </a>
                </Link>

                <Link
                    href="https://twitter.com/kittymoonG"
                >
                    <a target="_blank">
                        <FaTwitter />
                    </a>
                </Link>

                <Link
                    href="https://discord.com/invite/6pQvShSBqD"
                >
                    <a target="_blank">
                        <FaDiscord />
                    </a>
                </Link>
            </HStack>
        </HStack>
    </Flex>
)

export default Footer