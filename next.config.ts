import type { NextConfig } from "next"
import createNextIntlPlugin from 'next-intl/plugin'
 
const withNextIntl = createNextIntlPlugin()
 
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
}

export default withNextIntl(nextConfig)
