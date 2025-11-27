import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

// --- BU SATIRI EKLE ---
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
