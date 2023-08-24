import Footer from "@/app/components/organisms/Footer";
import User from "@/app/components/organisms/User";
import { getInformation } from "@/app/api/information";


export interface HomeProps {
    data?: any;
}

export default function Home(
  {data}:HomeProps
) {
  return (
    <main>
      {/* <div>
        <h1>data</h1>
        <p suppressHydrationWarning={true}>{JSON.stringify(data)}</p>
      </div> */}
      <User data={data}></User>
      <Footer></Footer>
    </main>
  )
}

export async function getStaticProps() {
    const data = await getInformation("ocZP4w7iYJOBsb6T0hfjl6azjLf1", "1692353598935");
  return {
    props: {
      data: data
    }
  }
}