"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, FileText } from "lucide-react";
import Logo from "@/components/atoms/logo";

export default function FooterSection() {
  const footerLinks = [
    { name: "Docs", href: "#", icon: FileText },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="lg" className="mb-4" />
            <p className="text-muted-foreground">
              Revolutionizing the valuation and trading of tokenized real-world
              assets through advanced AI technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:flex md:justify-end"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-teal-accent transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-teal-accent transition-colors"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-teal-accent transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-teal-accent transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-teal-accent transition-colors"
                    >
                      API
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-teal-accent transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-teal-accent transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-teal-accent transition-colors"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-teal-accent transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DynamicVault: AI-Priced RWA
            Tokenization Platform. All rights reserved.
          </p>

          <div className="flex space-x-4">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-teal-accent transition-colors flex items-center"
              >
                <link.icon className="h-5 w-5 mr-2" />
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
