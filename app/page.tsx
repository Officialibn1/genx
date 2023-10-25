import Categories from "./components/Categories";
import Header from "./components/Header";
import NewArivals from "./components/NewArivals";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Product Categories Section */}
      <Categories />

      {/* New Arivals section */}
      <NewArivals />
    </main>
  )
}
