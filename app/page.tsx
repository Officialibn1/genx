import Categories from "./components/Categories";
import Header from "./components/Header";
import NewArivals from "./components/NewArivals";
import TopSelling from "./components/TopSelling";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Product Categories Section */}
      <Categories />

      {/* New Arivals section */}
      <NewArivals />

      {/* Top Selling Section */}
      <TopSelling />
    </main>
  )
}
