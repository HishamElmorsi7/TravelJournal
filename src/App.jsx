import Navbar from "./components/Navbar"
import Blog from "./components/Blog"
import data from "./data.js"


export default function App() {

    const blogs = data.map((item)=> {
        return(
            <Blog 
                key= {item.id}
                {...item}
            />
        )

    })


    return (
        <div className="content">
            <Navbar />
            <section className="blogs">
                {blogs}
            </section>
        </div>
    )
}