import React from 'react'
import Spline from '@splinetool/react-spline'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-teal-50/80 text-[#02695e] border border-teal-200/70">
      {children}
    </span>
  )
}

function Stat({ title, children }) {
  return (
    <div className="bg-[#F7FFFE] border border-teal-100 rounded-xl p-4">
      <h4 className="m-0 mb-2 text-sm tracking-wide text-[#0a4f47] font-semibold">{title}</h4>
      <div className="text-sm text-[#174f48] leading-relaxed">{children}</div>
    </div>
  )
}

function Divider() {
  return (
    <div className="h-px my-5 bg-gradient-to-r from-teal-400/20 via-transparent to-teal-400/20" />
  )
}

function Hero() {
  return (
    <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-2xl ring-1 ring-teal-200/40 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(0,172,151,0.18),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between pointer-events-none">
        <div className="pointer-events-auto" dir="rtl">
          <div className="flex items-center gap-2 mb-2">
            <Badge>رياضة</Badge>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
            <span className="text-xs font-semibold text-white/90">إعلان داخلي</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
            المقابلة رقم 11 (HYD 03 vs AGR 03)
          </h1>
          <p className="text-white/90 font-semibold mt-1">HYD 03 يفوز على AGR 03 بنتيجة 2–1</p>
        </div>
      </div>
    </div>
  )
}

function GalleryItem({ src, alt }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-teal-100 group bg-white">
      <img
        src={src}
        alt={alt}
        className="w-full h-40 md:h-44 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </figure>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-teal-50/40 to-white selection:bg-[#00AC97]/20 selection:text-[#0b2e2a]" dir="rtl" lang="ar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        {/* Hero with Spline */}
        <Hero />

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#407c74] mt-4 md:mt-6">
          <span className="font-semibold">مجموعة CPH — باب الزوار، الجزائر</span>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
          <a href="#contact" className="underline decoration-dotted hover:text-[#00AC97]">+213 561 633 515</a>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
          <a href="mailto:cphitm@gmail.com" className="underline decoration-dotted hover:text-[#00AC97]">cphitm@gmail.com</a>
        </div>

        {/* Featured image (optional inline) */}
        <section className="mt-5">
          <figure className="rounded-2xl border border-teal-100 bg-white p-2 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1600&auto=format&fit=crop"
              alt="انطلاق دورة كرة القدم لمجموعة CPH"
              className="w-full h-auto rounded-xl"
            />
            <figcaption className="text-xs text-[#5a7f79] mt-2 px-1">صورة الغلاف: انطلاق البطولة</figcaption>
          </figure>
        </section>

        {/* Content grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
          {/* Match card */}
          <article className="bg-white rounded-2xl border border-teal-100 shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-5">
            <div className="flex items-center justify-between text-[#145c54] font-extrabold">
              <span>HYD 03</span>
              <span>AGR 03</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-[#00AC97] font-black text-4xl md:text-5xl my-2">
              <span>2</span>
              <span className="text-[#0a4f47]">–</span>
              <span>1</span>
            </div>
            <Divider />
            <Stat title="مسجلو الأهداف">
              <ul className="list-disc pr-5 m-0">
                <li>HYD 03: هدفان — الدقيقة 23، 67</li>
                <li>AGR 03: هدف — الدقيقة 54</li>
              </ul>
            </Stat>
            <div className="h-2" />
            <Stat title="أفضل اللاعبين">
              <ul className="list-disc pr-5 m-0">
                <li>HYD 03: لاعب المباراة</li>
                <li>AGR 03: أداء مميز في خط الوسط</li>
              </ul>
            </Stat>
            <div className="h-2" />
            <Stat title="التحكيم">
              <p className="m-0">الحكم: طاقم داخلي</p>
            </Stat>
          </article>

          {/* Gallery */}
          <aside className="bg-white rounded-2xl border border-teal-100 shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-5">
            <h3 className="m-0 mb-3 text-lg font-extrabold text-[#0a4f47]">معرض الصور</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3" role="list" aria-label="صور المباراة">
              <GalleryItem src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=800&auto=format&fit=crop" alt="لقطة من المباراة 1" />
              <GalleryItem src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop" alt="لقطة من المباراة 2" />
              <GalleryItem src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop" alt="لقطة من المباراة 3" />
              <GalleryItem src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop" alt="لقطة من المباراة 4" />
            </div>
            <p className="text-xs text-[#5a7f79] mt-3">للاطلاع بدقة أعلى، انقر على الصور.</p>
          </aside>
        </section>

        {/* Slogan */}
        <section className="mt-6">
          <div className="bg-gradient-to-r from-[#00AC97] to-[#00c7ae] text-white rounded-2xl p-5 text-center text-base md:text-lg font-extrabold shadow-sm">
            « كرة القدم تجمعنا … والإيجابية نهجنا »
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
          <a className="inline-flex items-center justify-center gap-2 bg-teal-50 text-[#02695e] border border-teal-200 rounded-xl px-4 py-2.5 font-bold hover:bg-teal-100/60 transition-colors" href="#prev" aria-label="المباراة السابقة">← المباراة السابقة</a>
          <a className="inline-flex items-center justify-center gap-2 bg-teal-50 text-[#02695e] border border-teal-200 rounded-xl px-4 py-2.5 font-bold hover:bg-teal-100/60 transition-colors" href="#next" aria-label="المباراة التالية">المباراة التالية →</a>
        </section>

        {/* Footer info */}
        <footer className="mt-6 text-xs text-[#5a7f79]" id="contact">
          للاستفسار: +213 561 633 515 · cphitm@gmail.com · الموقع: باب الزوار 16024، الجزائر
        </footer>
      </div>
    </main>
  )
}
