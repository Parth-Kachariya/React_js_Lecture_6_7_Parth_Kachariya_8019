import Hero from "../Components/Hero";
import ServiceCard from "../Components/ServiceCard";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="container my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          <ServiceCard title="Web Design" />
          <ServiceCard title="React Development" />
          <ServiceCard title="SEO Marketing" />
        </div>
      </div>
    </>
  );
};

export default Home;
