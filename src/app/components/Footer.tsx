export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Solana Holder Bot. Alle Rechte vorbehalten.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-300 hover:text-white mx-2">Kontakt</a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Impressum</a>
          </div>
        </div>
      </footer>
    );
  }