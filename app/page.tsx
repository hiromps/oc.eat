import Hero from '@/components/hero';
import Profile from '@/components/profile';
import SocialPlatforms from '@/components/social-platforms';
import Gallery from '@/components/gallery';
import Services from '@/components/services';
import ContactForm from '@/components/contact-form';

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SocialPlatforms />
      <Gallery />
      <Services />
      <ContactForm />
    </>
  );
}