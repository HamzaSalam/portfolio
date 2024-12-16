import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const Services = [
  {
    name: "Custom Websites",
    description:
      "I build dynamic and user-friendly websites that deliver seamless user experiences and visually captivating animations, making each interaction smooth and engaging.",
    image: "https://picsum.photos/200/300",
    icon: <AiFillLayout className='text-4xl' />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "App Development",
    description:
      "I specialize in building high-performance Mobile Applications using modern frameworks and tools like React Native and Android Studio. Whether it’s a sleek cross-platform app or a powerful native Android app, I ensure seamless performance, user-friendly designs, and scalable solutions tailored to your needs.",
    image: "https://picsum.photos/200/301",
    icon: <MdOutlinePhoneAndroid className='text-4xl' />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Web App Development",
    description:
      "I specialize in creating Full Stack Websites using modern technologies like MERN Stack (MongoDB, Express.js, React.js, and Node.js) and Next.js – a perfect combination.",
    image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className='text-4xl' />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Security",
    description:
      "I provide robust cybersecurity services to protect your digital assets, secure web applications, and prevent data breaches. With proactive strategies and modern tools, I help businesses stay safe and build trust in a connected world. ",
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className='text-4xl' />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <section id='services' className='my-10 container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            className={` ${bgColor} rounded-xl  bg-blue-500/70 text-white  bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className='p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl'>
              {icon}
              <h1 className='text-2xl font-bold'>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
