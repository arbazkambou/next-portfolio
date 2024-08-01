"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import req modules
import { Pagination } from "swiper/modules";

//import components
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectsData = [
  {
    image: "/work/oasis-admin.png",
    category: "React.js",
    name: "The Wild Oasis",
    description:
      "The Wild Oasis application is designed for managing hotel operations. It allows hotel employees to handle cabins, bookings, and guest details efficiently.",
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
    image: "/work/oasis-cutomer.png",
    category: "Next.js",
    name: "Wild Oasis Reservations",
    description:
      "Wild Oasis Reservation is built with Next.js. It is a customer-facing website where users can reserve cabins for specific days.",
    link: "https://the-wild-oasis-customer-facing.vercel.app/",
    github: "https://github.com/arbazkambou/the-wild-oasis-customer-facing",
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
      "Budgeting with React Router is a React application that helps users manage their budgets effectively. The app allows users to add expenses, view summaries, and manage budget categories.",
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
      "Use Popcorn is a React application that allows users to search for movies, rate them, and manage a watchlist. The app fetches movie data from the IMDb API.",
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
      "A sleek and responsive portfolio website built with Next.js, Tailwind CSS, and ShadCN UI, featuring dynamic content, fast performance, and seamless navigation to showcase projects and skills.",
    link: "https://far-away-flax-rho.vercel.app/",
    github: "https://github.com/arbazkambou/far-away",
  },
];

function Work() {
  return (
    <section className="relative mb-12 xl:mb-48 mt-36">
      <div className="container mx-auto">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Explore my most recent work where I've utilized cutting-edge
            technologies to create dynamic and user-friendly web applications.
          </p>
          <Link href={"/projects"}>
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          {/* show only the first 4 projects */}
          <Swiper
            className="h-[580px] xl:h-[500px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectsData.slice(0, 4).map((project, key) => (
              <SwiperSlide key={key}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Work;
