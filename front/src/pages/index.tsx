import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { useCounter } from "../hooks/useCounter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { number, isIncrementing, isDecrementing, handleIncrement, handleDecrement, isConnected } = useCounter();

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen bg-gray-50 dark:bg-gray-900`}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 w-full max-w-5xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Découverte de la blockchain Ethereum
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-xl">
                Interagissez avec le smart contract Counter sur le réseau Ethereum
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Actions</h3>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Valeur actuelle</p>
                    <p className="text-4xl font-bold text-gray-900 dark:text-white">{number}</p>
                  </div>
                  <button
                    onClick={handleIncrement}
                    className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                  >
                    {isIncrementing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Incrémentation en cours...
                      </span>
                    ) : (
                      "Incrémenter"
                    )}
                  </button>
                  <button
                    onClick={handleDecrement}
                    className="w-full px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
                  >
                    {isDecrementing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Décrémentation en cours...
                      </span>
                    ) : (
                      "Décrémenter"
                    )}
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Informations</h3>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Réseau</p>
                    <p className="text-xl font-medium text-gray-900 dark:text-white">Sepolia Testnet</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Smart Contract</p>
                    <p className="text-xl font-medium text-gray-900 dark:text-white">Counter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
