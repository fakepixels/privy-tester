'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId="clz2su1ys04b15h8nj9e5q1c0"
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          walletList: ['coinbase_wallet'],
          theme: 'light',
          accentColor: '#344afb',
          logo: 'https://seeklogo.com/images/C/coinbase-coin-logo-C86F46D7B8-seeklogo.com.png',
        },
       
        externalWallets: { 
          coinbaseWallet: { 
            // Valid connection options include 'eoaOnly' (default), 'smartWalletOnly', or 'all'
            connectionOptions: 'smartWalletOnly', 
          }, 
        }, 
      }}
    >
      {children}
    </PrivyProvider>
  );
}