'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent"
        >
          PawnPrizes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-2xl"
        >
          Challenge the world. Compete with your favorite influencers. Place bets. Cash out big.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-6"
        >
          <a
            href="/create-challenge"
            className="px-8 py-3 rounded-2xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors"
          >
            Start a Challenge
          </a>
          <a
            href="/browse-challenges"
            className="px-8 py-3 rounded-2xl border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-colors"
          >
            Browse Challenges
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 pb-32 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800/40 border border-gray-700 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-2 text-yellow-400">Challenge Anyone</h3>
          <p className="text-gray-400">
           Challenge your favorite creators, or the whole world!
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800/40 border border-gray-700 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-2 text-yellow-400">Open Challenges</h3>
          <p className="text-gray-400">
            Post yourself doing fun things!
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800/40 border border-gray-700 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-2 text-yellow-400">Bet Smart</h3>
          <p className="text-gray-400">
            Pick winners and earn tokens by backing the right challengers!
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800/40 border border-gray-700 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-2 text-yellow-400">Cash Out Big</h3>
          <p className="text-gray-400">
            Win bets and exchange tokens for real-world money!
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
