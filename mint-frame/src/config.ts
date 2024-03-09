export const config = {
    neynar : {
                apiKey: process.env.NEYNAR_API_KEY,
             },

    contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,

    warpcast : {
                castHash: process.env.NEXT_PUBLIC_WARPCAST_CAST_HASH,
               },
    hostURL : {
                hostUrl: process.env.NEXT_PUBLIC_HOST_URL,
               }
}