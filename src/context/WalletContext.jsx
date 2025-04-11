import { createContext, useContext, useEffect, useState } from 'react';
import { connect, disconnect } from 'starknetkit';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [address, setAddress] = useState('');
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const autoConnect = async () => {
      try {
        const { wallet: connectedWallet } = await connect({ 
          modalMode: "neverAsk",
          dappName: "AURORA"  
        });
        
        if (connectedWallet?.isConnected) {
          setWallet(connectedWallet);
          setAddress(connectedWallet.selectedAddress);
        }
      } catch (error) {
        console.error("Auto-connect error:", error);
      }
    };
    
    autoConnect();
  }, []);

  const connectWallet = async () => {
    try {
      const { wallet: newWallet } = await connect({
        modalMode: "alwaysAsk",  
        dappName: "AURORA",     
        modalTheme: "dark"      
      });
      
      if (newWallet) {
        setWallet(newWallet);
        setAddress(newWallet.selectedAddress);
      }
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnect({ clearLastWallet: true });
      setWallet(null);
      setAddress('');
    } catch (error) {
      console.error("Disconnection error:", error);
    }
  };

  return (
    <WalletContext.Provider value={{ address, wallet, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);