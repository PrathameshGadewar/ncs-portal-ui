import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Initiatives from "@/components/Initiatives";
import Employers from "@/components/Employers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Initiatives />
      <Employers />
      <Footer />
    </div>
  );
};

export default Index;
