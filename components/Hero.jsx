import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Socials from "./Socials";
import Link from "next/link";
import Badge from "./Badge";

function Hero() {
  return (
    <section className="py-12 xl:py-24  xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left max-w-[600px] ">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Arbaz Shoukat</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into my self, my vocational
              journey, and what I engage in professioally.
            </p>
            {/* Buttons */}
            <div className=" flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto  xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a href={"/cv.pdf"} download={"cv"}>
                <Button
                  variant={"outline"}
                  className="gap-x-2 bg-secondary text-white dark:bg-accent"
                >
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            <Socials
              containerStyles={"flex gap-6 mx-auto xl:mx-0"}
              iconStyles={
                "text-foreground text-[22px] hover:text-primary transition-all"
              }
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge1 */}
            <Badge
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              endCountText={"+"}
              badgeText={"Years Of Learning"}
              containerStyles={"absolute top-[24%] -left-[5rem]"}
            />
            {/* badge2 */}
            <Badge
              icon={<RiTodoFill />}
              endCountNum={20}
              endCountText={"+"}
              badgeText={"Finished Projects"}
              containerStyles={"absolute top-[80%] -left-[1rem]"}
            />
            {/* badge3 */}
            <Badge
              icon={<RiTeamFill />}
              endCountNum={5}
              endCountText={"+"}
              badgeText={"Course Completed"}
              containerStyles={"absolute top-[55%] -right-[8rem]"}
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-1"></div>
            <DevImg
              containerStyles={
                "bg-hero_shape w-[510px] h-[462px] bg-no-repeate relative bg-bottom"
              }
              imgSrc={"/hero/developer.png"}
            />
          </div>
        </div>
        {/* icons */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className=" text-3xl text-primary " />
        </div>
      </div>
    </section>
  );
}

export default Hero;
