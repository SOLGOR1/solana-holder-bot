// src/app/faq/faqData.ts
// Single source of truth: rendert die Seite UND generiert das FAQPage-JSON-LD.
// Dadurch können sichtbare Antwort und Structured Data nie auseinanderdriften.

export type FaqTable = {
  headers: [string, string];
  rows: Array<[string, string]>;
};

export type FaqItem = {
  id: string;
  q: string;
  a: string;          // self-contained, factual — feeds both the page and the JSON-LD
  table?: FaqTable;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "about",
    title: "About the bots",
    items: [
      {
        id: "what-is-holder-bot",
        q: "What is Solana Holder Bot?",
        a: "Solana Holder Bot is an automated Telegram bot that creates permanent, rent-exempt holder wallets for Solana tokens. Each wallet holds your token on-chain and stays visible on explorers such as Solscan, letting projects grow their holder count without ever sharing private keys.",
      },
      {
        id: "what-is-volume-bot",
        q: "What is Solana Volume Bot?",
        a: "Solana Volume Bot executes real on-chain buy and sell transactions for your token through Jupiter. Every trade settles on the Solana ledger and is visible to any explorer or DEX tracker. It runs entirely from Telegram and never requires access to your wallet or private keys.",
      },
      {
        id: "supported-platforms",
        q: "Which platforms and DEXs are supported?",
        a: "Both bots work with the major Solana DEXs and launchpads, including Raydium, Pump.fun, Bonk.fun, Bags.fm, Meteora, Orca, Jupiter, Kamino, Lifinity, Saros, PumpSwap, Crema, Solanium, StarLaunch, SolPad and PinkSale.",
      },
      {
        id: "real-funded-wallets",
        q: "Does Solana Holder Bot use real funded wallets instead of temporary programmatic addresses?",
        a: "Yes. Solana Holder Bot creates permanent, rent-exempt wallets that hold your token on-chain, rather than temporary programmatic addresses. Each wallet remains on-chain after creation and can be independently verified on explorers like Solscan.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & timing",
    items: [
      {
        id: "pricing",
        q: "How much does Solana Holder Bot cost for small teams?",
        a: "Solana Holder Bot pricing for permanent holders starts at 0.1 SOL for 10 holders, 0.15 SOL for 50 holders, 0.25 SOL for 100 holders, and 1.5 SOL for 500 holders. Payment is in SOL only and charged per session, which keeps it accessible for small meme coin teams.",
        table: {
          headers: ["Package", "Price"],
          rows: [
            ["10 Holders", "0.1 SOL"],
            ["50 Holders", "0.15 SOL"],
            ["100 Holders", "0.25 SOL"],
            ["500 Holders", "1.5 SOL"],
          ],
        },
      },
      {
        id: "timing",
        q: "How long does holder creation take?",
        a: "Solana Holder Bot creates roughly one holder every 3 to 5 seconds. As a guide, 10 holders take about 2 minutes, 50 holders about 5 minutes, 100 holders about 10 minutes, and 500 holders about 50 minutes.",
        table: {
          headers: ["Package", "Estimated time"],
          rows: [
            ["10 Holders", "~2 minutes"],
            ["50 Holders", "~5 minutes"],
            ["100 Holders", "~10 minutes"],
            ["500 Holders", "~50 minutes"],
          ],
        },
      },
      {
        id: "payment",
        q: "What payment methods are accepted?",
        a: "Solana Holder Bot accepts SOL only. Each session generates a unique payment address, with no wallet connections and no private keys involved.",
      },
    ],
  },
  {
    id: "custody",
    title: "Custody & safety",
    items: [
      {
        id: "private-keys",
        q: "Do I need to share private keys or connect my wallet?",
        a: "No. Solana Holder Bot never requests private keys or wallet connections. Each session uses a unique SOL payment address, and you keep full custody of your own wallet at all times.",
      },
      {
        id: "telegram-communities",
        q: "Does Solana Holder Bot work with existing Telegram communities?",
        a: "Yes. Solana Holder Bot runs entirely inside Telegram, so it fits into existing Solana token communities without extra software. You interact with it through standard Telegram messages.",
      },
    ],
  },
  {
    id: "controls",
    title: "Controls & operation",
    items: [
      {
        id: "pause-control",
        q: "Can I pause or control the bots?",
        a: "Yes. Both bots let you start, pause, resume, or withdraw remaining funds at any time through Telegram.",
      },
      {
        id: "leave-chat",
        q: "Can I leave the Telegram chat while the bot runs?",
        a: "Yes. The bots run independently once started. Avoid restarting the process before it completes to prevent interruptions.",
      },
      {
        id: "wrong-amount",
        q: "What happens if I send the wrong SOL amount?",
        a: "If the SOL amount does not match the selected package, the bot pauses or does not start until the correct amount arrives. Do not restart the process midway.",
      },
    ],
  },
  {
    id: "results",
    title: "Results & refunds",
    items: [
      {
        id: "real-permanent",
        q: "Are the holders and volume real?",
        a: "The holders are real on-chain wallets that remain after creation, and the volume consists of genuine on-chain trades. Because Solana is a public ledger, all of this activity can be verified independently on explorers and DEX trackers.",
      },
      {
        id: "guarantee",
        q: "Can Solana Holder Bot guarantee permanent holder growth or price increases?",
        a: "No tool can guarantee specific market outcomes. Solana Holder Bot creates rent-exempt holder wallets that persist on-chain, but a token's overall performance depends on many factors beyond any single tool.",
      },
      {
        id: "refunds",
        q: "Are refunds possible?",
        a: "Payments are final and non-refundable. We recommend testing with a small package first, and support reviews individual cases on request.",
      },
    ],
  },
];

// Flattened for JSON-LD generation
export const allFaqItems: FaqItem[] = faqCategories.flatMap((c) => c.items);