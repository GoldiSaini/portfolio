"use client"

import { useState } from "react"
import Link from "next/link"
import Container from "@/components/common/Container"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-background/60 backdrop-blur-sm border-b border-border">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="inline-block">
            <span className="font-heading text-lg">Goldi Saini</span>
          </Link>
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-border bg-card/90 px-3 py-2 text-sm text-foreground sm:hidden"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="#trust-indicators" className="text-muted-foreground hover:text-foreground">
                  Trust
                </a>
              </li>
              <li>
                <a href="#engineering-philosophy" className="text-muted-foreground hover:text-foreground">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#core-expertise" className="text-muted-foreground hover:text-foreground">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {open ? (
          <nav id="primary-navigation" className="sm:hidden">
            <ul className="mt-3 flex flex-col gap-3 rounded-3xl border border-border bg-card p-4 text-sm">
              <li>
                <a href="#trust-indicators" className="block text-muted-foreground hover:text-foreground">
                  Trust
                </a>
              </li>
              <li>
                <a href="#engineering-philosophy" className="block text-muted-foreground hover:text-foreground">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#core-expertise" className="block text-muted-foreground hover:text-foreground">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#contact" className="block text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </Container>
    </header>
  )
}
