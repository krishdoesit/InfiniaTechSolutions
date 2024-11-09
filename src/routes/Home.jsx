import React from "react";
import { Hero } from '../components/Hero';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const data = {
    Services: [
        // change href to id
        { title: "Serv Adfdfdfdd", href: "#" },
        { title: "Serv Bdfdfdfdfd", href: "#" },
        { title: "Serv Cdfdfdfdf", href: "#" },
        { title: "Serv Ddfdfdfdfd", href: "#" }
    ],
    testimonialsData: [
        {
            quote: "InfiniaTech Solutions helped us streamline our processes and boost our efficiency!",
            author: "John Doe, CEO of ABC Corp",
        },
        {
            quote: "Their cloud migration service was seamless and had an immediate positive impact on our operations.",
            author: "Jane Smith, CTO of XYZ Inc",
        },
        {
            quote: "Professional, reliable, and knowledgeable – I highly recommend InfiniaTech Solutions!",
            author: "Michael Lee, Founder of StartUp Hub",
        },
    ]
}

export const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-950">
            <Hero />
            {/* services cards */}
            <div id="services" className="flex flex-wrap justify-center items-center w-full p-6 gap-6 py-15">
                {data.Services.map((services, index) => (
                    <a key={index} href={services.href} className="flex p-[2px] w-full max-w-xs group rounded-md bg-gradient-to-r from-transparent via-transparent to-transparent hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300  hover:shadow-slate-800 hover:shadow-lg">
                        <div className="flex text-center max-md:flex-col relative p-3 rounded-md bg-[#101828] h-full w-full">
                            <div className="p-1 px-3 transition-transform duration-300 group-hover:-translate-y-2 text-left">
                                <h3 className="text-2xl text-white mb-3">
                                    {services.title}
                                </h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {services.href}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            {/* testimonials */}
            <section id="testimonials" className="py-16 px-8 bg-gray-900 text-white text-center">
                <h2 className="text-2xl mb-8">What Our Clients Say</h2>

                <div className="w-4/5 max-w-xl mx-auto">
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showStatus={false}
                        autoPlay={true}
                        interval={5000}
                        showThumbs={false}
                    >
                        {data.testimonialsData.map((testimonial, index) => (
                            <div key={index} className="p-4">
                                <p className="text-lg leading-relaxed mb-4">"{testimonial.quote}"</p>
                                <p className="text-sm font-semibold text-gray-400 mb-6">
                                    {testimonial.author}
                                </p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        </div>
    )
}