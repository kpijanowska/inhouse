import ContactForm from "../components/layout/contact/ContactForm";
import ContactHero from "../components/layout/contact/ContactHeader";
import ContactInfo from "../components/layout/contact/ContactInfo";
import Navbar from "../components/layout/Navbar";

export default function Contact() {
    return (
        <>
        <Navbar variant="light"/>
        <ContactHero/>
        <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-36 px-8 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
         </div>
</section>
        </>
    )
}