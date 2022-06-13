import React, { useCallback, useEffect, useMemo, useState } from 'react';
import s from './index.module.scss';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { useEthereum } from '../../lib/hooks/provider';
import { Maybe } from '@metamask/providers/dist/utils';
import { CoinIconCodeList } from 'coin-icon';
import { Coin } from '../coin';

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
    <div className={s.root}>
      <div className={s.meta}>{account}</div>
      <div>
        {CoinIconCodeList.map((code, i) => {
          return (
            <Coin key={i} code={code}>
              {code}
            </Coin>
          );
        })}
      </div>
      {/* <div>{balance ? <span>{balance}</span> : <button onClick={handleConnect}>Get Eth balance</button>}</div> */}
    </div>
  );
};
