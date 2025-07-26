"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { TabsContent } from "@radix-ui/react-tabs";

const projectsData = [
  {
    image: "/work/oasis-admin.png",
    category: "React.js",
    name: "The Wild Oasis",
    description:
      "The Wild Oasis is a React application designed for managing hotel operations. It allows hotel employees to handle cabins, bookings, and guest details efficiently.",
    link: "https://the-wild-oasis-rest.vercel.app/",
    github: "https://github.com/arbazkambou/the-wild-oasis",
  },
  {
    image: "/work/natours.png",
    category: "MERN",
    name: "Natours",
    description:
      "Natours is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to browse and book nature tours.",
    link: "https://natoures.vercel.app/",
    github: "https://github.com/arbazkambou/natours",
  },
  {
    image: "/work/renu-market.png",
    category: "MERN",
    name: "Arbaz Share Marketplace",
    description:
      "A full-stack MERN marketplace app where sellers list products, buyers can purchase or place bids, and admins manage users and listings. Inspired by OLX Pakistan.",
    link: "https://arbaz-smp-frontend.vercel.app/",
    github: "https://github.com/arbazkambou/arbaz_smp_backend",
  },
  {
    image: "/work/oasis-cutomer.png",
    category: "Next.js",
    name: "Wild Oasis Reservations",
    description:
      "Wild Oasis Reservation is built with Next.js. It is a customer-facing website where users can reserve cabins for specific days.",
    link: "https://the-wild-oasis-customer-facing.vercel.app/",
    github: "https://github.com/arbazkambou/the-wild-oasis-customer-facing",
  },
  {
    image: "/work/threads.png",
    category: "MERN",
    name: "Threads App",
    description:
      "A full-stack social media clone inspired by Meta Threads. Built with Next.js (v14+), MongoDB, and Clerk/Tailwind UI, featuring user authentication, creating threads, commenting with nested replies, searching users, activity notifications and responsive UX.",
    link: "https://threads-app-blush-two.vercel.app/",
    github: "https://github.com/arbazkambou/threads-app",
  },
  {
    image: "/work/esimcard.png",
    category: "Next.js",
    name: "eSIM Card",
    description:
      "SEO-optimized frontend for a global eSIM platform offering data-only and Data+Voice+SMS plans across 200+ countries. Built with Next.js and integrated APIs for purchasing local, regional, and global eSIMs.",
    link: "https://esimcard.com/",
    github: "https://github.com/Codiea/esimcard-next",
  },
  {
    image: "/work/phonico.png",
    category: "Next.js",
    name: "Phonico",
    description:
      "Frontend for a USA-focused eSIM platform offering prepaid plans with unlimited calls, texts, and affordable data. Built with Next.js and integrated with APIs for purchase and activation.",
    link: "https://phonico.com/",
    github: "https://github.com/Codiea/phonico-next",
  },
  {
    image: "/work/ultimateMobile.png",
    category: "Next.js",
    name: "Ultimate Mobile",
    description:
      "Frontend for a USA eSIM service offering prepaid data with unlimited talk & text. Built with Next.js, featuring fast activation, 5G support, and seamless API integration.",
    link: "https://ultimatemobile.com/",
    github: "https://github.com/Codiea/ultimatemobile-next",
  },
  {
    image: "/work/defyMobile.png",
    category: "Next.js",
    name: "Defy Mobile",
    description:
      "Frontend for an international travel eSIM platform offering local, regional, and global plans. Built with Next.js and integrated APIs for instant activation and smooth user experience.",
    link: "https://defymobile.com/",
    github: "https://github.com/Codiea/esimcard-whitelabel-next-app-routing",
  },
  {
    image: "/work/worldwise.png",
    category: "React.js",
    name: "WorldWise",
    description:
      "WorldWise is a travel app. This app helps users keep track of the places they've visited and plan their future trips.",
    link: "https://the-world-wise-mu.vercel.app/",
    github: "https://github.com/arbazkambou/the-world-wise",
  },
  {
    image: "/work/blog.png",
    category: "React.js",
    name: "Atomic Blog",
    description: "Atomic Blog is a simple blogging platform built using React.",
    link: "https://atomic-blog-flame.vercel.app/",
    github: "https://github.com/arbazkambou/atomic-blog",
  },
  {
    image: "/work/budget.png",
    category: "React.js",
    name: "BudgetWise",
    description:
      "Budgeting with React Router is a React application that helps users manage their budgets effectively.",
    link: "https://react-router-budgeting-app.vercel.app/",
    github: "https://github.com/arbazkambou/react-router-budgeting",
  },
  {
    image: "/work/eatandsplit.png",
    category: "React.js",
    name: "Eat & Split",
    description:
      "Eat and Split is a simple React application designed to help you split bills with friends. Whether you’re dining out or sharing expenses.",
    link: "https://eat-and-split-khaki.vercel.app/",
    github: "https://github.com/arbazkambou/eat-and-split",
  },
  {
    image: "/work/farway.png",
    category: "React.js",
    name: "Far Away",
    description:
      "Far Away is a React application designed to help users prepare a list of items they need to carry with them.",
    link: "https://far-away-flax-rho.vercel.app/",
    github: "https://github.com/arbazkambou/far-away",
  },
  {
    image: "/work/pizza.png",
    category: "React.js",
    name: "Fast React Pizza",
    description:
      "Fast React Pizza is a React application where users can browse through a list of pizzas, add them to their cart, and place an order.",
    link: "https://fast-react-pizza-rho-dun.vercel.app/",
    github: "https://github.com/arbazkambou/fast-react-pizza",
  },
  {
    image: "/work/popcorn.png",
    category: "React.js",
    name: "PopCorn",
    description:
      "Use Popcorn is a React application that allows users to search for movies form IMDB api, rate them, and manage a watchlist.",
    link: "https://usep-popcorn.vercel.app/",
    github: "https://github.com/arbazkambou/use-popcorn",
  },
  {
    image: "/work/quiz.png",
    category: "React.js",
    name: "React Quiz",
    description:
      "React Quiz is a React application that presents multiple-choice questions on various React-specific concepts.",
    link: "https://react-quiz-one-roan.vercel.app/",
    github: "https://github.com/arbazkambou/react-quiz",
  },
  {
    image: "/work/todo.png",
    category: "React.js",
    name: "React Todo",
    description:
      "This is a simple Todo application built with React. It allows users to add, delete, and mark tasks as completed.",
    link: "https://react-todo-app-nu-smoky.vercel.app/",
    github: "https://github.com/arbazkambou/react-todo-app",
  },
  {
    image: "/work/portfolio.png",
    category: "Next.js",
    name: "Personal Portolio",
    description:
      "A sleek and responsive portfolio website built with Next.js, Tailwind CSS, ShadCN UI and Framer Motion.",
    link: "https://arbaz-shoukat.vercel.app/",
    github: "https://github.com/arbazkambou/next-portfolio",
  },
];

const uniqueCategories = [
  "All",
  ...new Set(projectsData.map((item) => item.category)),
];
function Page() {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All");
  const filteredProjects = projectsData.filter((project) => {
    return category === "All" ? project : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Page;
