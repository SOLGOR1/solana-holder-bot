export default function Testimonials() {
    const testimonials = [
      {
        quote:
          "We used to run a holder bot where they’d vanish after 7 days – total waste. This bot’s saving us mad cash. Huge props!",
        name: "CryptoShark",
      },
      {
        quote:
          "Thanks to this bot, we stacked enough holders to get verified on JUP – a straight-up moon mission. Shoutout to the team!",
        name: "LunaHodler",
      },
      {
        quote:
          "Legit game-changer. Automated my holder growth like a boss – perfect for any Solana degen out there.",
        name: "SolSniper",
      },
      {
        quote:
          "Bruh, this thing’s insane. Fast, reliable, and the chart is mooning thanks to these new holders!",
        name: "NFTMaverick",
      },
    ];
  
    return (
      <section id="testimonials" className="py-16 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-800/50 rounded-2xl border-4 border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/40 text-center"
              >
                <p className="text-gray-200 italic leading-relaxed group-hover:text-blue-400 transition-colors">
                  "{testimonial.quote}"
                </p>
                <p className="mt-4 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }