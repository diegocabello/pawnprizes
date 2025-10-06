import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import { useState } from "react";
//import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  const [coins, setCoins] = useState<number>(5000);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar coins={coins} setCoins={setCoins} />
      <main className="flex-grow">
        <Component {...pageProps} coins={coins} setCoins={setCoins} />
      </main>
    </div>
  )
}
