import CTA from "../components/layout/home/CTA";
import Navbar from "../components/layout/Navbar";
import RealizationsGrid from "../components/layout/realizations/RealizationsGrid";
import RealizationsHeader from "../components/layout/realizations/RealizationsHeader";

export default function Realizations() {
    return (
        <>
            <Navbar variant="light"/>
            <RealizationsHeader/>
            <RealizationsGrid/>
            <CTA/>
        </>
    );
}