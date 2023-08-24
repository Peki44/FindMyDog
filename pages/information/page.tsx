import { getInformation } from "../../src/app/api/information";
import Footer from "../../src/app/components/organisms/Footer"
import User from "../../src/app/components/organisms/User"


export const getStaticProps=async ()=>{
  const res=await getInformation('ocZP4w7iYJOBsb6T0hfjl6azjLf1','1692134341074');
  return{
    props:{
      res
    },
  }
}

export default function Home() {
  return (
    <main >
      <User></User>
      <Footer></Footer>
    </main>
  )
}

 