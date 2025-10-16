import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
//import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  const { user, isLoading } = useUser();
  const [coins, setCoins] = useState<number>(0);
  const [hasFetchedCoins, setHasFetchedCoins] = useState(false);

  // Fetch user's actual coin balance
  useEffect(() => {
    const fetchCoins = async () => {
      if (!user || hasFetchedCoins) return;

      try {
        const res = await fetch('/api/profile', {
          method: 'GET',
          credentials: 'include',
        });

        if (res.ok) {
          const data = await res.json();
          setCoins(data.coins || 0);
          setHasFetchedCoins(true);
          console.log('[_app] Fetched user coins:', data.coins);
        } else {
          console.warn('[_app] Failed to fetch profile for coins');
          setCoins(0);
        }
      } catch (err) {
        console.error('[_app] Error fetching coins:', err);
        setCoins(0);
      }
    };

    if (!isLoading && user) {
      fetchCoins();
    } else if (!isLoading && !user) {
      // No user logged in - set coins to 0
      setCoins(0);
      setHasFetchedCoins(false);
    }
  }, [user, isLoading, hasFetchedCoins]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar coins={coins} setCoins={setCoins} />
      <main className="flex-grow">
        <Component {...pageProps} coins={coins} setCoins={setCoins} />
      </main>
    </div>
  )
}
