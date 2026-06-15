// src/app/faq/FaqAccordion.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import type { FaqItem } from "./faqData";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-500/30"
          >
            {/* Question = echtes Heading (SEO/A11y), Button liegt darin */}
            <h3 className="m-0">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-inset"
              >
                <span className="text-lg md:text-xl font-semibold text-white pr-4">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <FaChevronDown className="w-5 h-5 text-cyan-400" />
                </motion.span>
              </button>
            </h3>

            {/*
              Antwort ist IMMER im DOM (nie conditional entfernt), nur visuell
              ein-/ausgeklappt. So lesen Crawler und LLMs den Text auch im
              kollabierten Zustand aus dem initialen HTML.
            */}
            <motion.div
              id={`faq-panel-${item.id}`}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-gray-100 text-base leading-relaxed">
                <p>{item.a}</p>

                {item.table && (
                  <table className="mt-4 w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="py-2 text-gray-100">{item.table.headers[0]}</th>
                        <th className="py-2 text-gray-100 text-right">{item.table.headers[1]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.table.rows.map(([label, value]) => (
                        <tr key={label} className="border-b border-white/5">
                          <td className="py-3">{label}</td>
                          <td className="py-3 text-right">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}