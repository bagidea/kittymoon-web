import {
    Flex,
    VStack
} from "@chakra-ui/react"

import Header from "../src/components/header"
import HowToPlay from "../src/components/how_to_play"
import Starting from "../src/components/starting"
import Welcome from "../src/components/welcome"

const Index = () => (
    <Flex
        w="100%"
        userSelect="none"
    >
        <VStack
            w="full"
            spacing="0px"
        >
            <Header />
            <Welcome />
            <Starting />
            <HowToPlay />
        </VStack>
    </Flex>
)

export default Index