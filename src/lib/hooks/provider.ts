import { MetaMaskInpageProvider } from '@metamask/providers';
import { useEffect, useState } from 'react';

export function useEthereum(): MetaMaskInpageProvider {
  const [ethereum, setEthereum] = useState<MetaMaskInpageProvider>();

  useEffect(() => {
    setEthereum(window.ethereum);
  }, []);

  return ethereum as any;
}
