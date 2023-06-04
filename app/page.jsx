import Categories from "@/components/categories";
import RecentJobs from "@/components/jobs";
import Footer from "@/components/footer";
import Header from "@/components/Header/index.";

const Home = () => {
  return (
    <>
      <Header/>
      <div className="bg-[#f7f9fb]">
        <Categories/>
        <div className="bg-[#F8f9fa]">
          <RecentJobs/>
        </div>
        <Footer/>
      </div>
    </>
  );
};
// F1F1F6
// f8f9fa
export default Home;
