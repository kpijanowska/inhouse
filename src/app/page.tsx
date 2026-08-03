import Hero from "@/app/components/layout/home/Hero"
import WhyChooseUs from "./components/layout/home/WhyChooseUs";
import Stats from "./components/layout/home/Stats";
import FeaturedProjects from "./components/layout/home/FeaturedProjects";

// export default function Page() {
//     return <h1>Home Page</h1>
// }

export default function Home() {
    return (
        <>
            <Hero/>
            <WhyChooseUs/>
            <Stats/>
            <FeaturedProjects/>
        </>
    );
}