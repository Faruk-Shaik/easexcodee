"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Timer,
  BellRing,
  ShieldCheck,
  Smartphone,
  BadgeCheck,
  Building2,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Check,
  Phone,
} from "lucide-react";

// Single-file landing page component (Tailwind + framer-motion)
// Replace placeholders like BRAND, phone/email, and the demo video URL.

const BRAND = "easeX"; // <- rename // <- rename

const FEATURES = [
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "WhatsApp-first. No new app for customers",
    desc: "Valet enters the number once. Guests get a WhatsApp message with a single button: “Get my car.”",
  },
  {
    icon: <BellRing className="h-5 w-5" />,
    title: "Instant valet notification",
    desc: "When the guest taps the button, your valet app gets alerted so the car is ready by the time they reach the gate.",
  },
  {
    icon: <Timer className="h-5 w-5" />,
    title: "Faster exits, happier customers",
    desc: "Reduce the ‘waiting outside’ chaos during peak hours. Improve experience without adding staff.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Clear logs & accountability",
    desc: "Track car received → requested → delivered with timestamps. Reduce disputes and missed handovers.",
  },
];

const STEPS = [
  {
    title: "Car arrives",
    desc: "Valet enters mobile number + car details in a simple app.",
  },
  {
    title: "Guest gets WhatsApp",
    desc: "Automated message with valet token and a single CTA: “Get my car.”",
  },
  {
    title: "Guest taps before leaving",
    desc: "One tap from the table—no calls, no shouting numbers outside.",
  },
  {
    title: "Valet prepares car",
    desc: "Valet receives a notification and gets the vehicle ready.",
  },
];

const FAQS = [
  {
    q: "Do customers need to install anything?",
    a: "No. Customers only receive a WhatsApp message. One tap is enough.",
  },
  {
    q: "What if WhatsApp message doesn’t arrive?",
    a: "We can add an SMS fallback, and you can also share a short link at the counter.",
  },
  {
    q: "Will this slow down valet at entry?",
    a: "No. Taking a phone number is already standard. The app is designed for quick entry (under 10 seconds).",
  },
  {
    q: "Can this work with outsourced valet teams?",
    a: "Yes. You can onboard outsourced staff with a supervisor view and role-based access.",
  },
  {
    q: "What about privacy & data security?",
    a: "Only minimal details are collected. Access is restricted to authorized staff, and logs are auditable.",
  },
];

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/70 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Input({ label, ...props }) {
  return (
    <label className="block">
      <div className="mb-1 text-sm font-medium text-black/80">{label}</div>
      <input
        {...props}
        className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none ring-0 placeholder:text-black/35 focus:border-black/25"
      />
    </label>
  );
}

function TextArea({ label, ...props }) {
  return (
    <label className="block">
      <div className="mb-1 text-sm font-medium text-black/80">{label}</div>
      <textarea
        {...props}
        className="min-h-[110px] w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none ring-0 placeholder:text-black/35 focus:border-black/25"
      />
    </label>
  );
}

function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={classNames(
        "inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:opacity-85",
        className
      )}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={classNames(
        "inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-black shadow-sm backdrop-blur transition hover:bg-white hover:border-teal-200",
        className
      )}
    >
      {children}
    </button>
  );
}

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    outlet: "",
    city: "",
    phone: "",
    message: "",
  });

  const demoVideoUrl = useMemo(
    () => "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0", // <- replace with your Loom/YouTube demo
    []
  );

  const waLink = useMemo(
    () =>
      "https://wa.me/917674864964?text=" +
      encodeURIComponent(
        "Hi! I want a demo of the WhatsApp valet flow for my restaurant."
      ),
    []
  );

  const onChange = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  return (
    <div className="min-h-screen bg-[#fafafa] text-black">
      {/* Top gradient */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[520px] bg-gradient-to-b from-teal-500/[0.10] via-indigo-500/[0.06] to-transparent" />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#fafafa]/75 backdrop-blur supports-[backdrop-filter]:bg-[#fafafa]/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="leading-tight">
              <div className="text-base font-extrabold tracking-tight">
                <span className="text-black">ease</span>
                <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text font-black text-transparent">X</span>
              </div>
              <div className="text-xs text-black/55">experiences, without friction</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-black/65 md:flex">
          <a className="hover:text-black" href="#how-it-works">
              How it works
            </a>
            <a className="hover:text-black transition" href="#features">
              Features
            </a>
            <a className="hover:text-black transition" href="#demo">
              Demo
            </a>
            <a className="hover:text-black transition" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-black transition" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden md:block">
              <GhostButton>
                Book a demo <ArrowRight className="h-4 w-4" />
              </GhostButton>
            </a>
            <a href="tel:+917674864964" className="hidden sm:block">
              <GhostButton>
                Call <Phone className="h-4 w-4" />
              </GhostButton>
            </a>
            <a href={waLink} target="_blank" rel="noreferrer">
              <Button>
                WhatsApp us <MessageCircle className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
  {/* ultra subtle grain */}
  <div className="pointer-events-none absolute inset-0 -z-20 opacity-[0.07] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* subtle hero blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
          <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Pill>
                  <Sparkles className="h-4 w-4" />
                  WhatsApp-first valet experience
                </Pill>
                <Pill>
                  <Building2 className="h-4 w-4" />
                  Built for India’s peak-hour rush
                </Pill>
                <Pill>
                  <Smartphone className="h-4 w-4" />
                  No QR scanning required
                </Pill>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl"
                >
                Let guests call their car from WhatsApp—
                <span className="text-black/70"> so it’s ready when they reach the gate.</span>
              </motion.h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-black/70">
                Reduce exit-time chaos at busy restaurants. Valet captures the WhatsApp number once.
                Guests get a simple button: <span className="font-semibold">Get my car</span>. Your valet team gets notified instantly.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#demo">
                  <Button className="w-full sm:w-auto">
                    Watch the demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <GhostButton className="w-full sm:w-auto">
                    Get a pilot quote <BadgeCheck className="h-4 w-4" />
                  </GhostButton>
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold">10–30%</div>
                  <div className="mt-1 text-xs text-black/60">faster car delivery at peak hours*</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold">0 installs</div>
                  <div className="mt-1 text-xs text-black/60">for customers (WhatsApp only)</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold">Full logs</div>
                  <div className="mt-1 text-xs text-black/60">receive → request → deliver</div>
                </div>
              </div>

              <p className="mt-3 text-xs text-black/45">*Estimate depends on outlet & valet process. We validate during pilot.</p>
            </div>

            {/* Right side mock */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative"
            >
              {/* Phone frame */}
              <div className="mx-auto max-w-md rounded-[2.25rem] border border-black/10 bg-white p-3 shadow-sm">
                <div className="rounded-[2rem] border border-black/10 bg-black/[0.02] p-3">
                  {/* Notch */}
                  <div className="mx-auto mb-3 h-6 w-32 rounded-full bg-black/10" />

                  {/* WhatsApp Header */}
                  <div className="flex items-center justify-between rounded-2xl bg-[#075E54] px-4 py-3 text-white shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-semibold">easeX Valet</div>
                        <div className="text-[11px] text-white/80">online</div>
                      </div>
                    </div>
                    <div className="text-[11px] text-white/75">12:18 PM</div>
                  </div>

                  {/* Chat area */}
                  <div className="mt-3 rounded-2xl bg-[#ECE5DD] p-4">
                    {/* Date pill */}
                    <div className="mx-auto mb-3 w-fit rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-black/60 shadow-sm">
                      Today
                    </div>

                    <div className="space-y-3">
                      {/* Incoming bubble */}
                      <div className="flex justify-start">
                        <div className="max-w-[88%] rounded-2xl bg-white px-4 py-3 text-sm text-black/80 shadow-sm">
                          <div className="font-semibold">Welcome to XYZ Restaurant 🚗🍽️</div>
                          <div className="mt-1 text-xs text-black/60">
                            Valet token: <span className="font-semibold">V128</span> • Car: KA01AB1234
                          </div>
                          <div className="mt-2 text-xs text-black/50">Tap the button when you’re ready to leave.</div>
                          <div className="mt-2 text-[11px] text-black/45 text-right">12:18 PM</div>
                        </div>
                      </div>

                      {/* Outgoing-style CTA bubble */}
                      <div className="flex justify-end">
                        <div className="max-w-[88%] rounded-2xl bg-[#DCF8C6] px-4 py-3 text-sm text-black/85 shadow-sm">
                          <div className="text-sm">Ready to go?</div>
                          <div className="mt-2">
                            <span className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-3 py-2 text-xs font-semibold text-white shadow-sm">
                              Get my car <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                          <div className="mt-2 text-[11px] text-black/45 text-right">12:47 PM</div>
                        </div>
                      </div>

                      {/* Valet acknowledgement */}
                      <div className="flex justify-start">
                        <div className="max-w-[88%] rounded-2xl bg-white px-4 py-3 text-sm text-black/80 shadow-sm">
                          ✅ Request received. Your car is being prepared.
                          <div className="mt-2 text-[11px] text-black/45 text-right">12:47 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="mt-3 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04]">
                      <Sparkles className="h-4 w-4 text-black/60" />
                    </div>
                    <div className="flex-1 rounded-xl bg-black/[0.03] px-3 py-2 text-xs text-black/45">
                      Message…
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Small callout */}
              {/* <div className="absolute bottom-6 left-6 hidden rounded-3xl border border-black/10 bg-white p-4 shadow-sm md:block">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Timer className="h-4 w-4" /> Peak-hour relief
                </div>
                <div className="mt-1 text-xs text-black/60">Less waiting outside, fewer disputes.</div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos / Social proof placeholder */}
      <section className="border-y border-black/10 bg-white -mt-6">
      <div className="mx-auto max-w-6xl px-4 py-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm font-semibold text-black/80">Perfect for</div>
            <div className="flex flex-wrap gap-2">
              <Pill>Breweries</Pill>
              <Pill>Rooftops</Pill>
              <Pill>High-footfall cafés</Pill>
              <Pill>Mall outlets</Pill>
              <Pill>Destination restaurants</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">How it works</h2>
          <p className="mt-2 text-base text-black/70">
            A simple flow built for India’s on-ground reality: minimal steps for valet, zero friction for guests.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {STEPS.map((s, idx) => (
            <div key={s.title} className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm">
              {/* <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-black/50">Step {idx + 1}</div>
                <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-black/[0.04] text-xs font-bold text-black/60">
                {idx + 1}
                </div>
              </div> */}
              <div className="flex items-center justify-between">
  <div className="text-xs font-semibold text-black/50">Step {idx + 1}</div>
  <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-black/[0.04] text-black/70">
    {idx === 0 && <Car className="h-4 w-4" />}
    {idx === 1 && <MessageCircle className="h-4 w-4" />}
    {idx === 2 && <BellRing className="h-4 w-4" />}
    {idx === 3 && <Check className="h-4 w-4" />}
  </div>
</div>
              <div className="mt-3 text-base font-bold">{s.title}</div>
              <div className="mt-1 text-sm text-black/65">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Features</h2>
            <p className="mt-2 text-base text-black/70">
              Designed for real-world valet ops: speed, clarity, and accountability.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-3xl border border-black/10 bg-[#fafafa] p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-base font-bold">{f.title}</div>
                    <div className="mt-1 text-sm text-black/65">{f.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-black p-8 text-white">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <div className="text-xl font-extrabold">Want to add table queue later?</div>
                <p className="mt-2 text-white/75">
                  Start with valet WhatsApp flow today. Add table queue management when you’re ready—same guest experience, same number.
                </p>
              </div>
              <div className="flex md:justify-end">
                <a href="#contact">
                  <Button className="bg-white text-black hover:opacity-95">
                    Start a pilot <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">See the end-to-end demo</h2>
            <p className="mt-2 text-base text-black/70">
              This is what your guest sees on WhatsApp—and what your valet team sees on their app.
            </p>

            <div className="mt-6 space-y-3">
              {["Guest receives valet token on WhatsApp", "Guest taps “Get my car” from the table", "Valet app gets a request notification", "Car is prepared before guest reaches gate"].map((x) => (
                <div key={x} className="flex items-start gap-2">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                    <Check className="h-3 w-3" />
                  </div>
                  <div className="text-sm text-black/70">{x}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={waLink} target="_blank" rel="noreferrer">
                <Button className="w-full sm:w-auto">
                  WhatsApp for demo <MessageCircle className="h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <GhostButton className="w-full sm:w-auto">
                  Get a callback <Phone className="h-4 w-4" />
                </GhostButton>
              </a>
            </div>
          </div>

          {/* <div className="rounded-3xl border border-black/10 bg-white p-3 shadow-sm">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <iframe
                className="h-full w-full"
                src={demoVideoUrl}
                title="Demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="px-3 pb-3 pt-4">
              <div className="text-sm font-semibold">Demo video</div>
              <div className="mt-1 text-xs text-black/60">
                Replace this embed link with your recorded walkthrough (60–90 seconds works best).
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Simple pricing for quick pilots</h2>
            <p className="mt-2 text-base text-black/70">
              Start small, prove impact, then scale.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-black/10 bg-[#fafafa] p-6">
              <div className="text-sm font-semibold text-black/70">Pilot</div>
              <div className="mt-2 text-3xl font-extrabold">₹0</div>
              <div className="mt-1 text-sm text-black/60">for 14 days</div>
              <ul className="mt-5 space-y-2 text-sm text-black/70">
                {["WhatsApp guest flow", "Valet app (basic)", "Token + logs", "Onboarding & training"].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4" /> {x}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 block">
                <Button className="w-full">Start pilot</Button>
              </a>
            </div>

            <div className="rounded-3xl border border-black bg-black p-6 text-white">
              <div className="text-sm font-semibold text-white/80">Standard</div>
              <div className="mt-2 text-3xl font-extrabold">₹4,999</div>
              <div className="mt-1 text-sm text-white/70">per outlet / month</div>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                {["Everything in Pilot", "Peak-hour performance tuning", "SMS fallback", "Monthly reports"].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4" /> {x}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 block">
                <Button className="w-full bg-white text-black">Get started</Button>
              </a>
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#fafafa] p-6">
              <div className="text-sm font-semibold text-black/70">Custom</div>
              <div className="mt-2 text-3xl font-extrabold">Talk to us</div>
              <div className="mt-1 text-sm text-black/60">chains & valet vendors</div>
              <ul className="mt-5 space-y-2 text-sm text-black/70">
                {["Multi-outlet dashboard", "Role-based access", "SLA monitoring", "Integrations (POS/CRM)"].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4" /> {x}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 block">
                <GhostButton className="w-full">Request pricing</GhostButton>
              </a>
            </div>
          </div>

          <div className="mt-5 text-xs text-black/45">
            Pricing is placeholder—adjust to your strategy. Pilot is the fastest way to close your first 3 customers.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">FAQ</h2>
          <p className="mt-2 text-base text-black/70">The questions restaurant owners usually ask first.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none text-base font-bold">
                <div className="flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-black/50 group-open:rotate-180 transition">▾</span>
                </div>
              </summary>
              <div className="mt-3 text-sm text-black/70">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Get a pilot in your outlet</h2>
              <p className="mt-2 text-base text-black/70">
                Share your details—we’ll set up the WhatsApp flow and train your valet team.
              </p>

              <div className="mt-6 rounded-3xl border border-black/10 bg-[#fafafa] p-6">
                <div className="text-sm font-semibold">What you’ll get in the pilot</div>
                <div className="mt-4 space-y-3">
                  {["Branded WhatsApp message template", "Valet app access (basic)", "Token + timestamp logs", "Weekly impact summary"].map(
                    (x) => (
                      <div key={x} className="flex items-start gap-2">
                        <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                          <Check className="h-3 w-3" />
                        </div>
                        <div className="text-sm text-black/70">{x}</div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={waLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto">
                    Message on WhatsApp <MessageCircle className="h-4 w-4" />
                  </Button>
                </a>
                <GhostButton
                  className="w-full sm:w-auto"
                  onClick={() => {
                    // Replace with your calendar link (Calendly, etc.)
                    window.location.href = "tel:+917674864964";
                  }}
                >
                  Call now <ArrowRight className="h-4 w-4" />
                </GhostButton>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Hook this up to your form backend (Formspree, Tally, Google Forms, etc.)
                alert(
                  "Form submitted (demo). Connect this to your backend like Formspree/Tally/Google Forms."
                );
              }}
              className="rounded-3xl border border-black/10 bg-[#fafafa] p-6"
            >
              <div className="text-sm font-semibold">Request a demo</div>
              <div className="mt-4 grid gap-3">
                <Input label="Your name" placeholder="Rex" value={form.name} onChange={onChange("name")} />
                <Input label="Restaurant / outlet" placeholder="XYZ Restaurant" value={form.outlet} onChange={onChange("outlet")} />
                <div className="grid gap-3 sm:grid-cols-2">
                  <Input label="City" placeholder="Bengaluru" value={form.city} onChange={onChange("city")} />
                  <Input label="Phone (WhatsApp)" placeholder="+91" value={form.phone} onChange={onChange("phone")} />
                </div>
                <TextArea
                  label="Anything we should know?"
                  placeholder="E.g., average cars per day, valet team size, peak hours…"
                  value={form.message}
                  onChange={onChange("message")}
                />
                <Button type="submit" className="w-full">
                  Request demo <ArrowRight className="h-4 w-4" />
                </Button>
                <div className="text-xs text-black/50">
                  By submitting, you agree to be contacted about the pilot. We collect minimal info and do not spam.
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <div>
                <div className="text-base font-extrabold tracking-tight">
                  <span className="text-black">ease</span>
                  <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text font-black text-transparent">X</span>
                </div>
                <div className="text-xs text-black/55">experiences, without friction</div>
              </div>
            </div>

            {/* <div className="text-xs text-black/55">
              © {new Date().getFullYear()} {BRAND}. All rights reserved.
            </div> */}

<div className="flex flex-col gap-2 text-xs text-black/55 md:items-end">
  <div>
    📞 <a href="tel:+917674864964" className="hover:text-black transition">
      +91 76748 64964
    </a>
  </div>
  <div>
    💬 WhatsApp available
  </div>
  <div>
    © {new Date().getFullYear()} {BRAND}. All rights reserved.
  </div>
</div>

          </div>
        </div>
      </footer>
      <a
  href={waLink}
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:opacity-95 active:opacity-85"
>
  <MessageCircle className="h-4 w-4" />
  WhatsApp
</a>

    </div>
  );
}

