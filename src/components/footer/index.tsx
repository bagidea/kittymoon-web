import {
    Flex,
    Text,
    HStack,
    VStack,
    Stack,
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
        py="40px"
        bgColor="black"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
    >
        <Stack
            direction={ { base: "column", lg: "row" } }
            w="1280px"
            px="10px"
            color="white"
            fontSize="16px"
            fontWeight="600"
            spacing={ { base: "20px", lg: "0px" } }
            alignItems="center"
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

            <HStack
                fontSize="28px"
                spacing="20px"
            >
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
        </Stack>
    </Flex>
)

export default Footer