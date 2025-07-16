"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { createConfig, http, injected, WagmiProvider } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";
import { injectedWallet } from "@rainbow-me/rainbowkit/wallets";

const projectId = "a2f589ed77cb7532a3e3a964ab5b0ba5";

const config = getDefaultConfig({
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

const queryClient = new QueryClient();

const customTheme = {
  blurs: {
    modalOverlay: "blur(8px)",
  },
  colors: {
    accentColor: "#00FFD1",
    accentColorForeground: "#0E0E10",
    actionButtonBorder: "#2D2D30",
    actionButtonBorderMobile: "#2D2D30",
    actionButtonSecondaryBackground: "#1E1E20",
    closeButton: "#6B7280",
    closeButtonBackground: "#1E1E20",
    connectButtonBackground: "#1E1E20",
    connectButtonBackgroundError: "#FF6B6B",
    connectButtonInnerBackground: "#0E0E10",
    connectButtonText: "#FFFFFF",
    connectButtonTextError: "#FFFFFF",
    connectionIndicator: "#00FFD1",
    downloadBottomCardBackground: "#1E1E20",
    downloadTopCardBackground: "#0E0E10",
    error: "#FF6B6B",
    generalBorder: "#2D2D30",
    generalBorderDim: "#1E1E20",
    menuItemBackground: "#1E1E20",
    modalBackdrop: "rgba(0, 0, 0, 0.5)",
    modalBackground: "#0E0E10",
    modalBorder: "#2D2D30",
    modalText: "#FFFFFF",
    modalTextDim: "#9CA3AF",
    modalTextSecondary: "#6B7280",
    profileAction: "#1E1E20",
    profileActionHover: "#2D2D30",
    profileForeground: "#0E0E10",
    selectedOptionBorder: "#00FFD1",
    standby: "#FCEE09",
  },
  fonts: {
    body: "var(--font-primary), sans-serif",
  },
  radii: {
    actionButton: "0.5rem",
    connectButton: "0.5rem",
    menuButton: "0.5rem",
    modal: "0.5rem",
    modalMobile: "0.5rem",
  },
  shadows: {
    connectButton: "0 4px 12px rgba(0, 255, 209, 0.1)",
    dialog: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    profileDetailsAction: "0 2px 6px rgba(0, 0, 0, 0.2)",
    selectedOption: "0 2px 6px rgba(0, 0, 0, 0.2)",
    selectedWallet: "0 2px 6px rgba(0, 0, 0, 0.2)",
    walletLogo: "0 2px 16px rgba(0, 0, 0, 0.3)",
  },
};

export default function WagmiConfig({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={customTheme} initialChain={base}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
