import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const counterAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'decrement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'number',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  { type: 'error', inputs: [], name: 'MustBeGreaterThanOne' },
] as const

export const counterAddress =
  '0x8340f30b8446840e7C9BE5187732238DEf959de2' as const

export const counterConfig = {
  address: counterAddress,
  abi: counterAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NewToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const newTokenAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'createNewToken',
    outputs: [
      { name: '', internalType: 'contract TokenGenerator', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
] as const

export const newTokenAddress =
  '0xE49299c9fdEF941cc1a7FBA28FB22E79d1efCcA1' as const

export const newTokenConfig = {
  address: newTokenAddress,
  abi: newTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__
 */
export const useReadCounter = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"number"`
 */
export const useReadCounterNumber = /*#__PURE__*/ createUseReadContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'number',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__
 */
export const useWriteCounter = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"decrement"`
 */
export const useWriteCounterDecrement = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'decrement',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 */
export const useWriteCounterIncrement = /*#__PURE__*/ createUseWriteContract({
  abi: counterAbi,
  address: counterAddress,
  functionName: 'increment',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__
 */
export const useSimulateCounter = /*#__PURE__*/ createUseSimulateContract({
  abi: counterAbi,
  address: counterAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"decrement"`
 */
export const useSimulateCounterDecrement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterAbi,
    address: counterAddress,
    functionName: 'decrement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link counterAbi}__ and `functionName` set to `"increment"`
 */
export const useSimulateCounterIncrement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: counterAbi,
    address: counterAddress,
    functionName: 'increment',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link newTokenAbi}__
 */
export const useWriteNewToken = /*#__PURE__*/ createUseWriteContract({
  abi: newTokenAbi,
  address: newTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link newTokenAbi}__ and `functionName` set to `"createNewToken"`
 */
export const useWriteNewTokenCreateNewToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: newTokenAbi,
    address: newTokenAddress,
    functionName: 'createNewToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link newTokenAbi}__
 */
export const useSimulateNewToken = /*#__PURE__*/ createUseSimulateContract({
  abi: newTokenAbi,
  address: newTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link newTokenAbi}__ and `functionName` set to `"createNewToken"`
 */
export const useSimulateNewTokenCreateNewToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: newTokenAbi,
    address: newTokenAddress,
    functionName: 'createNewToken',
  })
