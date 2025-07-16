import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { arbitrum, base, mainnet, optimism, polygon, sepolia } from "wagmi/chains";
import { injectedWallet } from "@rainbow-me/rainbowkit/wallets";

const projectId = "a2f589ed77cb7532a3e3a964ab5b0ba5";

// export const config = getDefaultConfig({
//   appName: 'RainbowKit App',
//   projectId,
//   chains: [
//     mainnet,
//     polygon,
//     optimism,
//     arbitrum,
//     base,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
//   ],
//   ssr: true,
// });

export const config = getDefaultConfig({
  appName: "Space",
  projectId,
  chains: [base],
  transports: {
    [base.id]: http(),
  },
  wallets: [
    {
      groupName: "Injected",
      wallets: [injectedWallet],
    },
  ],
  ssr: true,
});
