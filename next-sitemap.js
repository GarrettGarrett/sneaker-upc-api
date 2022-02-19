module.exports = {
    siteUrl: process.env.SITE_URL || 'https://example.com',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
        additionalSitemaps: [`${process.env.SITE_URL}/sitemap-0.xml`, `${process.env.SITE_URL}/sitemap.xml`]
    }
    
    // ...other options
  }