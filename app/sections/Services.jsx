"use client";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "UI/UX Design",
    description: "Designing seamless, user-centric experiences that turn visitors into loyal users with intuitive interfaces.",
    image: "/assets/images/seo.png",
  },
  {
    title: "Branding",
    description: "We create compelling visuals that capture your brand's essence, making a lasting impression with design that speaks.",
    image: "/assets/images/web.png",
  },
  {
    title: "Web Development",
    description: "Building high-performing, scalable websites from scratch, optimizing your digital presence for success.",
    image: "/assets/images/web.png",
  },
  {
    title: "E-commerce Applications",
    description: "Custom online stores designed to convert and drive sales with user-friendly and engaging platforms.",
    image: "/assets/images/e-comm.png",
  },
  {
    title: "Consultations",
    description: "Get tailored, expert guidance to sharpen your digital strategy. We turn your vision into a precise, impactful reality.",
    image: "/assets/images/consult.png",
  },
  {
    title: "Web Development Training",
    description: "Master the art of building and scaling modern websites. Practical, hands-on training for future-ready skills.",
    image: "/assets/images/train.png",
  },
];

const bottomServices = [
    { title: "Custom Dashboards", description: "Experience data like never before with customized dashboards designed to empower smarter, data-driven decisions.", image: "/assets/images/service2.png" },
    { title: "SEO Optimization", description: "Maximize your online visibility and climb search engine rankings. We transform traffic into measurable growth.", image: "/assets/images/22.png" },
  ];
  

  const ServicesSection = () => {
    return (
      <section className="flex flex-col gap-12 pb-20 mx-auto max-w-[1248px] px-6">
        <h2 className="font-vastago text-[48px] font-normal leading-[120%] tracking-[-1px] mb-[-25px]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              wide
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default ServicesSection;