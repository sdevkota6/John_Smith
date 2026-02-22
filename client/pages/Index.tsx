import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground smooth-scroll">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <BookingCTA />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
