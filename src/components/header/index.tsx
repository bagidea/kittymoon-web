import {
    Flex,
    Text,
    HStack,
    VStack,
    Spacer,
    useDisclosure
} from "@chakra-ui/react"

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react"

import { MutableRefObject } from "react"
import Link from "next/link"
import { FaHamburger } from "react-icons/fa"

const Header: React.FC<{ ref_welcome: MutableRefObject<HTMLDivElement> }> = ({ ref_welcome }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            position="fixed"
            w="full"
            h="80px"
            top="0px"
            left="0px"
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
                    display={ { base: "none", lg: "flex" } }
                    spacing="20px"
                    fontWeight="600"
                >
                    <Text
                        onClick={ () => ref_welcome.current?.scrollIntoView({ behavior: "smooth" }) }
                        cursor="pointer"
                    >HOME</Text>

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

                <Flex
                    hidden={ isOpen }
                    display={ { base: "flex", lg: "none" } }
                >
                    <FaHamburger
                        fontSize="30px"
                        cursor="pointer"
                        onClick={ onOpen }
                    />
                </Flex>
            </HStack>

            <Drawer
                isOpen={ isOpen }
                placement="top"
                onClose={ onClose }
            >
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerHeader
                        bgGradient="linear(to-tr, #03b476, #7437f1)"
                        cursor="pointer"
                        onClick={ onClose }
                    >
                        <HStack
                            h="50px"
                            color="white"
                            userSelect="none"
                        >
                            <Text
                                fontSize="24px"
                                fontWeight="800"
                                userSelect="none"
                            >KITTYMOON.IO</Text>

                            <Spacer />

                            <Flex
                                w="20px"
                                h="4px"
                                bgColor="white"
                            />
                        </HStack>
                    </DrawerHeader>

                    <DrawerBody
                        bgColor="#015456"
                    >
                        <VStack
                            w="full"
                            py="20px"
                            spacing="20px"
                            fontWeight="600"
                            color="white"
                            userSelect="none"
                        >
                            <Text
                                cursor="pointer"
                                onClick={ () => 
                                    {
                                        ref_welcome.current?.scrollIntoView({ behavior: "smooth" })
                                        onClose()
                                    }
                                }
                            >HOME</Text>

                            <Link
                                href="https://doc.kittymoon.io"
                            >
                                <a target="_blank">
                                    <Text
                                        cursor="pointer"
                                        onClick={ onClose }
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
                                        onClick={ onClose }
                                    >DISCORD</Text>
                                </a>
                            </Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Header