import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Zap,
  Users,
  Brain,
  Shield,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/Logo.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src={Logo}
            alt="CipherGrid Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-purple-400 text-2xl font-bold">CipherGrid</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#how-it-works"
            className="text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#features"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-gray-300 hover:text-white transition-colors"
          >
            FAQ
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:flex">
          Sign In
        </Button>
      </header>

      {/* Hero Content */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Think. Connect. Win.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Unleash your inner spymaster in this thrilling team-based word game
          where strategy and communication are key. Can you give the perfect
          clues to lead your team to victory?
        </p>
        <div className="flex justify-center items-center gap-4">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 group"
          >
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Play Now
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          How The Game Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-900/50 border-gray-800 p-6">
            <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Give Clues
            </h3>
            <p className="text-gray-400">
              As the Spymaster, provide strategic one-word clues to help your
              team identify the correct words while avoiding traps.
            </p>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800 p-6">
            <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Team Play</h3>
            <p className="text-gray-400">
              Work together with your team to decode clues and make strategic
              decisions about which words to choose.
            </p>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800 p-6">
            <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Avoid Traps
            </h3>
            <p className="text-gray-400">
              Be careful! Choose the wrong word and you might help the opposing
              team or worse - hit the game-ending death word.
            </p>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent to-gray-900/50"
      >
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Real-time Gameplay
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Built for Strategic Minds
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="h-8 w-8 rounded bg-purple-600/20 flex items-center justify-center shrink-0">
                <Zap className="h-4 w-4 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Real-time Collaboration
                </h3>
                <p className="text-gray-400">
                  Experience seamless team play with instant updates and live
                  clue-giving through WebSocket connections.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="h-8 w-8 rounded bg-purple-600/20 flex items-center justify-center shrink-0">
                <Star className="h-4 w-4 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Competitive Rankings
                </h3>
                <p className="text-gray-400">
                  Climb the leaderboards and earn achievements as you master the
                  art of word association.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-3xl rounded-3xl" />
            <Card className="relative bg-gray-900/90 border-gray-800">
              <div className="aspect-video rounded-lg overflow-hidden">
                <div className="grid grid-cols-5 gap-2 p-4">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded bg-gray-800/50 hover:bg-purple-600/20 transition-colors cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Thousands of Players
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the thrill of strategic word play with a growing
            community of word game enthusiasts.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="bg-gray-900/50 border-gray-800 p-6">
              <div className="flex gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "CipherGrid brings a fresh twist to word games. The team-based
                gameplay and strategic elements make every match exciting!"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-800" />
                <div>
                  <p className="text-sm font-medium text-white">Player Name</p>
                  <p className="text-xs text-gray-400">Verified Player</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-gray-800 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Test Your Skills?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join the game now and experience the ultimate team-based word
            strategy challenge.
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            Play Now
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={Logo}
                  alt="CipherGrid Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-purple-400 text-xl font-bold">
                  CipherGrid
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                The ultimate team-based word association game.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How to Play
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} CipherGrid. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
