"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="bg-black text-white px-7 py-5 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="/" className="text-4xl font-bold hover:text-gray-300">
          InVestate
        </a>

        <div className="hidden md:flex gap-6 text-lg items-center">
          <a href="/" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="/services" className="hover:text-gray-300 transition-colors">
            Services
          </a>
          <a href="/blog" className="hover:text-gray-300 transition-colors">
            Blog
          </a>
          
          {user ? (
            <>
              <a href="/dashboard" className="hover:text-gray-300 transition-colors">
                Dashboard
              </a>
              <button
                onClick={handleLogout}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <a 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
            >
              Login
            </a>
          )}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-base px-7 pb-4">
          <a href="/" className="hover:text-gray-300 transition-colors py-2" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/about" className="hover:text-gray-300 transition-colors py-2" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="/services" className="hover:text-gray-300 transition-colors py-2" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="/blog" className="hover:text-gray-300 transition-colors py-2" onClick={() => setMenuOpen(false)}>
            Blog
          </a>
          
          {user ? (
            <>
              <a href="/dashboard" className="hover:text-gray-300 transition-colors py-2" onClick={() => setMenuOpen(false)}>
                Dashboard
              </a>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-left transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <a 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-left transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </a>
          )}
        </div>
      )}
    </nav>
  );
}