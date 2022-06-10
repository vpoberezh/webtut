import { useEffect, useMemo, useState } from 'react';
import Web3 from 'web3';

export function useWeb3(): Web3 | undefined {
  const [web, setWeb] = useState<Web3 | undefined>();
  useEffect(() => {
    setWeb(new Web3(Web3.givenProvider));
  }, []);

  return web;
}

// export function useWeb3(): Web3|undefined {
//     const [init, setInit] = useState(false);
//     useEffect(()=>{
//         setInit(true);
//     }, []);

//     return useMemo(()=>{
//         return init? new Web3(Web3.givenProvider): undefined;
//     }, [init]);
// }
