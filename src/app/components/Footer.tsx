import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'; // Mehr Icons importieren

export default function Footer() {
  // URL und Titel fürs Teilen
  const shareUrl = 'https://www.solanaholderbot.com/';
  const shareTitle = 'Check out Solana Holder Bot!';

  return (
    <footer className="bg-black text-gray-300 py-6 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm leading-relaxed">
          $LEEK is a memecoin that holds no intrinsic value or expectation of financial return. All cryptocurrencies are subject to fluctuations creating a possibility for both profit and losses.
        </p>
        <p className="mt-2 text-sm">
          © Copyright 2025 – All rights reserved by{' '}
          <span className="text-blue-400 font-semibold">$LEEK</span>
        </p>

        {/* Social Sharing Buttons */}
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href={`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`} // Instagram hat kein direktes Sharing, nur Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaPinterest className="text-xl" />
          </a>
          <a
            href={`https://www.youtube.com/shorts?video=${encodeURIComponent(shareUrl)}`} // YouTube hat kein direktes Sharing, nur Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaYoutube className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}