import { ContactForm } from '../../_components/contact-form';

const ContactEditPage: React.FC<Params<'contactId'>> = ({ params: { contactId } }) => {
  return <ContactForm contactId={contactId} />;
};

export default ContactEditPage;
