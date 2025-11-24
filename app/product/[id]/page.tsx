import { menuItems } from "@/lib/menu-data";
import DetailClient from "./detail-client";

export async function generateStaticParams() {
  return menuItems.map((item) => ({
    id: item.id,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetail({ params }: Props) {
  const resolvedParams = await params;
  const item = menuItems.find((p) => p.id === resolvedParams.id);

  if (!item) {
    return <div className="p-10 text-center">Ürün bulunamadı.</div>;
  }

  return <DetailClient item={item} />;
}
