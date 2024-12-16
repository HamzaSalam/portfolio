/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section id='about' className='bg-white dark:bg-slate-800 dark:text-white'>
      <div className='container md:w-[70%] sm:py-16 py-10'>
        <div className='grid items-center gap-4 grid-cols-1 sm:grid-cols-2'>
          <div className=' font-bold relative'>
            <div className=' text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700'>
              ABOUT
            </div>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl'>
              About me
            </h1>
          </div>
          <div className='text-slate-500'>
            <p>
              I am an experienced MERN Stack developer with a strong
              understanding of API's, Redux Toolkit, MUI, Tailwind and Node.js.
              I excel at developing web applications using React.js, Next.js,
              Node.js, Express.js and MongoDB. I consistently deliver
              high-quality software solutions that meet business requirements
              and enhance the user experience.
            </p>
            <br />
            <p>
              <span className='text-white font-bold'> Email : </span>
              hamzasalam25@gmail.com <br />{" "}
              <span className='text-white font-bold'>From : </span>Faisalabad,
              Pakistan <br />
              <span className='text-white font-bold'>Language :</span> English,
              Urdu, Panjabi
            </p>
            <div className=''>
              <a
                href='../../assets/Hamza Salam.pdf'
                className='primary-btn my-6 mr-6 inline-block'
                download
              >
                Download Resume
              </a>
              <a
                href='tel:+923360700170'
                title='Call +123456789 '
                className='outline-btn my-6'
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
