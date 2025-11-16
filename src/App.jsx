import React, { useEffect, useMemo, useState } from 'react'

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

function Icon({ name, className = '' }) {
  const paths = {
    twitter: 'M459 151c-12 6-25 10-39 12 14-8 24-21 29-36-13 8-28 14-43 17-12-12-29-20-48-20-36 0-66 29-66 66 0 5 1 11 2 16-55-3-103-29-135-69-6 10-10 21-10 34 0 23 12 44 29 56-11 0-21-3-31-8 0 0 0 1 0 1 0 32 23 58 53 64-6 2-12 3-19 3-4 0-9 0-13-1 9 27 35 47 66 47-24 19-55 30-88 30-6 0-12 0-18-1 31 20 68 31 108 31 129 0 200-107 200-200 0-3 0-6 0-8 14-10 26-23 36-37z',
    facebook: 'M279 288l14-89h-88v-58c0-24 12-47 50-47h39v-76s-35-6-69-6c-70 0-116 42-116 118v69h-78v89h78v216h94v-216h76z',
    instagram: 'M224 202c-36 0-66 30-66 66s30 66 66 66 66-30 66-66-30-66-66-66zm124-41c0-17-14-31-31-31h-186c-17 0-31 14-31 31v186c0 17 14 31 31 31h186c17 0 31-14 31-31v-186zm-31-91c35 0 64 29 64 64v186c0 35-29 64-64 64h-186c-35 0-64-29-64-64v-186c0-35 29-64 64-64h186z',
    youtube: 'M393 184c-4-15-16-26-31-30-27-7-135-7-135-7s-108 0-135 7c-15 4-27 15-31 30-7 27-7 84-7 84s0 57 7 84c4 15 16 26 31 30 27 7 135 7 135 7s108 0 135-7c15-4 27-15 31-30 7-27 7-84 7-84s0-57-7-84zm-193 136v-104l90 52-90 52z',
    linkedin: 'M100 160h80v240h-80zm40-120c-26 0-48 22-48 48s22 48 48 48 48-22 48-48-22-48-48-48zm120 120h76v34h1c11-21 39-43 80-43 85 0 100 56 100 129v120h-80v-106c0-25 0-57-35-57-35 0-40 27-40 55v108h-80v-240z',
    search: 'M55 237c-30-30-30-79 0-109s79-30 109 0c26 26 29 65 11 95l66 66-23 23-66-66c-30 18-69 15-95-11z',
  }
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true"><path d={paths[name]} /></svg>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-teal-100/70" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        {/* Top bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-[#00AC97]/10 text-[#00AC97] font-black border border-[#00AC97]/30 shadow-sm">
              CPH
            </span>
            <div className="leading-tight">
              <div className="text-base font-extrabold text-[#0b2e2a] group-hover:text-[#00AC97] transition-colors">مجموعة CPH</div>
              <div className="text-[11px] text-[#4d7a74]">Douzi 3, Bab Ezzouar, Algiers</div>
            </div>
          </a>

          {/* Search */}
          <div className="relative flex-1 max-w-xl order-3 sm:order-none">
            <input
              type="text"
              placeholder="ابحث في الأخبار..."
              className="w-full rounded-xl border-2 border-teal-100 focus:border-[#00AC97] outline-none px-4 py-2.5 text-sm text-[#0a4f47] placeholder:text-[#6c9a94] bg-white"
              aria-label="بحث"
            />
            <Icon name="search" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 fill-[#4d7a74]" />
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 text-[#3d6f69]">
            <a href="#" className="grid place-items-center w-9 h-9 rounded-lg border border-teal-200 hover:bg-teal-50 transition"><Icon name="twitter" className="w-4 h-4 fill-current" /></a>
            <a href="#" className="grid place-items-center w-9 h-9 rounded-lg border border-teal-200 hover:bg-teal-50 transition"><Icon name="facebook" className="w-4 h-4 fill-current" /></a>
            <a href="#" className="grid place-items-center w-9 h-9 rounded-lg border border-teal-200 hover:bg-teal-50 transition"><Icon name="linkedin" className="w-4 h-4 fill-current" /></a>
            <a href="#" className="grid place-items-center w-9 h-9 rounded-lg border border-teal-200 hover:bg-teal-50 transition"><Icon name="instagram" className="w-4 h-4 fill-current" /></a>
            <a href="#" className="grid place-items-center w-9 h-9 rounded-lg border border-teal-200 hover:bg-teal-50 transition"><Icon name="youtube" className="w-4 h-4 fill-current" /></a>
          </div>
        </div>

        {/* Category nav */}
        <nav className="mt-3 bg-[#0f2f2b] rounded-xl px-3">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white text-sm font-bold">
            <li><a className="inline-block py-2.5 hover:text-[#00AC97]" href="#home">الرئيسية</a></li>
            <li><a className="inline-block py-2.5 hover:text-[#00AC97]" href="#match">اللقاء</a></li>
            <li><a className="inline-block py-2.5 hover:text-[#00AC97]" href="#news">الأخبار</a></li>
            <li><a className="inline-block py-2.5 hover:text-[#00AC97]" href="#gallery">الصور</a></li>
            <li><a className="inline-block py-2.5 hover:text-[#00AC97]" href="#contact">تواصل</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function SliderHero({ slides = [], interval = 5000 }) {
  const [current, setCurrent] = useState(0)
  const count = slides.length

  useEffect(() => {
    if (count <= 1) return
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % count)
    }, interval)
    return () => clearInterval(id)
  }, [count, interval])

  const goTo = (i) => setCurrent(((i % count) + count) % count)
  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  const safeSlides = useMemo(() => (
    slides.length ? slides : [
      { src: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2000&auto=format&fit=crop', alt: 'ملعب' },
      { src: 'https://images.unsplash.com/photo-1526841234980-b3c3645c92a3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDglQjUlRDklODglRDglQjElRDglQTklMjAlRDklODUlRDklODYlMjAlRDglQTclRDklODQlRDklODUlRDglQTglRDglQTclRDglQjElRDglQTclRDglQTl8ZW58MHwwfHx8MTc2MzI2MDYxOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'مباراة' },
      { src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop', alt: 'جمهور' },
    ]
  ), [slides])

  return (
    <section id="home" className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-2xl ring-1 ring-teal-200/40 shadow-[0_10px_30px_rgba(0,0,0,0.08)]" aria-roledescription="carousel" aria-label="صور الغلاف">
      {/* Slides */}
      <div className="absolute inset-0">
        {safeSlides.map((s, i) => (
          <img
            key={i}
            src={s.src}
            alt={s.alt || ''}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(0,172,151,0.18),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" aria-hidden="true" />

      {/* Copy */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
        <div className="" dir="rtl">
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

        {/* Controls */}
        <div className="hidden md:flex items-center gap-2 self-end pb-2">
          <button onClick={prev} className="pointer-events-auto grid place-items-center w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#0a4f47] border border-teal-200 shadow-sm" aria-label="السابق">‹</button>
          <button onClick={next} className="pointer-events-auto grid place-items-center w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#0a4f47] border border-teal-200 shadow-sm" aria-label="التالي">›</button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {safeSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`انتقال إلى الشريحة ${i + 1}`}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-white shadow ring-2 ring-[#00AC97]' : 'bg-white/60 hover:bg-white/90'}`}
          />
        ))}
      </div>
    </section>
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

function NewsCard({ img, date, title, excerpt, featured = false }) {
  return (
    <article className={`${featured ? 'md:col-span-2' : ''} rounded-2xl border border-teal-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden`}>
      <img src={img} alt={title} className={`w-full ${featured ? 'h-72' : 'h-56'} object-cover`} />
      <div className="p-4">
        <div className="text-[12px] text-[#5a7f79] mb-1">{date}</div>
        <h3 className={`${featured ? 'text-2xl' : 'text-lg'} font-extrabold text-[#0a4f47] mb-1`}>{title}</h3>
        <p className="text-sm text-[#356a63]">{excerpt}</p>
      </div>
    </article>
  )
}

function BrandPill({ name }) {
  return (
    <span className="px-3 py-1 rounded-full bg-teal-50 text-[#02695e] border border-teal-200 text-xs font-bold">{name}</span>
  )
}

export default function App() {
  const heroSlides = [
    { src: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2000&auto=format&fit=crop', alt: 'صورة من المباراة' },
    { src: 'https://images.unsplash.com/photo-1526841234980-b3c3645c92a3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDglQjUlRDklODglRDglQjElRDglQTklMjAlRDklODUlRDklODYlMjAlRDglQTclRDklODQlRDklODUlRDglQTglRDglQTclRDglQjElRDglQTclRDglQTl8ZW58MHwwfHx8MTc2MzI2MDYxOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', alt: 'تسديدة نحو المرمى' },
    { src: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2000&auto=format&fit=crop', alt: 'فرحة اللاعبين' },
    { src: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=2000&auto=format&fit=crop', alt: 'كرة على خط التماس' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-teal-50/40 to-white selection:bg-[#00AC97]/20 selection:text-[#0b2e2a]" dir="rtl" lang="ar">
      {/* Header */}
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        {/* Hero slider */}
        <SliderHero slides={heroSlides} />

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#407c74] mt-4 md:mt-6">
          <span className="font-semibold">مجموعة CPH — باب الزوار، الجزائر</span>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
          <a href="#contact" className="underline decoration-dotted hover:text-[#00AC97]">+213 561 633 515</a>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-300" />
          <a href="mailto:cphitm@gmail.com" className="underline decoration-dotted hover:text-[#00AC97]">cphitm@gmail.com</a>
        </div>

        {/* Featured image */}
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
        <section id="match" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
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
          <aside id="gallery" className="bg-white rounded-2xl border border-teal-100 shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-5">
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

        {/* News portal style (inspired by example) */}
        <section id="news" className="mt-10">
          <div className="flex items-end justify-between mb-3">
            <h2 className="text-xl md:text-2xl font-black text-[#0a4f47]">آخر الأخبار</h2>
            <a href="#" className="text-sm font-bold text-[#00AC97] hover:underline">عرض الكل</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <NewsCard featured img="https://images.unsplash.com/photo-1504711434969-e338bca99c34?w=1200" date="05-فبراير-2020" title="فوز مثير لفريق HYD 03 على AGR 03" excerpt="تفاصيل اللقاء وأهداف المباراة مع أبرز اللقطات والتحليل الفني." />
            <NewsCard img="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800" date="05-فبراير-2020" title="تحضيرات الجولة القادمة" excerpt="جلسات تدريبية مكثفة وعودة بعض العناصر الأساسية." />
            <NewsCard img="https://images.unsplash.com/photo-1519389950477-8167e7f7d0c6?w=800" date="05-فبراير-2020" title="تأكيد مواعيد المباريات" excerpt="البرنامج الرسمي للجولة مع توقيت المباريات والملاعب." />
            <NewsCard img="https://images.unsplash.com/photo-1522202176988-66273c2b0d0f?w=800" date="05-فبراير-2020" title="الترتيب العام بعد الجولة" excerpt="نظرة على جدول الترتيب وأرقام الفرق بعد نهاية الجولة." />
            <NewsCard img="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800" date="05-فبراير-2020" title="أفضل لاعب في المباراة" excerpt="اختيار اللجنة الفنية للاعب الأبرز مع إحصائيات مختصرة." />
          </div>
        </section>

        {/* Standings */}
        <section className="mt-10">
          <h2 className="text-xl md:text-2xl font-black text-[#0a4f47] mb-3">جدول الترتيب</h2>
          <div className="overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-sm">
            <div className="grid grid-cols-12 px-4 py-2 text-xs font-bold text-[#0a4f47] bg-teal-50">
              <div className="col-span-5">الفريق</div>
              <div className="text-center">لعب</div>
              <div className="text-center">ف</div>
              <div className="text-center">ت</div>
              <div className="text-center">خ</div>
              <div className="text-center">له</div>
              <div className="text-center">عليه</div>
              <div className="text-center">فارق</div>
              <div className="col-span-2 text-center">نقاط</div>
            </div>
            {[
              { team: 'HYD 03', p: 3, w: 2, d: 1, l: 0, gf: 6, ga: 3, gd: +3, pts: 7 },
              { team: 'AGR 03', p: 3, w: 2, d: 0, l: 1, gf: 5, ga: 3, gd: +2, pts: 6 },
              { team: 'SEAL 01', p: 3, w: 1, d: 1, l: 1, gf: 3, ga: 3, gd: 0, pts: 4 },
              { team: 'DIMEL 02', p: 3, w: 0, d: 1, l: 2, gf: 2, ga: 7, gd: -5, pts: 1 },
            ].map((r, idx) => (
              <div key={idx} className="grid grid-cols-12 px-4 py-2 text-sm text-[#174f48] border-t border-teal-50">
                <div className="col-span-5 font-bold">{r.team}</div>
                <div className="text-center">{r.p}</div>
                <div className="text-center">{r.w}</div>
                <div className="text-center">{r.d}</div>
                <div className="text-center">{r.l}</div>
                <div className="text-center">{r.gf}</div>
                <div className="text-center">{r.ga}</div>
                <div className="text-center">{r.gd}</div>
                <div className="col-span-2 text-center font-extrabold text-[#00AC97]">{r.pts}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-10">
          <div className="rounded-2xl border border-teal-100 bg-gradient-to-r from-[#00AC97]/10 to-[#00c7ae]/10 p-6 md:p-8 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-black text-[#0a4f47]">اشترك لتصلك آخر أخبار البطولة</h3>
              <p className="text-sm text-[#3e6f69]">أدخل بريدك الإلكتروني لتصلك الإشعارات الهامة وملخصات المباريات.</p>
            </div>
            <form className="w-full md:w-auto flex items-center gap-2">
              <input type="email" required placeholder="بريدك الإلكتروني" className="w-full md:w-72 rounded-xl border-2 border-teal-100 focus:border-[#00AC97] outline-none px-4 py-2.5 text-sm text-[#0a4f47] placeholder:text-[#6c9a94] bg-white" />
              <button type="button" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#00AC97] text-white font-bold hover:bg-[#00c7ae] transition-colors">اشترك</button>
            </form>
          </div>
        </section>

        {/* Brands */}
        <section className="mt-10">
          <div className="rounded-2xl border border-teal-100 bg-white p-4 flex flex-wrap items-center justify-center gap-2">
            <BrandPill name="CPH Hydro" />
            <BrandPill name="CPH Agro" />
            <BrandPill name="Sealing" />
            <BrandPill name="Dimel" />
          </div>
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
          للاستفسار: +213 561 633 515 · cphitm@gmail.com · Douzi 3, Bab Ezzouar, Algiers
        </footer>
      </div>
    </main>
  )
}
