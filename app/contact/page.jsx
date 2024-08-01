import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall, Home, Phone } from "lucide-react";
function Page() {
  return (
    <section>
      <div className="container mx-auto">
        {/* text and ilusteration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 mx-w-md mb-8">Get in Touch!</h1>
            <p className="subtitle max-w-[400px]">
              I’d love to connect and explore how we can work together. Whether
              you have a project in mind, need assistance, or just want to chat
              about tech, feel free to drop me a message. Let’s create something
              amazing together!
            </p>
          </div>
          {/* illustraion */}

          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/* info etxt and form */}

        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 gap-x-8  xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>arbazkamboh342@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Dahranwala, Punjab, Pakistan</div>
            </div>
            <div className="flex items-center gap-x-8">
              <Phone size={18} className="text-primary" />
              <div>0304-0808068</div>
            </div>
          </div>
          <Form>form</Form>
        </div>
      </div>
    </section>
  );
}

export default Page;
