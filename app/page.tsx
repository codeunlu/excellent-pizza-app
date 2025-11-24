"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { menuItems, categories } from "@/lib/menu-data";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/LanguageContext";
import { Search } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const { language, setLanguage } = useLanguage(); // Context'ten dili çek
  const [activeCategory, setActiveCategory] = useState("hepsi");
  const [searchQuery, setSearchQuery] = useState("");

  // --- 1. DİL SEÇİM EKRANI (Açılış) ---
  if (!language) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#991b1b] px-4 relative overflow-hidden">
          {/* Arka plan süsleri */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-black rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="z-10 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 w-full max-w-sm text-center shadow-2xl">
            <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 p-1 shadow-lg">
              <img src="/logo.png" className="w-full h-full object-cover rounded-full" alt="Logo" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Excellent Pizza</h2>
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

  // --- 2. ANA UYGULAMA (Dil Seçildiyse) ---
  const t = siteConfig.translations[language]; // Çevirileri kısayola al

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "hepsi" ? true : item.category === activeCategory;
    // Arama yaparken o dildeki ismine bakıyoruz
    const itemName = item.name[language].toLowerCase();
    const itemDesc = item.description[language].toLowerCase();
    const query = searchQuery.toLowerCase();

    return matchesCategory && (itemName.includes(query) || itemDesc.includes(query));
  });

  return (
      <main className="min-h-screen pb-8" style={{ backgroundColor: siteConfig.colors.secondary }}>

        {/* HEADER */}
        <div className="relative pb-14 pt-8 rounded-b-[2.5rem] shadow-xl overflow-hidden" style={{ backgroundColor: siteConfig.colors.primary }}>
          <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
            {/* Logo Ayarı: Padding kaldırıldı (p-0), object-contain yapıldı */}
            <div className="w-36 h-36 bg-white rounded-full shadow-2xl border-4 border-[#fefce8] mb-4 overflow-hidden flex items-center justify-center">
              <img
                  src="/logo.png"
                  alt="Excellent Pizza Logo"
                  className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-3xl font-bold text-white tracking-wider uppercase drop-shadow-md">{siteConfig.brandName}</h1>
            <p className="text-sm font-medium text-red-100 tracking-[0.4em] uppercase mt-1">{siteConfig.brandSubtitle}</p>
          </div>
        </div>

        {/* ARAMA */}
        <div className="container mx-auto px-6 -mt-7 relative z-20 max-w-md">
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-1 flex items-center">
            <div className="pl-3 text-gray-400"><Search className="w-5 h-5" /></div>
            <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full p-3 bg-transparent outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* KATEGORİLER */}
        <div className="sticky top-0 z-40 py-4 mt-2 bg-[#fefce8]/95 backdrop-blur-sm">
          <div className="flex overflow-x-auto px-4 gap-2 no-scrollbar max-w-md mx-auto">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`
                whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm border
                ${
                        activeCategory === cat.id
                            ? "text-white scale-105 border-transparent"
                            : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }
              `}
                    style={{ backgroundColor: activeCategory === cat.id ? siteConfig.colors.primary : undefined }}
                >
                  {/* Kategori isimlerini config dosyasından çekiyoruz */}
                  {(t.categories as any)[cat.id] || cat.id.toUpperCase()}
                </button>
            ))}
          </div>
        </div>

        {/* MENÜ LİSTESİ */}
        <div className="container mx-auto px-4 max-w-md space-y-6 mt-2">
          {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                  <div
                      key={item.id}
                      onClick={() => router.push(`/product/${item.id}`)}
                      className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer active:scale-[0.98] transition-all"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img src={item.image} alt={item.name[language]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      {item.isPopular && (
                          <div className="absolute top-3 left-0">
                            <span className="bg-[#991b1b] text-white text-[10px] font-bold px-3 py-1 rounded-r-full shadow-md">★ {t.favorite}</span>
                          </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2">{item.name[language]}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4 h-10">{item.description[language]}</p>

                      <div className="mt-2">
                        {item.options ? (
                            <div className="flex bg-gray-50 rounded-xl p-1 border border-gray-100 divide-x divide-gray-200">
                              <div className="flex-1 flex flex-col items-center justify-center py-1">
                                <span className="text-[9px] text-gray-400 font-bold uppercase">{t.small}</span>
                                <span className="text-sm font-bold text-gray-900">₺{item.options.small}</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center justify-center py-1 bg-white rounded shadow-sm">
                                <span className="text-[9px] text-[#991b1b] font-bold uppercase">{t.medium}</span>
                                <span className="text-sm font-bold text-[#991b1b]">₺{item.options.medium}</span>
                              </div>
                              <div className="flex-1 flex flex-col items-center justify-center py-1">
                                <span className="text-[9px] text-gray-400 font-bold uppercase">{t.large}</span>
                                <span className="text-sm font-bold text-gray-900">₺{item.options.large}</span>
                              </div>
                            </div>
                        ) : (
                            <div className="flex justify-between items-center bg-gray-50 p-2 rounded-xl border border-gray-100 px-4">
                              <span className="font-bold text-lg text-gray-900">₺{item.price}</span>
                              <span className="text-xs font-bold text-gray-400">{t.singlePrice}</span>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
              ))
          ) : (
              <div className="text-center py-10 text-gray-400">{t.notFound}</div>
          )}
          <div className="h-8"></div>
        </div>
      </main>
  );
}
