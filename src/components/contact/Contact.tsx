import { useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import React from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      id='contact'
      className='min-h-screen flex items-center justify-center p-4 bg-white dark:bg-slate-800 dark:text-white'
    >
      <div className='max-w-7xl w-full mx-auto'>
        <h1 className='text-center text-2xl font-bold mb-16'>
          <span className='text-white border-b-2 border-primary pb-2 dark:bg-slate-800'>
            CONTACT
          </span>
        </h1>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Contact Form */}
          <div>
            <h2 className='text-4xl font-bold mb-8 '>Send us a message 🚀</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                className='w-full p-4 rounded-lg glass-input'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-4 rounded-lg glass-input'
                required
              />
              <textarea
                name='message'
                placeholder='Your Message'
                value={formData.message}
                onChange={handleChange}
                className='w-full p-4 rounded-lg glass-input min-h-[200px] resize-none text-black'
                required
              />
              <button
                type='submit'
                className='bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className='lg:pl-12'>
            <div className='space-y-8'>
              <div>
                <h2 className='text-4xl font-bold mb-4'>Let's Chat.</h2>
                <h3 className='text-4xl font-bold mb-4'>
                  Tell me about your project.
                </h3>
                <p className='text-xl text-gray-400'>
                  Let's create something together 🔥
                </p>
              </div>

              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='p-3 rounded-full bg-secondary/50'>
                    <Mail className='w-6 h-6' />
                  </div>
                  <div>
                    <p className='font-semibold'>Email</p>
                    <p className='text-gray-400'>hamzasalam25@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='p-3 rounded-full bg-secondary/50'>
                    <MapPin className='w-6 h-6' />
                  </div>
                  <div>
                    <p className='font-semibold'>Address</p>
                    <p className='text-gray-400'>Faisalabad, Pakistan</p>
                  </div>
                </div>
              </div>

              <div>
                <p className='text-xl mb-4'>
                  Visite my social profile and get connected
                </p>
                <div className='flex gap-4'>
                  <a
                    href='https://www.linkedin.com/in/hamza-salam786/'
                    className='social-icon'
                  >
                    <Linkedin className='w-6 h-6' />
                  </a>
                  <a
                    href='https://github.com/HamzaSalam'
                    className='social-icon'
                  >
                    <Github className='w-6 h-6' />
                  </a>
                  <a
                    href='mailto:hamzasalam25@gmail.com'
                    className='social-icon'
                  >
                    <Mail className='w-6 h-6' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
