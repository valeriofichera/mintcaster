import { Html, Head, Main, NextScript } from 'next/document'
import { config } from "@/config"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content={`Mint an NFT`} />
        <meta property="og:image" content={`https://mintcaster-jade.vercel.app/mintcaster_logo.png`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`https://mintcaster-jade.vercel.app/mintcaster_logo.png`} />
        <meta property="fc:frame:button:1" content="Get Started" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
