import ContactInfoHeader from '../_components/contact-info-header';
import { ContactDetailCard } from './edit/_components/store-detail-card';

const ContactDetailPage: React.FC<Params<'contactId'>> = async ({ params: { contactId } }) => {
  return (
    <>
      <ContactInfoHeader contactId={contactId} />
      <ContactDetailCard contactId={contactId} />
    </>
  );
};

export default ContactDetailPage;
