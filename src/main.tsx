import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppWrapper from './Components/AppWrapper/AppWrapper'
import './index.css'
import { publicProvider } from 'wagmi/providers/public'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

const { chains, provider, webSocketProvider }: any = configureChains(
  [chain.polygonMumbai],
  [publicProvider()]
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      options: {
        qrcode: true,
      },
    }),

    // new MetaMaskConnector({ options: {
    //   shimChainChangedDisconnect: false,
    // },}),
    new CoinbaseWalletConnector({
      chains: [chain.mainnet, chain.optimism],
      options: {
        appName: 'wagmi.sh',
        jsonRpcUrl: 'https://eth-mainnet.alchemyapi.io/v2/yourAlchemyId',
      },
    }),
    // new InjectedConnector({chains,options:{name:"Injected"}})
  ],
})



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppWrapper>
    {/* <WagmiConfig client={client} > */}

    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* </WagmiConfig> */}
  </AppWrapper>
)
