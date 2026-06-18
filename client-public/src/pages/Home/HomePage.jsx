import HeroSection from './sections/HeroSection'
import SearchPackagesSection from './sections/SearchPackagesSection'
import PopularDestinationsSection from './sections/PopularDestinationsSection'
import FeaturedPackagesSection from './sections/FeaturedPackagesSection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import TravelGallery from './sections/TravelGallery'
import TestimonialsSection from './sections/TestimonialsSection'
import LatestBlogsSection from './sections/LatestBlogsSection'
import ContactCTASection from './sections/ContactCTASection'

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden bg-[#FAF8F4] text-dark-900">
      <HeroSection />
      <SearchPackagesSection />
      <PopularDestinationsSection />
      <FeaturedPackagesSection />
      <WhyChooseUsSection />
      <TravelGallery />
      <TestimonialsSection />
      <LatestBlogsSection />
      <ContactCTASection />
    </div>
  )
}

export default HomePage
