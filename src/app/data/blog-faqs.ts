// src/app/data/blog-faqs.ts
//
// FAQ data for the Solana 2026 cluster, keyed by post slug. These feed the
// FAQPage JSON-LD. They mirror the FAQ blocks rendered in the MDX bodies --
// keep both in sync if you edit them.

import type { BlogFaq } from "../../lib/structured-data";

export const blogFaqs: Record<string, BlogFaq[]> = {
  "solana-2026-network-upgrades": [
    {
      "question": "What are the biggest Solana upgrades in 2026?",
      "answer": "The four most consequential are Firedancer (a second, independent validator client), Alpenglow (a consensus rewrite targeting roughly 100 to 150 ms finality), the maturing local fee market and priority-fee model, and ongoing block-capacity increases that raise sustained throughput."
    },
    {
      "question": "Is Solana getting faster in 2026?",
      "answer": "Yes. Real-world throughput has risen from roughly 1,700 transactions per second in mid-2025 to several thousand per second in 2026, block compute limits have been raised, and the planned Alpenglow upgrade targets sub-150 ms finality versus about 12.8 seconds today."
    },
    {
      "question": "Is Alpenglow live on Solana mainnet yet?",
      "answer": "Not as of mid-2026. Alpenglow (SIMD-0326) passed governance in September 2025 and went live on a community test cluster in May 2026, but mainnet activation is expected later in 2026 after further client releases, testing, and security audits."
    },
    {
      "question": "Does any of this change how SOL works as a token?",
      "answer": "No. Firedancer is validator software, not a protocol change, and SOL economics are unchanged. Alpenglow adjusts how validator votes are handled and introduces related economic proposals, but it does not change SOL issuance mechanics in the core consensus SIMD."
    }
  ],
  "what-is-firedancer": [
    {
      "question": "What is Firedancer in simple terms?",
      "answer": "Firedancer is a new Solana validator client built from scratch by Jump Crypto in C and C++. It does the same job as Solana's original Agave client but is an entirely separate codebase, which gives the network client diversity and a much higher performance ceiling."
    },
    {
      "question": "What is the difference between Firedancer and Frankendancer?",
      "answer": "Frankendancer is a hybrid that pairs Firedancer's high-performance networking and block-production code with Agave's proven consensus and execution. Full Firedancer is the completely independent client with no Agave code. Frankendancer shipped first to de-risk the rollout."
    },
    {
      "question": "Is Firedancer live on Solana mainnet?",
      "answer": "Frankendancer has run on testnet and mainnet-beta since 2024. The fully independent Firedancer client has begun a cautious, staged mainnet rollout and has produced live blocks, but broad validator migration is intentionally gradual until security audits are complete."
    },
    {
      "question": "Does Firedancer change SOL or how transactions work?",
      "answer": "No. Firedancer is validator software, not a protocol change. SOL economics and transaction rules are identical regardless of which client a validator runs. Firedancer only changes how efficiently a validator processes the network."
    },
    {
      "question": "How fast is Firedancer?",
      "answer": "In demonstrations on commodity hardware, Firedancer has processed more than one million transactions per second, and the hybrid Frankendancer has shown several hundred thousand transactions per second in live conditions. Real mainnet throughput is far lower because it is limited by demand and protocol block limits, not the client."
    }
  ],
  "what-is-alpenglow": [
    {
      "question": "What is Alpenglow on Solana?",
      "answer": "Alpenglow is Solana's consensus upgrade, formalized as SIMD-0326. It replaces Proof of History and Tower BFT (as consensus mechanisms) with a new direct-voting protocol called Votor, reducing deterministic finality from about 12.8 seconds to roughly 100 to 150 milliseconds and moving validator votes off-chain."
    },
    {
      "question": "How fast is Alpenglow finality?",
      "answer": "Alpenglow targets roughly 100 to 150 ms deterministic finality. A fast path can finalize at about 100 ms when validators representing at least 80 percent of stake agree in a single round, and a slow path finalizes at about 150 ms with at least 60 percent agreement across two rounds."
    },
    {
      "question": "Does Alpenglow remove Proof of History?",
      "answer": "It removes Proof of History as a consensus mechanism, replacing it with a fixed roughly 400 ms block time plus local timeout timers on each validator. The 400 ms slot cadence itself does not change. Proof of History no longer governs ordering or finality once Alpenglow activates."
    },
    {
      "question": "Is Alpenglow live on mainnet?",
      "answer": "Not as of mid-2026. Alpenglow passed governance in September 2025 with 98.27 percent approval and went live on a community test cluster in May 2026, including a live migration test. Mainnet activation is expected later in 2026 after further client releases, testing, and audits."
    },
    {
      "question": "How does Alpenglow change block space and fees?",
      "answer": "By moving validator votes off-chain, Alpenglow removes vote transactions that today consume roughly three-quarters of block space. That frees capacity for user transactions, which can ease congestion and reduce fee pressure during busy periods."
    }
  ],
  "solana-transaction-fees-local-fee-markets": [
    {
      "question": "How much does a Solana transaction cost?",
      "answer": "Every transaction pays a base fee of 5,000 lamports (0.000005 SOL) per signature, which is a fraction of a cent at typical SOL prices. An optional priority fee is added on top to improve ordering during congestion. Even in busy periods, total fees usually stay well under one cent."
    },
    {
      "question": "What is a local fee market on Solana?",
      "answer": "A local fee market means fee pressure attaches to the specific writable accounts a transaction touches, not the whole network. If a token launch congests one pool's accounts, transactions touching unrelated accounts still pay almost nothing. This is structurally different from Ethereum's global gas market."
    },
    {
      "question": "Why do Solana transactions fail or get dropped?",
      "answer": "There are four common causes: the priority fee was too low to win the transaction's local fee market, the compute budget was set incorrectly, the slot was congested so the packet never reached the leader, or the blockhash expired before inclusion. The last two are usually infrastructure issues, not fee issues."
    },
    {
      "question": "How is the Solana priority fee calculated?",
      "answer": "Priority fee in lamports equals the ceiling of compute-unit price (in micro-lamports) times the compute-unit limit you request, divided by 1,000,000. It scales with the compute-unit limit you request, not the compute you actually use, and 100 percent of it goes to the validator."
    },
    {
      "question": "What is the difference between a priority fee and a Jito tip?",
      "answer": "A priority fee is a native scheduler signal that improves your ordering inside the leader's normal transaction queue. A Jito tip is a separate payment for bundle inclusion through an auction path, used when you need atomic execution. They are not interchangeable, and using the wrong one wastes money."
    }
  ],
  "solana-throughput-tps-2026": [
    {
      "question": "How many transactions per second can Solana do?",
      "answer": "Sustained real-world throughput rose from roughly 1,700 transactions per second in mid-2025 toward several thousand per second in 2026. Stress tests have briefly exceeded 100,000 transactions per second, and the Firedancer client has demonstrated over one million per second in testing, though that is a hardware ceiling rather than typical mainnet load."
    },
    {
      "question": "What is Solana's block limit?",
      "answer": "The per-block compute limit was raised to 60 million compute units in mid-2025 via SIMD-0256. Further proposals are in progress: SIMD-0286 to raise it toward 100 million, and SIMD-0370 to remove the static cap entirely so blocks scale with the most performant validators."
    },
    {
      "question": "Why are Solana's TPS numbers confusing?",
      "answer": "Historically a large share of Solana transactions were validator votes, which inflated raw TPS figures relative to actual user activity. The Alpenglow upgrade moves votes off-chain, so headline TPS numbers measured before and after activation are not directly comparable."
    },
    {
      "question": "How long is a Solana slot?",
      "answer": "A Solana slot is roughly 400 milliseconds, and an epoch is about 432,000 slots, which works out to roughly two to three days. The slot cadence itself is not changing under the planned 2026 consensus upgrade."
    },
    {
      "question": "What limits Solana's throughput, the software or the hardware?",
      "answer": "Increasingly the protocol's block limits and validator hardware, not the client software. The Firedancer client can process far more than current block limits allow, which is why proposals like SIMD-0370 aim to let block size scale with validator capacity rather than a fixed cap."
    }
  ]
};