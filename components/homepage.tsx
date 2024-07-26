"use client";

import { Button } from "@/components/ui/button"
import { usePrivy } from '@privy-io/react-auth';

function ConnectWalletButton() {
  const { login, ready } = usePrivy();

  return (
    <Button 
      className="shadow-lg bg-[#344afb] hover:bg-[#2a3bc7]" 
      onClick={login} 
      disabled={!ready}
    >
      Connect Wallet
    </Button>
  );
}

export function Homepage() {
  return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
          <header className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-primary">Privy & Coinbase Smart Wallet</h1>
            <p className="text-sm">Default Smart Wallet implementation</p>
          </header>
          <ConnectWalletButton />
        </div>
  )
}