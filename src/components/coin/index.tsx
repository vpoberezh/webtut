import { Maybe } from '@metamask/providers/dist/utils';
import { CoinIcon } from 'coin-icon';
import React, { useCallback, useState } from 'react';
import { useEthereum } from '../../lib/hooks/provider';

import s from './index.module.scss';

interface Props {
  account: string;
  code: string;
}

export const Coin: React.FC<Props> = ({ code, account }) => {
  const [balance, setBalance] = useState<string>();

  const ethereum = useEthereum();

  const handleConnect = useCallback(async () => {
    const newBalance: Maybe<string> = await ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] });
    setBalance(newBalance as any);
  }, [account, ethereum]);

  return (
    <div className={s.root}>
      <div className={s.content}>
        <CoinIcon className={s.icon} code={code}></CoinIcon>
        <div className={s.code}>{code}</div>
        <div className={s.balance}>
          {balance ? (
            <span className={s.balance__value}>{balance}</span>
          ) : (
            <span className={s.balance__link} onClick={handleConnect}>
              Get Balance
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
