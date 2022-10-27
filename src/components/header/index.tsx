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

const Header: React.FC<{
    ref_welcome: MutableRefObject<HTMLDivElement>,
    ref_nft: MutableRefObject<HTMLDivElement>,
    ref_howtoplay: MutableRefObject<HTMLDivElement>,
    ref_kitten: MutableRefObject<HTMLDivElement>,
    ref_roadmap: MutableRefObject<HTMLDivElement>,
    ref_team: MutableRefObject<HTMLDivElement>
}> = ({ ref_welcome, ref_nft, ref_howtoplay, ref_kitten, ref_roadmap, ref_team }) => {
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
                <Text
                    fontSize="24px"
                    fontWeight="800"
                    cursor="pointer"
                    onClick={ () => ref_welcome.current?.scrollIntoView({ behavior: "smooth" }) }
                >KITTYMOON.IO</Text>

                <Spacer />

                <HStack
                    display={ { base: "none", lg: "flex" } }
                    spacing="20px"
                    fontWeight="600"
                >
                    <Text
                        cursor="pointer"
                        onClick={ () => ref_welcome.current?.scrollIntoView({ behavior: "smooth" }) }
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
                        onClick={ () => ref_nft.current?.scrollIntoView({ behavior: "smooth" }) }
                    >NFT</Text>

                    <Text
                        cursor="pointer"
                        onClick={ () => ref_howtoplay.current?.scrollIntoView({ behavior: "smooth" }) }
                    >HOW TO PLAY</Text>

                    <Text
                        cursor="pointer"
                        onClick={ () => ref_kitten.current?.scrollIntoView({ behavior: "smooth" }) }
                    >$KITTEN</Text>

                    <Text
                        cursor="pointer"
                        onClick={ () => ref_roadmap.current?.scrollIntoView({ behavior: "smooth" }) }
                    >ROADMAP</Text>

                    <Text
                        cursor="pointer"
                        onClick={ () => ref_team.current?.scrollIntoView({ behavior: "smooth" }) }
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
                                    <Text
                                        cursor="pointer"
                                        onClick={ onClose }
                                    >WHITEPAPER</Text> 
                                </Link>

                            <Text
                                cursor="pointer"
                                onClick={ () => 
                                    {
                                        ref_nft.current?.scrollIntoView({ behavior: "smooth" })
                                        onClose()
                                    }
                                }
                            >NFT</Text>

                            <Text
                                cursor="pointer"
                                onClick={ () => 
                                    {
                                        ref_howtoplay.current?.scrollIntoView({ behavior: "smooth" })
                                        onClose()
                                    }
                                }
                            >HOW TO PLAY</Text>

                            <Text
                                cursor="pointer"
                                onClick={ () => 
                                    {
                                        ref_kitten.current?.scrollIntoView({ behavior: "smooth" })
                                        onClose()
                                    }
                                }
                            >$KITTEN</Text>

                            <Text
                                cursor="pointer"
                                onClick={ () => 
                                    {
                                        ref_roadmap.current?.scrollIntoView({ behavior: "smooth" })
                                        onClose()
                                    }
                                }
                            >ROADMAP</Text>

                            <Text
                                cursor="pointer"
                                onClick={ () => 
                                    {
                                        ref_team.current?.scrollIntoView({ behavior: "smooth" })
                                        onClose()
                                    }
                                }
                            >TEAM</Text>

                            <Link
                                href="https://discord.com/invite/6pQvShSBqD"
                            >
                                <Text
                                    cursor="pointer"
                                    onClick={ onClose }
                                >DISCORD</Text>
                            </Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Header