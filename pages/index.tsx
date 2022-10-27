import {
    Flex,
    VStack
} from "@chakra-ui/react"

import {
    MutableRefObject,
    useRef
} from "react"

import Header from "../src/components/header"
import Welcome from "../src/components/welcome"
import Starting from "../src/components/starting"
import HowToPlay from "../src/components/how_to_play"
import Team from "../src/components/team"
import Footer from "../src/components/footer"

const Index = () => { 
    const ref_welcome: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const ref_nft: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const ref_howtoplay: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const ref_kitten: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const ref_roadmap: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
    const ref_team: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    return (
        <Flex
            w="100vw"
            userSelect="none"
        >
            <VStack
                w="full"
                spacing="0px"
            >
                <Header
                    ref_welcome={ ref_welcome }
                    ref_nft={ ref_nft }
                    ref_howtoplay={ ref_howtoplay }
                    ref_kitten={ ref_kitten }
                    ref_roadmap={ ref_roadmap }
                    ref_team={ ref_team }
                />

                <Welcome _ref={ ref_welcome } />
                <Starting _ref={ ref_nft } />

                <HowToPlay
                    _ref_howtoplay={ ref_howtoplay }
                    _ref_kitten={ ref_kitten }
                    _ref_roadmap={ ref_roadmap }
                />

                <Team _ref={ ref_team } />
                <Footer />
            </VStack>
        </Flex>
    )
}

export default Index