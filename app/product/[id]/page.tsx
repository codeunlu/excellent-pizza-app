import { menuItems } from "@/lib/menu-data"; // Type hatası almamak için sadece menuItems alıyoruz
import DetailClient from "./detail-client";

// Github Pages için Statik Rota Oluşturucu
export async function generateStaticParams() {
  return menuItems.map((item) => ({
    id: item.id,
  }));
}

// DÜZELTME BURADA YAPILDI:
// params artık bir "Promise". Onu await ile beklememiz lazım.
interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetail({ params }: Props) {
  // 1. Önce params'ı await ediyoruz (Promise'i çözüyoruz)
  const resolvedParams = await params;

  // 2. Artık id'ye erişebiliriz
  const item = menuItems.find((p) => p.id === resolvedParams.id);

  if (!item) {
    return <div className="p-10 text-center">Ürün bulunamadı.</div>;
  }

  // Client bileşenine veriyi gönderiyoruz
  return <DetailClient item={item} />;
}
