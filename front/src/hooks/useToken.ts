import { useWriteNewTokenCreateNewToken } from '../contracts/generatedContracts';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { ErrorService } from '../../service/error.service';
import { useState } from 'react';

export const useToken = () => {
  const { isConnected, address, connector } = useAccount();
  const { writeContractAsync: createToken, data: createTokenHash, isPending: isCreating } = useWriteNewTokenCreateNewToken();

  const { isSuccess: isCreateConfirmed, data: receipt } = useWaitForTransactionReceipt({
    hash: createTokenHash,
  });

  const handleCreateToken = async (name: string, symbol: string) => {
    if (!isConnected) {
      await connector?.connect();
      return;
    }

    if (!address) {
      console.error('No address available');
      return;
    }

    try {
      const result = await createToken({
        args: [name, symbol],
      });
      console.log("Transaction hash:", result);
    } catch (error) {
      console.error('Error creating token:', error);
    }
  };

  if (isCreateConfirmed && receipt) {
    const tokenAddress = receipt.logs[0].address;
    console.log("Token address:", tokenAddress);
    if (tokenAddress) {
      ErrorService.successMessage(
        "Token créé avec succès !", 
        `Votre token a été créé à l'adresse : ${tokenAddress}`
      );
    }
  }

  return {
    isCreating,
    isCreateConfirmed,
    handleCreateToken,
    isConnected,
    address
  };
}; 