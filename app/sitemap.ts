import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { menuItems } from '@/lib/menu-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  const products = menuItems.map((item) => ({
    url: `${baseUrl}/product/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...routes, ...products]
}