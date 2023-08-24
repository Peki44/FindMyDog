import RootLayout from "@/app/layout.tsx"
 
export default function MyApp({ Component, pageProps }) {
  return (
    <html>
      <RootLayout suppressHydrationWarning={true}>
        <Component {...pageProps} />
      </RootLayout>
    </html>
  )
}