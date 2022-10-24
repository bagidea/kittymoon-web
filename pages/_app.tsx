import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"

const App = ({ Component, pageProps }) => (
    <ChakraProvider>
        <Head>
            <title>KITTYMOON.IO - NFT PLAY-TO-EARN GAMEFI</title>
            <link
                rel="icon"
                type="image/png"
                href="/icon.png"
            />
        </Head>
        <Component { ...pageProps } />
    </ChakraProvider>
)

export default App