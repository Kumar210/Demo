import { MantineProvider, } from '@mantine/core';
import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

const client = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
})

const AppWrapper = ({ children }: any) => {



    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: 'dark',
                breakpoints: {
                    xs: 500,
                    sm: 800,
                    md: 1000,
                    lg: 1200,
                    xl: 1400,
                },
            }}
        >
            <WagmiConfig client={client}>
                {children}
            </WagmiConfig>
        </MantineProvider>

    )
}
export default AppWrapper
