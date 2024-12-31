
import Footer from "./components/Footer"
import Nevbar from "./components/Nevbar"
import NewsBoard from "./components/NewsBoard"
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("General")

  return (
    <div>
    <Nevbar setCategory={setCategory} />
    
    <NewsBoard category={category} />
      
      <Footer />
    </div>
  )
}

export default App
