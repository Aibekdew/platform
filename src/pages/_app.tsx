// src/pages/_app.tsx
import type { AppProps } from "next/app";
import "@/app/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
