import { useState, useEffect, useCallback } from 'react';

const ONE_HOUR = 3600000;
const STORAGE_KEY = 'hourlyCount';
const TIMESTAMP_KEY = 'lastUpdateTimestamp';

export const useHourlyCounter = () => {
  // Initialize state using a lazy initializer for performance
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? parseInt(saved, 10) : 0;
  });

  const updateCounter = useCallback(() => {
    const now = Date.now();
    const lastUpdateStr = localStorage.getItem(TIMESTAMP_KEY);
    const currentStoredCount = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);

    if (!lastUpdateStr) {
      // Scenario: Fresh start
      const firstRandom = Math.floor(Math.random() * 100) + 1;
      saveData(currentStoredCount + firstRandom, now);
    } else {
      const lastUpdate = parseInt(lastUpdateStr, 10);
      const msPassed = now - lastUpdate;

      if (msPassed >= ONE_HOUR) {
        // Scenario: One or more hours have passed
        const hoursPassed = Math.floor(msPassed / ONE_HOUR);
        let totalIncrement = 0;

        for (let i = 0; i < hoursPassed; i++) {
          totalIncrement += Math.floor(Math.random() * 100) + 1;
        }

        // Adjust timestamp to the last "full hour" tick to maintain accuracy
        const newCount = currentStoredCount + totalIncrement;
        const actualIntervalTimestamp = now - (msPassed % ONE_HOUR);
        saveData(newCount, actualIntervalTimestamp);
      }
    }
  }, []);

  const saveData = (newCount: number, timestamp: number) => {
    setCount(newCount);
    localStorage.setItem(STORAGE_KEY, newCount.toString());
    localStorage.setItem(TIMESTAMP_KEY, timestamp.toString());
  };

  const resetCounter = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(TIMESTAMP_KEY);
    setCount(0);
  };

  useEffect(() => {
    // Check immediately on mount
    updateCounter();

    // Heartbeat check every 60 seconds
    const interval = setInterval(updateCounter, 60000);

    return () => clearInterval(interval);
  }, [updateCounter]);

  return { count, resetCounter };
};