import {
    Flex,
    VStack
} from "@chakra-ui/react"

import Header from "../src/components/header"
import Welcome from "../src/components/welcome"
import Starting from "../src/components/starting"
import HowToPlay from "../src/components/how_to_play"
import Team from "../src/components/team"
import Footer from "../src/components/footer"

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
            <Team />
            <Footer />
        </VStack>
    </Flex>
)

export default Index