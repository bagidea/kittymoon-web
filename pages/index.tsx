import {
    Flex,
    VStack
} from "@chakra-ui/react"

import Header from "../src/components/header"
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
        </VStack>
    </Flex>
)

export default Index