import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter"
import Card from "./components/Card"
import TopSales from "./components/TopSales"


export default async function Home() {


  return (


    <div className="w-full mx-auto flex flex-col items-center justify-center mr-0 ">

      <div className="">


        <Hero />
        <TopSales />
        <Newsletter />

      </div>
    </div>

  )
}
