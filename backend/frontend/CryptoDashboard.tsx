import React, { useState, useEffect } from 'react';

// TypeScript Interface for Coin Data
interface Coin {
  id: string;
  name: string;
  priceUsd: string;
}

export const CryptoDashboard: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulated Data Fetching Hook
  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        // Simulating API latency
        await new Promise(resolve => setTimeout(resolve, 800)); 
        setCoins([
          { id: 'btc', name: 'Bitcoin', priceUsd: '45000.00' },
          { id: 'eth', name: 'Ethereum', priceUsd: '3200.50' }
        ]);
      } catch (error) {
        console.error("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMarketData();
  }, []);

  if (isLoading) return <div>Loading Market Data...</div>;

  return (
    <div className="dashboard-grid">
      {coins.map(coin => (
        <div key={coin.id} className="coin-card">
          <h3>{coin.name}</h3>
          <p>${parseFloat(coin.priceUsd).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};
