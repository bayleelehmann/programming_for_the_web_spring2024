import "./App.css";
import { PortfolioRow } from "./PortfolioRow";

function App() {
  const portfolioItems = [
    {name: "Self Portrait",
    image:"./Baylee_Self Portrait1.jpg",
    desc: ["Self Portrait using Procreate"]},

    {name: "Drop Cap",
    image:"./DropCap_A.jpg",
    desc: ["Drop Cap Letter A"]},

    {name: "Flower Illustration",
    image:"./FlowerIllustration.jpg",
    desc: ["Flower Illustration using Procreate"]},

    {name: "Friendly Spider",
    image:"./FriendlySpider_web.png",
    desc: ["Animation in Procreate"]},

    {name: "Smoking Shroom",
    image:"./Smoking shroom smaller.gif",
    desc: ["Animation using Procreate"]},

    {name: "Hierarchy Poster",
    image:"./HierarchyPoser_1.jpg",
    desc: ["Hierarchy Poser"]},

    {name: "archive Masthead",
    image:"./Masthead_1.jpg",
    desc: ["Masthead Assignment"]},

    {name: "archive Masthead",
    image:"./Masthead_2.jpg",
    desc: ["Masthead Assignment"]},

    {name: "Grid Poster",
    image:"./TypographicGridFormsPoster.jpg",
    desc: ["Typographic GridForms Poster"]},
  ];

  return (
    <>
      <h1>MCAD work</h1>
      <table className="portfolio-table">
        <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
            </tr>
        </thead>
        <tbody>
         {portfolioItems.map((portfolioItems, index) => {
          return (
          <PortfolioRow 
          key={portfolioItems.image}
          odd={index % 2 === 0}
          name={portfolioItems.name} 
          image={portfolioItems.image}
          desc={portfolioItems.desc}
          />
          )
         })}
        </tbody>
      </table>
    </>
  )
}

export default App;