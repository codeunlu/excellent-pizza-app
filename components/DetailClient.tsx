"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MenuItem } from "@/lib/menu-data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, PhoneCall } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { siteConfig } from "@/lib/site-config";

export default function DetailClient({ item }: { item: MenuItem }) {
  const router = useRouter();
  const { language } = useLanguage();

  // Varsayılan Seçenek Mantığı:
  // Eğer ürünün seçenekleri varsa (options array), ilkinin 'key' değerini seç (örn: 'medium' veya '330ml').
  // Yoksa null olsun.
  const [selectedOptionKey, setSelectedOptionKey] = useState<string | null>(
    item.options && item.options.length > 0 ? item.options[0].key : null
  );

  useEffect(() => {
    if (!language) {
      router.push('/');
    }
  }, [language, router]);

  if (!language) return null;

  const t = siteConfig.translations[language];

  // Fiyat Hesaplama Mantığı:
  // Seçili bir opsiyon varsa onun fiyatını al, yoksa ürünün baz fiyatını al.
  const selectedOption = item.options?.find(opt => opt.key === selectedOptionKey);
  const currentPrice = selectedOption ? selectedOption.price : item.price;

  const handleOrderCall = () => {
    // Sipariş mesajına detay ekleyelim (Opsiyonel)
    // Örn: Margarita - Büyük Boy
    window.open(`tel:+${siteConfig.phoneNumber}`, '_self');
  };

  return (
      <div className="min-h-screen bg-white pb-24 relative">
        {/* Üst Görsel Alanı */}
        <div className="relative h-[40vh] w-full bg-gray-100">
          <button
              onClick={() => router.back()}
              className="absolute top-4 left-4 z-10 bg-black/20 backdrop-blur-md p-2 rounded-full hover:bg-black/40 transition-all text-white border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img src={item.image} alt={item.name[language]} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="px-5 -mt-8 relative z-10">
          {/* Başlık ve Fiyat */}
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight w-2/3 font-serif">
              {item.name[language]}
            </h1>
            <div className="text-right">
              <span className="block text-3xl font-bold text-[#991b1b]">
                ₺{currentPrice}
              </span>
            </div>
          </div>

          {/* Dinamik Seçenekler Alanı */}
          {item.options && item.options.length > 0 && (
              <div className="mb-8">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">
                  {t.sizeSelect}
                </label>
                {/* Grid yapısını seçenek sayısına göre ayarlayalım */}
                <div className={`grid gap-3 ${item.options.length > 2 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                  {item.options.map((option) => (
                      <button
                          key={option.key}
                          onClick={() => setSelectedOptionKey(option.key)}
                          className={`
                            py-3 px-2 rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center relative
                            ${selectedOptionKey === option.key
                              ? 'border-[#991b1b] bg-[#fff1f1] text-[#991b1b] shadow-sm transform scale-105 z-10'
                              : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200'
                          }
                          `}
                      >
                        <span className="font-bold text-sm text-center leading-tight">
                          {option.name[language]}
                        </span>
                        <span className="text-[10px] mt-1 font-semibold">
                          ₺{option.price}
                        </span>
                      </button>
                  ))}
                </div>
              </div>
          )}

          {/* İçindekiler / Açıklama Etiketleri */}
          <div className="mb-8">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 block">
              {t.ingredients}
            </label>
            <div className="flex flex-wrap gap-2">
              {item.description[language].split(',').map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#fefce8] text-[#991b1b] border border-[#fecaca] rounded-lg text-sm font-medium">
                 {tag.trim()}
               </span>
              ))}
            </div>
          </div>

          {/* Bilgi Kutusu */}
          <div className="p-4 bg-gray-50 rounded-xl text-gray-500 text-sm leading-relaxed border border-gray-100">
            {t.info}
          </div>
        </div>

        {/* Sipariş Butonu */}
        <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-100 z-20 max-w-md mx-auto right-0 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
          <Button
              onClick={handleOrderCall}
              className="w-full h-14 text-lg font-bold rounded-xl shadow-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform hover:bg-green-600"
              style={{ backgroundColor: "#22c55e" }}
          >
            <PhoneCall className="w-6 h-6 text-white" />
            <span className="text-white">
              {t.callToOrder}
            </span>
          </Button>
        </div>
      </div>
  );
}