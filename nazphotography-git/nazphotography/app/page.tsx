import Hero from "@/components/home/Hero";
import CategoryStrip from "@/components/home/CategoryStrip";
import AnimatedStats from "@/components/home/AnimatedStats";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import BookCTA from "@/components/home/BookCTA";
import Testimonials from "@/components/home/Testimonials";
import InstagramFeed from "@/components/home/InstagramFeed";
import BlogPreview from "@/components/home/BlogPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <AnimatedStats />
      <PortfolioPreview />
      <AboutTeaser />
      <ServicesGrid />
      <BookCTA />
      <Testimonials />
      <InstagramFeed />
      <BlogPreview />
    </>
  );
}
