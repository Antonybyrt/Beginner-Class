import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { useToken } from "../hooks/useToken";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function CreateYourToken() {
  const { isCreating, isCreateConfirmed, handleCreateToken, isConnected } = useToken();
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && symbol) {
      await handleCreateToken(name, symbol);
    }
  };

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen bg-gray-50 dark:bg-gray-900`}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 w-full max-w-5xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Créer votre Token ERC20
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-xl">
                Personnalisez et déployez votre propre token sur le réseau Ethereum
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="peer w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-blue-500 focus:ring-0 text-gray-900 dark:text-white placeholder-transparent"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 px-1 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
                  >
                    Nom du Token
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="symbol"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    className="peer w-full px-4 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-blue-500 focus:ring-0 text-gray-900 dark:text-white placeholder-transparent"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="symbol"
                    className="absolute left-4 -top-2.5 px-1 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
                  >
                    Symbole du Token
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-lg"
              >
                {isCreating ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Création en cours...
                  </span>
                ) : (
                  "Créer le Token"
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 