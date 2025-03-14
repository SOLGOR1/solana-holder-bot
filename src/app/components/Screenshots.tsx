import Image from 'next/image';

export default function Screenshots() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">App Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Image src="/screenshot1.png" alt="Screenshot 1" width={300} height={500} className="mx-auto rounded-lg shadow-md" />
          <Image src="/screenshot2.png" alt="Screenshot 2" width={300} height={500} className="mx-auto rounded-lg shadow-md" />
          <Image src="/screenshot3.png" alt="Screenshot 3" width={300} height={500} className="mx-auto rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
}