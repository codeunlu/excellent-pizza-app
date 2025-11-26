import { menuItems } from "@/lib/menu-data";
import { siteConfig } from "@/lib/site-config";
import DetailClient from "@/components/DetailClient";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return menuItems.map((item) => ({
    id: item.id.toString(),
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // KRİTİK DEĞİŞİKLİK: params'ı await ile çözümlüyoruz
  const resolvedParams = await params;
  const id = resolvedParams.id
  const item = menuItems.find((p) => p.id === id);

  if (!item) {
    return {
      title: "Ürün Bulunamadı | " + siteConfig.brandName,
    };
  }

  const title = item.name.tr;
  const description = item.description.tr;

  return {
    title: title,
    description: description,
    openGraph: {
      title: `${title} - ${siteConfig.brandName}`,
      description: description,
      images: [item.image],
      type: "website",
    },
  };
}

// 3. SAYFA BİLEŞENİ
export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id
  const item = menuItems.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Ürün bulunamadı.</p>
      </div>
    );
  }

  return <DetailClient item={item} />;
}