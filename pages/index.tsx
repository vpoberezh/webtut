import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import styles from './index.module.css';
import { useEthereum } from '../src/lib/hooks/provider';
import { MmAccount } from '../src/components/account';

const Home: NextPage = () => {
  const [account, setAccount] = useState('');
  const ethereum = useEthereum();

  const handleConnect = useCallback(async () => {
    const accounts: string[] = (await ethereum.request({
      method: 'eth_requestAccounts',
    })) as any;
    setAccount(accounts[0]);

    ethereum.on('accountsChanged', (newAccounts: any) => {
      setAccount(newAccounts[0]);
    });
  }, [ethereum]);

  return (
    <div className={styles.root}>
      {account ? <MmAccount account={account} /> : <button onClick={handleConnect}>Connect Metamask</button>}
    </div>
  );
};

export default Home;
