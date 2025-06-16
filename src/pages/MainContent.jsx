import Hero from '@/pages/Hero'
import Events from '@/pages/Events'
import Location from '@/pages/Location';
import Gifts from '@/pages/Gifts';
import Wishes from './Wishes';

// Main Invitation Content
export default function MainContent() {
    return (
        <>
            <Hero />
            <Events />
            <Location />
            <Gifts />
            <Wishes />
        </>
    )
}