import { Contact } from "@/components/Contact";
import { ContactProps } from "@/components/Contact/ContactProps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti",
  alternates: {
    canonical: "/contacts",
  },
};

function ContactsPage() {
  const contacts: ContactProps[] = [
    {
      title: "Maria Filippini Lazzari",
      description: "Autrice teatrale bresciana",
      url: "https://mariafilippini.it",
      mail: "mariafilippinilazzari@gmail.com",
      imageSrc: "/images/logo.jpg",
    },
    {
      title: "Mario Lazzari",
      description: "Senior full stack developer",
      url: "https://mariolazzari.it",
      mail: "mario.lazzari@gmail.com",
      imageSrc: "/images/logoMario.jpg",
    },
  ];

  return (
    <>
      <h2 className="text-4xl mb-12 text-center">Contatti</h2>
      <div className="flex justify-center gap-16 flex-wrap">
        {contacts.map(contact => (
          <Contact key={contact.url} {...contact} />
        ))}
      </div>
    </>
  );
}

export default ContactsPage;
