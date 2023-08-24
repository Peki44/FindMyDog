import RootLayout from "@/app/layout.tsx"
 
export default function MyApp({ Component, pageProps }) {
  return (
      <RootLayout suppressHydrationWarning={true}>
        <Component {...pageProps} />
      </RootLayout>
  )
}