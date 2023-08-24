import Footer from "@/app/components/organisms/Footer";
import User from "@/app/components/organisms/User";
import { GetServerSideProps } from "next";
import { getInformation } from "../../api/information";


export interface HomeProps {
    data?: any;
}

export default function Home(
  {data}:HomeProps
) {

  return (
    <main >
      <User data={data}></User>
      <Footer></Footer>
    </main>
  )
}

export async function getServerSideProps({params} : any) {
  const data = await getInformation(params.userId, params.dogId);
  return {
    props: {
      data: data
    }
  }
}