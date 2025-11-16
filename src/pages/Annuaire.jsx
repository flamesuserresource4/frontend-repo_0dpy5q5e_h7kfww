import React, { useEffect, useMemo, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

function Tag({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-teal-50 text-[#02695e] border border-teal-200 text-xs font-bold">
      <span>{label}</span>
      {onRemove && (
        <button onClick={onRemove} className="text-[#0b4f47] hover:text-red-600" aria-label={`إزالة ${label}`}>×</button>
      )}
    </span>
  )
}

function Avatar({ src, name }) {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-teal-100 border border-teal-200 shrink-0">
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        <div className="w-full h-full grid place-items-center text-[#0a4f47] font-black">{(name||'?').slice(0,1)}</div>
      )}
    </div>
  )
}

export default function Annuaire() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [q, setQ] = useState('')
  const [department, setDepartment] = useState('')
  const [location, setLocation] = useState('')
  const [activeOnly, setActiveOnly] = useState(true)
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState([])

  const params = useMemo(() => {
    const p = new URLSearchParams()
    if (q) p.set('q', q)
    if (department) p.set('department', department)
    if (location) p.set('location', location)
    if (activeOnly) p.set('isActive', 'true')
    if (tags.length) p.set('tags', tags.join(','))
    p.set('limit', '200')
    return p.toString()
  }, [q, department, location, activeOnly, tags])

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/api/employees?${params}`)
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  const departments = useMemo(() => {
    const set = new Set(items.map(i => i.department).filter(Boolean))
    return Array.from(set)
  }, [items])

  const locations = useMemo(() => {
    const set = new Set(items.map(i => i.location).filter(Boolean))
    return Array.from(set)
  }, [items])

  const onAddTag = () => {
    const v = tagInput.trim()
    if (!v) return
    if (!tags.includes(v)) setTags([...tags, v])
    setTagInput('')
  }

  const clearFilters = () => {
    setQ('')
    setDepartment('')
    setLocation('')
    setActiveOnly(true)
    setTags([])
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-teal-50/40 to-white" dir="rtl" lang="ar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-black text-[#0a4f47]">الدليل الداخلي (Annuaire)</h1>
          <button onClick={fetchData} className="px-3 py-2 rounded-xl bg-[#00AC97] text-white text-sm font-bold hover:bg-[#00c7ae]">تحديث</button>
        </div>

        {/* Filters */}
        <section className="rounded-2xl border border-teal-100 bg-white p-4 md:p-5 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
            <div className="md:col-span-4">
              <label className="block text-xs font-bold text-[#15524a] mb-1">بحث</label>
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="ابحث بالاسم، القسم، البريد..." className="w-full rounded-xl border-2 border-teal-100 focus:border-[#00AC97] outline-none px-3 py-2 text-sm text-[#0a4f47]" />
            </div>
            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-[#15524a] mb-1">القسم</label>
              <select value={department} onChange={e=>setDepartment(e.target.value)} className="w-full rounded-xl border-2 border-teal-100 focus:border-[#00AC97] outline-none px-3 py-2 text-sm text-[#0a4f47]">
                <option value="">الكل</option>
                {departments.map(d => (<option key={d} value={d}>{d}</option>))}
              </select>
            </div>
            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-[#15524a] mb-1">الموقع</label>
              <select value={location} onChange={e=>setLocation(e.target.value)} className="w-full rounded-xl border-2 border-teal-100 focus:border-[#00AC97] outline-none px-3 py-2 text-sm text-[#0a4f47]">
                <option value="">الكل</option>
                {locations.map(l => (<option key={l} value={l}>{l}</option>))}
              </select>
            </div>
            <div className="md:col-span-2 flex items-end">
              <label className="inline-flex items-center gap-2 text-sm text-[#0b4f47] font-bold">
                <input type="checkbox" checked={activeOnly} onChange={e=>setActiveOnly(e.target.checked)} className="rounded border-teal-300 text-[#00AC97] focus:ring-[#00AC97]" />
                نشِط فقط
              </label>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-end">
            <div className="md:col-span-6">
              <label className="block text-xs font-bold text-[#15524a] mb-1">وسوم</label>
              <div className="flex items-center gap-2">
                <input value={tagInput} onChange={e=>setTagInput(e.target.value)} placeholder="مثال: DevOps, HR" className="flex-1 rounded-xl border-2 border-teal-100 focus:border-[#00AC97] outline-none px-3 py-2 text-sm text-[#0a4f47]" />
                <button onClick={onAddTag} className="px-3 py-2 rounded-xl bg-teal-50 text-[#02695e] border border-teal-200 text-sm font-bold hover:bg-teal-100/60">إضافة</button>
              </div>
            </div>
            <div className="md:col-span-6 flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <Tag key={`${t}-${i}`} label={t} onRemove={() => setTags(tags.filter((x, idx)=> idx !== i))} />
              ))}
              {tags.length > 0 && (
                <button onClick={()=>setTags([])} className="text-xs font-bold text-[#0b4f47] underline decoration-dotted">مسح الوسوم</button>
              )}
              <div className="ms-auto">
                <button onClick={clearFilters} className="text-xs font-bold text-[#0b4f47] underline decoration-dotted">إعادة تعيين المرشحات</button>
              </div>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="mt-5 rounded-2xl border border-teal-100 bg-white overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 px-3 py-2 text-xs font-bold text-[#0a4f47] bg-teal-50">
            <div className="col-span-4">الاسم</div>
            <div className="col-span-2">المنصب</div>
            <div className="col-span-2">القسم</div>
            <div className="col-span-2">الموقع</div>
            <div className="col-span-2 text-center">الحالة</div>
          </div>
          {loading && (<div className="px-3 py-4 text-sm text-[#356a63]">جاري التحميل...</div>)}
          {!loading && items.length === 0 && (
            <div className="px-3 py-4 text-sm text-[#356a63]">لا توجد نتائج مطابقة.</div>
          )}
          {!loading && items.map((e) => (
            <div key={e.id} className="grid grid-cols-12 px-3 py-3 text-sm text-[#174f48] border-t border-teal-50 hover:bg-teal-50/40">
              <div className="col-span-4 flex items-center gap-3">
                <Avatar src={e.photoUrl} name={e.full_name || `${e.firstName} ${e.lastName}`} />
                <div className="leading-tight">
                  <div className="font-extrabold text-[#0a4f47]">{e.full_name || `${e.firstName} ${e.lastName}`}</div>
                  <div className="text-xs text-[#5a7f79]">{e.email} {e.phone ? `· ${e.phone}` : ''}</div>
                </div>
              </div>
              <div className="col-span-2">{e.title || '-'}</div>
              <div className="col-span-2">{e.department || '-'}</div>
              <div className="col-span-2">{e.location || '-'}</div>
              <div className="col-span-2 text-center">
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${e.isActive ? 'bg-teal-50 text-[#02695e] border-teal-200' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                  {e.isActive ? 'نشِط' : 'غير نشِط'}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <div className="mt-4 text-xs text-[#5a7f79]">عدد النتائج: {items.length}</div>

        {/* Seed helper (dev only) */}
        <details className="mt-4 open:mb-2">
          <summary className="cursor-pointer text-xs text-[#0b4f47] underline">تعبئة بيانات تجريبية (للتجربة)</summary>
          <button onClick={async()=>{await fetch(`${API_BASE}/api/employees/seed`,{method:'POST'}); fetchData()}} className="mt-2 px-3 py-2 rounded-xl bg-teal-50 text-[#02695e] border border-teal-200 text-sm font-bold hover:bg-teal-100/60">إنشاء سجلات نموذجية</button>
        </details>
      </div>
    </main>
  )
}
