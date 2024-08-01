import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "I specialize in building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js), Next.js, and Tailwind CSS. My focus is on creating dynamic, responsive, and user-friendly interfaces.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Combining creativity with technical expertise, I design visually appealing and intuitive user interfaces. Utilizing Tailwind CSS and modern design principles, I ensure a seamless and engaging user experience.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Project Management",
    description:
      "With experience in managing full-stack projects, I oversee the development process from concept to deployment. My skills include coordinating tasks, ensuring timely delivery, and maintaining high-quality standards using tools like Git and Agile methodologies.",
  },
];
function Services() {
  return (
    <section className="mt-[21rem] sm:mt-[2.5rem]">
      <div className="container mx-auto">
        <h2 className="section-title xl:mb-24 mb-16 text-center mx-auto">
          My Services
        </h2>
        {/* Grid Items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              key={index}
              className="w-full max-w-[424px] sm:h-[300px] h-[380px] flex flex-col pt-16 pb-10 justify-center items-center relative"
            >
              <CardHeader className="text-primary absolute -top-[60px]">
                {" "}
                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="text-lg">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>{" "}
    </section>
  );
}

export default Services;

import {
  RiCodeSSlashLine,
  RiPaletteFill,
  RiProjectorFill,
} from "react-icons/ri";

// const servicesData = [
//   {
//     icon: <RiCodeSSlashLine size={72} strokeWidth={0.8} />,
//     title: "Web Development",
//     description:
//       "I specialize in building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js), Next.js, and Tailwind CSS. My focus is on creating dynamic, responsive, and user-friendly interfaces.",
//   },
//   {
//     icon: <RiPaletteFill size={72} strokeWidth={0.8} />,
//     title: "Web Design",
//     description:
//       "Combining creativity with technical expertise, I design visually appealing and intuitive user interfaces. Utilizing Tailwind CSS and modern design principles, I ensure a seamless and engaging user experience.",
//   },
//   {
//     icon: <RiProjectorFill size={72} strokeWidth={0.8} />,
//     title: "Project Management",
//     description:
//       "With experience in managing full-stack projects, I oversee the development process from concept to deployment. My skills include coordinating tasks, ensuring timely delivery, and maintaining high-quality standards using tools like Git and Agile methodologies.",
//   },
// ];
