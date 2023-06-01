import Algonaut from '@thencc/algonautjs';
// import { algo } from 'crypto-js';

    const algonaut = new Algonaut({
      BASE_SERVER: 'https://testnet-algorand.api.purestake.io/ps2',
      INDEX_SERVER: 'https://testnet-algorand.api.purestake.io/idx2',
      LEDGER: 'TestNet',
      PORT: '',
      SIGNING_MODE: 'inkey',
      API_TOKEN: { 'X-API-Key': import.meta.env.VITE_PURESTAKE_API_KEY },
    });

export default algonaut;