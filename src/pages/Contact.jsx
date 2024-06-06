import { PageTitle } from "../components";
import { ContactHero, Form, UnlockIt } from "../containers";

const Contact = () => {
  return (
    <>
      <PageTitle title={"Contact Us"} />
      <ContactHero />
      <Form />
      <UnlockIt />
    </>
  );
};

export default Contact;
