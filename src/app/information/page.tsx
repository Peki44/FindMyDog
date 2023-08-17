// import { getAllDataOnce } from "../api/information"
import Footer from "../components/organisms/Footer"
import User from "../components/organisms/User"

// export const getStaticProps=async ()=>{
//   const res=await getAllDataOnce();
//   return{
//     props:{
//       res,
//     }
//   }
// }


// export const getStaticProps=async ({data}:HomeProps)=>{
//   const res=await fetch('https://find-my-dog-7c135-default-rtdb.firebaseio.com/');
//   data= await res.json();
//   return{
//     props:{
//       data,
//     },
//   }
// }

export default function Home() {
  return (
    <main >
      <User></User>
      <Footer></Footer>
    </main>
  )
}

// export default function Home({posts} : {posts:any} ) {
//   return (
//     <main >
//       <ul>
//       {posts?.map((post:any) => (
//         <li key={post.id}>{post.title}</li>
//         ))}
//     </ul>
//     </main>
    
//   )
// }
 