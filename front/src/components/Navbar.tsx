import { ConnectButton } from "thirdweb/react";
import { thirdwebClient } from "../config/wagmiClient";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const isCreatePage = router.pathname === "/createYourToken";

  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Image
              src="/eth.png"
              alt="Ethereum Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Prise en main de Ethereum
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            {!isCreatePage ? (
              <Link
                href="/createYourToken"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300"
              >
                Créer un Token
              </Link>
            ) : (
              <Link
                href="/"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300"
              >
                Retour
              </Link>
            )}
            <ConnectButton client={thirdwebClient} />
          </div>
        </div>
      </div>
    </nav>
  );
}; 