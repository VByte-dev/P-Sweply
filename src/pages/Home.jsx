import React, { useState } from "react";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: "Is it free to start?", a: "Yes! You can start sweeping thoughts anytime for free." },
    { q: "Do I need to sign up?", a: "Sign up is optional to start, but required to save your archive & reflect later." },
    { q: "Are my thoughts private?", a: "Absolutely. Your thoughts stay secure and only visible to you." },
    { q: "How is this better than a notebook?", a: "Sweply isn’t just storage — it’s built for reflection: tag, archive, and revisit to see patterns over time." },
    { q: "Does Sweply work on mobile?", a: "Yes, it’s fully responsive on phones, tablets, and desktops." },
    { q: "Can I export my thoughts?", a: "Exporting is coming soon, so you can keep your reflections offline too." },
  ];

  return (
    <div className="mx-4 mt-20 sm:mt-24 md:mt-28 lg:mt-32 flex flex-col min-h-screen">
      {/* 🪶 Hero Section */}
      <h1 className="font-bricolage text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center leading-snug sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40">
        <span className="text-[#3A86FF]">Overthinking? Cluttered mind? </span>
        <span className="text-black">Sweply helps you unload thoughts now & reflect deeper later.</span>
      </h1>

      <div className="text-center mt-4 sm:mt-6">
        <h2 className="font-bricolage text-zinc-600 font-extralight inline-block px-4 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-xs sm:text-sm md:text-base">
          🧹 Clear your mind. Discover patterns. Grow.
        </h2>
      </div>

      <p className="font-space text-center mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-700">
        Unlike plain notes, Sweply is built for reflection: drop your thoughts, tag them, and revisit anytime to see what really matters.
      </p>

      <div className="flex justify-center mt-6 sm:mt-8">
        <button className="w-full sm:w-auto px-6 bg-[#3A86FF] font-space text-white rounded py-2 text-sm sm:text-base active:bg-[#3a51ff]">
          Start reflecting today
        </button>
      </div>

      {/* 🪶 How it Works */}
      <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40">
        <h2 className="font-bricolage text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8">
          🪶 How Sweply turns thoughts into insight
        </h2>
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {[
            "Dump your thoughts instantly",
            "Tag to add context",
            "Sweep them, stay light",
            "Reflect & see patterns",
          ].map((step, i) => (
            <div
              key={i}
              className="border border-zinc-200 bg-zinc-100 rounded px-4 py-6 text-center"
            >
              <h3 className="font-bricolage text-md sm:text-lg md:text-xl">{`${i + 1}. ${step}`}</h3>
              <p className="font-space text-xs sm:text-sm md:text-base mt-2 text-zinc-700">
                {i === 0 && "✏️ Quickly unload ideas, worries, or inspirations before you forget."}
                {i === 1 && "🏷️ Tag each thought (Idea, Emotion, Reflection) to keep your archive meaningful."}
                {i === 2 && "🧹 Sweep processed thoughts away — keep your mind space clean."}
                {i === 3 && "🔍 Revisit anytime to reflect, see patterns & grow — far beyond raw notes."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Why Sweply is different */}
      <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40">
        <h2 className="font-bricolage text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          More than just note-taking
        </h2>
        <p className="font-space text-center text-sm sm:text-base md:text-lg text-zinc-700 max-w-3xl mx-auto">
          Notebooks store words. Sweply transforms them into organized reflections — so you feel lighter now and gain clarity tomorrow.
        </p>
      </section>

      {/* 📸 Demo */}
      <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40 text-center">
        <h2 className="font-bricolage text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
          🎥 See how reflection becomes effortless
        </h2>
        <div className="bg-zinc-200 h-48 sm:h-60 md:h-72 lg:h-80 rounded-xl flex items-center justify-center">
          <span className="font-space text-zinc-500">[ Demo video / screenshot here ]</span>
        </div>
      </section>

      {/* 🙋‍♂️ Founder / Story */}
      <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40">
        <h2 className="font-bricolage text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          🙋‍♂️ Why I built Sweply
        </h2>
        <p className="font-space text-sm sm:text-base md:text-lg text-zinc-700 max-w-3xl mx-auto">
          As a solo maker, I struggled with scattered thoughts. Sweply isn’t just storage — it’s a space to unload now and reflect deeply later. It keeps me light, creative, and focused.
        </p>
        <p className="text-end font-space text-zinc-600 mt-4">~ VByte</p>
      </section>

      {/* 📌 FAQ */}
      <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-40">
        <h2 className="font-bricolage text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 bg-zinc-100 rounded px-4 py-3"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center font-bricolage text-left text-sm sm:text-base md:text-lg"
              >
                {item.q}
                <span className="ml-2 text-black">{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <p className="mt-2 font-space text-xs sm:text-sm md:text-base text-zinc-700">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 flex justify-center">
        <div className="bg-zinc-100 border border-zinc-200 rounded-3xl text-center px-6 py-10 max-w-xl">
          <h2 className="font-bricolage text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900">
            Reflect deeper. Feel lighter.
          </h2>
          <p className="font-space text-sm sm:text-base text-zinc-700 mt-3">
            Start sweeping today — your mind will thank you tomorrow.
          </p>
          <button className="mt-6 bg-[#3A86FF] hover:bg-[#3a51ff] text-white font-space font-medium py-2 px-6 rounded-full inline-flex items-center justify-center text-sm sm:text-base transition">
            Start Sweeping →
          </button>
        </div>
      </section>

      {/* 📍 Footer */}
      <footer className="mt-12 sm:mt-16 md:mt-20 border-t border-zinc-200 pt-6 pb-8 text-center text-xs sm:text-sm text-zinc-500 font-space">
        © {new Date().getFullYear()} Sweply · Crafted by VByte (<a href="https://vbyte-dev.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">vbyte-dev.vercel.app</a>)
      </footer>
    </div>
  );
};

export default Home;
