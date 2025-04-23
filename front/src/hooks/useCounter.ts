import { useReadCounterNumber, useWriteCounterIncrement, useWriteCounterDecrement } from '../contracts/generatedContracts';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';

export const useCounter = () => {
  const { isConnected, connector } = useAccount();
  const { data: number, refetch: refetchNumber } = useReadCounterNumber();
  const { writeContractAsync: increment, data: incrementHash, isPending: isIncrementing } = useWriteCounterIncrement();
  const { writeContractAsync: decrement, data: decrementHash, isPending: isDecrementing } = useWriteCounterDecrement();

  const { isSuccess: isIncrementConfirmed } = useWaitForTransactionReceipt({
    hash: incrementHash,
  });

  const { isSuccess: isDecrementConfirmed } = useWaitForTransactionReceipt({
    hash: decrementHash,
  });

  if (isIncrementConfirmed || isDecrementConfirmed) {
    refetchNumber();
  }

  const handleIncrement = async () => {
    if (!isConnected) {
        await connector?.connect();
    }
    try {
      await increment({});
    } catch (error) {
      console.error('Error incrementing:', error);
    }
  };

  const handleDecrement = async () => {
    if (!isConnected) {
        await connector?.connect();
    }
    try {
      await decrement({});
    } catch (error) {
      console.error('Error decrementing:', error);
    }
  };

  return {
    number: number?.toString() ?? '0',
    isIncrementing,
    isDecrementing,
    handleIncrement,
    handleDecrement,
    isConnected
  };
}; 