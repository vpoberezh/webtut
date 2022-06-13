import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './index.module.css';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { useEthereum } from '../../lib/hooks/provider';
import { Maybe } from '@metamask/providers/dist/utils';

interface Props {
  account: string;
}

export const MmAccount: React.FC<Props> = ({ account }) => {
  const [balance, setBalance] = useState<Maybe<string>>();
  const ethereum = useEthereum();

  const handleConnect = useCallback(async () => {
    console.log('get newBalance', account);
    const newBalance: Maybe<string> = await ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] });
    console.log('newBalance', newBalance);
    setBalance(newBalance);
  }, [account, ethereum]);

  return (
    <div className={styles.root}>
      <div>{account}</div>
      <div>{balance ? <span>{balance}</span> : <button onClick={handleConnect}>Get Eth balance</button>}</div>
    </div>
  );
};
