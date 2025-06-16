import Hero from '@/pages/Hero'
import Events from '@/pages/Events'
import Gallery from '@/pages/Gallery'
import Gifts from '@/pages/Gifts'
import Location from '@/pages/Location'
import ThankYou from './ThankYou'
import Footer from './Footer'

// Main Invitation Content
export default function MainContent() {
    return (
        <>
            <Hero />
            <Events />
            <Location />
            <Gifts />
            <Gallery />
            <ThankYou />
            <Footer />
        </>
    )
}