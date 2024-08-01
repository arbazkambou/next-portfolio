import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  HomeIcon,
} from "lucide-react";
function Form() {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="flex relative items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-5" size={20} />
      </div>
      <div className="flex relative items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-5" size={20} />
      </div>
      <div className="flex relative items-center">
        <Textarea
          type="message"
          id="message"
          placeholder="Type Your Message Here."
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      <div>
        <Link href={"#"}>
          <Button className="flex items-center gap-x-1 max-w-[166px]">
            Let's Talk <ArrowRightIcon />
          </Button>
        </Link>
      </div>
    </form>
  );
}

export default Form;
