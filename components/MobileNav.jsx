import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between items-center h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles={"flex flex-col items-center gap-y-12"}
              linkStyles={"text-2xl hover:text-primary "}
            />
          </div>
          <Socials
            containerStyles={"flex gap-x-4"}
            iconStyles={
              " dark:text-white/70  hover:text-primary dark:hover:text-primary transition-all text-2xl"
            }
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
