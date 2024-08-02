import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  GraduationCap,
  Calendar,
  Briefcase,
  PhoneCall,
  Home,
  Dot,
  CircleArrowRight,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Arbaz Shoukat",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "0304-0808068",
  },
  {
    icon: <MailIcon size={20} />,
    text: "arbazkamboh342@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 20 April, 1999",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor in Computer Science",
  },
  {
    icon: <Home size={20} />,
    text: "Chishtian, Dahranwala, Punjab, Pakistan",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "Islamia University Of Bahawalpur",
        qualification: "Bachelor in Computer Science",
        year: "2021-2025",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "ABC Inc.",
        role: "Software Engineer",
        year: "2018-2020",
      },
    ],
  },
];

const skillsData = [
  {
    title: "Skills",
    data: [
      {
        name: "Frontend Development",
      },
      {
        name: "HTML, CSS, JavaScript, React, Tailwind, Shadcn, Bootstrap",
      },
      {
        name: "Backend Development",
      },
      {
        name: "Next.js, Node.js, Express, Mongodb, Mongoose, Supabase",
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },

      {
        imgPath: "/about/figma.svg",
      },

      {
        imgPath: "/about/notion.svg",
      },

      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];
function About() {
  function getData(arr, title) {
    return arr.find((item) => item.title === title);
  }

  return (
    <section className="pb-12 xl:py-24 flex justify-center ">
      <div className="container mx-auto h-[700px]">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles={
                "bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              }
              imgSrc={"/about/developer.png"}
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal" className="w-[162px] xl:w-auto">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  value="qualification"
                  className="w-[162px] xl:w-auto"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger value="skills" className="w-[162px] xl:w-auto">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Crafting Modern Web Solutions with Advanced Technologies
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in developing intuitive and responsive
                      websites using the MERN stack, Next.js, and Tailwind CSS.
                      With a focus on client-side rendering, efficient API
                      integration, and dynamic user experiences, I deliver
                      modern and engaging web applications
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div key={index} className="text-primary">
                              {item.icon}
                            </div>
                            <div key={index}>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Urdu, Punjabi, English</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesom joruney
                    </h3>
                    {/* experience and education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8 ">
                      {/* experience */}

                      {/* education */}
                      <div className="flex flex-col gap-y-8">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <div>
                            <GraduationCap size={28} />
                          </div>
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item, index) => {
                              const { university, qualification, year } = item;
                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-8 group
            "
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className=" text-lg leading-none mb-4 text-muted-foreground">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8 ">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill set */}
                      <div>
                        {getData(skillsData, "Skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <span
                                  className={`font-medium ${
                                    (name === "Frontend Development" ||
                                      name === "Backend Development") &&
                                    "font-extrabold text-lg"
                                  }`}
                                >
                                  {name === "Frontend Development" ||
                                  name === "Backend Development" ? (
                                    <span className="flex gap-2 items-center font-extrabold text-lg">
                                      <CircleArrowRight
                                        size={20}
                                        className="text-primary "
                                      />{" "}
                                      {name}
                                    </span>
                                  ) : (
                                    name
                                  )}
                                </span>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      {/* <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4> */}
                      {/* <div className="border-b border-border mb-4"></div> */}
                      {/* Tools list */}
                      {/* <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "Tools").data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  height={48}
                                  width={48}
                                  alt=""
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div> */}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
