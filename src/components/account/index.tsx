import React, { useCallback, useEffect, useMemo, useState } from 'react';

import styles from './index.module.css';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { useEthereum } from '../../lib/hooks/provider';

interface Props {
  account: string;
}

export const Home: React.FC<Props> = ({ account }) => {
  const ethereum = useEthereum();

  const handleConnect = useCallback(async () => {}, []);

  return (
    <div className={styles.root}>
      <div>{account}</div>
      <div>
        <button></button>
      </div>
    </div>
  );
};
