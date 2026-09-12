// The v0 preview runtime points NEXT_ADAPTER_PATH at an adapter module that is
// not present in this environment, which makes `next dev` crash on config load.
// Clearing it before Next reads the config keeps the dev preview working while
// leaving the static-export build (used for personal hosting) untouched.
if (process.env.NEXT_ADAPTER_PATH) {
  delete process.env.NEXT_ADAPTER_PATH
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
