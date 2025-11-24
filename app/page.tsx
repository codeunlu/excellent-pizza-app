"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { menuItems, categories } from "@/lib/menu-data";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/LanguageContext";
import { Search } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("hepsi");
  const [searchQuery, setSearchQuery] = useState("");

  // --- 1. DİL SEÇİM EKRANI (Açılış) ---
  if (!language) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#991b1b] px-4 relative overflow-hidden">
          {/* Arka plan süsleri */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-red-800 rounded-full blur-3xl opacity-50"></div>

          <div className="z-10 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 w-full max-w-sm text-center shadow-2xl">
            <div className="w-40 h-40 mx-auto mb-6 flex items-center justify-center">
              <img
                  src="/logo.png"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  alt="Excellent Pizza"
              />
            </div>

            <h2 className="text-3xl font-bold text-white mb-2 tracking-wide uppercase font-serif">{siteConfig.brandName}</h2>
            <p className="text-white/80 text-sm mb-8">{siteConfig.translations.tr.selectLang}</p>

            <div className="space-y-4">
              <button
                  onClick={() => setLanguage('tr')}
                  className="w-full py-4 bg-white hover:bg-gray-50 text-[#991b1b] font-bold rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span className="text-2xl">🇹🇷</span> Türkçe
              </button>
              <button
                  onClick={() => setLanguage('de')}
                  className="w-full py-4 bg-[#1a1a1a] hover:bg-black text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span className="text-2xl">🇩🇪</span> Deutsch
              </button>
            </div>
          </div>
        </div>
    );
  }

  // --- 2. ANA UYGULAMA ---
  const t = siteConfig.translations[language];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "hepsi" ? true : item.category === activeCategory;
    const itemName = item.name[language].toLowerCase();
    const itemDesc = item.description[language].toLowerCase();
    const query = searchQuery.toLowerCase();
    return matchesCategory && (itemName.includes(query) || itemDesc.includes(query));
  });

  return (
      <main className="min-h-screen pb-8" style={{ backgroundColor: siteConfig.colors.secondary }}>

        {/* --- HEADER (Revize Edildi) --- */}
        <div className="relative pb-20 pt-8 rounded-b-[40px] shadow-2xl overflow-hidden bg-[#991b1b]">
          {/* Gradient Katmanı (Derinlik için) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5 pointer-events-none"></div>

          {/* Arka plan dekorasyonları */}
          <div className="absolute -top-24 -right-10 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute top-10 -left-10 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-20"></div>

          <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
            {/* Logo */}
            <div className="w-32 h-32 mb-3 flex items-center justify-center filter drop-shadow-xl hover:scale-105 transition-transform duration-500">
              <img
                  src="/logo.png"
                  alt="Excellent Pizza Logo"
                  className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-4xl font-bold text-white tracking-wider uppercase drop-shadow-md font-serif">{siteConfig.brandName}</h1>
            <p className="text-xs font-bold text-orange-100 tracking-[0.5em] uppercase mt-2 opacity-90">{siteConfig.brandSubtitle}</p>
          </div>
        </div>

        {/* --- ARAMA KUTUSU --- */}
        <div className="container mx-auto px-6 -mt-8 relative z-20 max-w-md">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-1.5 flex items-center border border-gray-100">
            <div className="pl-3 text-[#991b1b]"><Search className="w-5 h-5" /></div>
            <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full p-3 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* --- KATEGORİLER (Kaydırma Düzeltildi) --- */}
        {/* Sticky: Search bar'ın altına yapışır */}
        <div className="sticky top-0 z-40 py-4 mt-2 bg-[#fefce8]/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
          {/* DÜZELTME: w-full, flex-nowrap ve butonlarda shrink-0 */}
          <div className="w-full overflow-x-auto no-scrollbar touch-pan-x">
            <div className="flex gap-3 px-6 w-max">
              {categories.map((cat) => (
                  <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`
                  shrink-0 whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border shadow-sm active:scale-95
                  ${
                          activeCategory === cat.id
                              ? "text-white scale-105 border-transparent shadow-md"
                              : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                      }
                `}
                      style={{ backgroundColor: activeCategory === cat.id ? siteConfig.colors.primary : undefined }}
                  >
                    {(t.categories as any)[cat.id] || cat.id.toUpperCase()}
                  </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- MENÜ LİSTESİ --- */}
        <div className="container mx-auto px-4 max-w-md space-y-6 mt-6">
          {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                  <div
                      key={item.id}
                      onClick={() => router.push(`/product/${item.id}`)}
                      className="group bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 overflow-hidden cursor-pointer active:scale-[0.98] transition-all hover:shadow-lg"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img src={item.image} alt={item.name[language]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      {item.isPopular && (
                          <div className="absolute top-3 left-0">
                            <span className="bg-[#991b1b] text-white text-[10px] font-bold px-3 py-1 rounded-r-full shadow-md backdrop-blur-sm bg-opacity-90">★ {t.favorite}</span>
                          </div>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="font-bold text-xl text-gray-900 leading-tight mb-2 font-serif">{item.name[language]}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4 h-10 leading-relaxed">{item.description[language]}</p>

                      <div className="mt-2">
                        {item.options ? (
                            <div className="flex bg-gray-50 rounded-xl p-1.5 border border-gray-100 divide-x divide-gray-200">
                              <div className="flex-1 flex flex-col items-center justify-center py-1">
                                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{t.small}</span>
                                <span className="text-sm font-bold text-gray-900">₺{item.options.small}</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center justify-center py-1 bg-white rounded-lg shadow-sm border border-gray-100 mx-0.5">
                                <span className="text-[9px] text-[#991b1b] font-bold uppercase tracking-wider">{t.medium}</span>
                                <span className="text-base font-bold text-[#991b1b]">₺{item.options.medium}</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center justify-center py-1">
                                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{t.large}</span>
                                <span className="text-sm font-bold text-gray-900">₺{item.options.large}</span>
                              </div>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100 px-5">
                              <span className="font-bold text-xl text-gray-900">₺{item.price}</span>
                              <span className="text-[10px] font-bold text-gray-400 tracking-wider border border-gray-200 px-2 py-1 rounded">{t.singlePrice}</span>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
              ))
          ) : (
              <div className="text-center py-12 flex flex-col items-center justify-center text-gray-400">
                <Search className="w-12 h-12 mb-3 opacity-20" />
                <p>{t.notFound}</p>
              </div>
          )}
          <div className="h-8"></div>
        </div>
      </main>
  );
}
