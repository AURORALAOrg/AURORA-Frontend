import React, { useState } from 'react';
import { Client } from '../../../blockchain/transactions-sdk/src/index.ts';
import { Networks } from '@stellar/stellar-sdk';

const MockPage = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const executeTransaction = async () => {
    console.log('Botón presionado, ejecutando transacción...');
    setError(null);
    setResult(null);
    try {
      console.log('Creando instancia del contrato...');
      const contract = new Client({
        networkPassphrase: Networks.TESTNET,
        rpcUrl: 'https://soroban-testnet.stellar.org',
        contractId: 'CBPIN7VOPCXDCWT2QIXTXCAX2N4XBNGSQKNEWPRP7J5Z4QSQOGGXBPGP'
      });

      console.log('Llamando a initialize...');
      const { result: transactionResult } = await contract.initialize({
        admin: 'GB3A3QFF7SDBEIE2NMNJ2JGR7DWRMX2QV4EFR7WUC7OIT2O3EOUEOCJF'
      });

      console.log('Transacción completada:', transactionResult);
      setResult(transactionResult);
      console.log(transactionResult)
    } catch (err) {
      console.error('Error atrapado:', err);
      setError(err.message || 'Error al ejecutar la transacción');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 10, boxShadow: '0 2px 8px #0001' }}>
      <button 
        onClick={executeTransaction}
        style={{
          background: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          padding: '12px 24px',
          fontSize: 16,
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: 20,
          width: '100%'
        }}
      >
        Ejecutar Transacción
      </button>
      {error && <div style={{ color: 'red', marginBottom: 10 }}>Error: {error}</div>}
      {result && (
        <pre style={{ background: '#f8f9fa', padding: 10, borderRadius: 6, fontSize: 13 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default MockPage;