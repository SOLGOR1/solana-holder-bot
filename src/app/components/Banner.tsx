import Link from 'next/link';

export default function Banner() {
  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready, to boost your holder count?</h2>
        <Link href="https://t.me/solanaholderbot" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200">
          Start Now
        </Link>
      </div>
    </section>
  );
}