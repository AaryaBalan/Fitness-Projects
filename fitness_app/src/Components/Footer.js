import React from "react";
import insta from "../assets/instagram .png"
import discord from "../assets/discord.png"
import logo from "../assets/logo.png"
const Footer = () => {
    return (
        <div>
            <footer
                className="relative h-60"
                style={{
                    background: "linear-gradient(135deg, #0D1B2A, #8E44AD, #1B2631)",
                    backgroundSize: "400% 400%",
                    animation: "gradientAnimation 5s ease infinite", // Faster animation for the gradient
                }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>

                <div className="flex justify-center space-x-100 items-center h-full relative z-10 gap-8 px-6">
                    {/* Text Section */}
                    <img src={logo} alt="" width={100} height={100} className="mt-6 rounded-lg mx-4" />
                    <div className="flex flex-col items-start text-white mt-6 transition-transform transform mx-4 hover:scale-105 max-w-4xl">
                        <h2 className="text-3xl font-bold">Stay Connected</h2>
                        <p className="mt-2">Follow us on our social media platforms</p>
                        <div className="mt-4 flex space-x-4">

                            <a href="https://discord.gg/K7UNqtSt" className="text-lg mx-4">
                                <img src={discord} />
                            </a>
                            <a href="https://www.instagram.com/clubasymmetric.cit/?igsh=MTZiYjV6dXdtbDJiOA%3D%3D" className="text-lg ">
                                <img src={insta} alt="" />
                            </a>
                        </div>
                        <div className="mt-4 text-sm">
                            &copy; {new Date().getFullYear()}{" "}
                            <span className="font-semibold">Assymetric</span>. All rights
                            reserved.
                        </div>
                    </div>

                    {/* Google Maps Section */}
                    <div className="rounded-lg overflow-hidden shadow-lg mx-4 mt-6 mb-3 py-4 transition-transform transform hover:scale-105">
                        <iframe
                            src="https://maps.google.com/maps?q=cit%20chennai&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                            frameBorder="0"
                            scrolling="no"
                            style={{ width: '450px', height: '150px' }} // Adjusted size for a smaller map
                            title="Map of CIT Chennai"
                            className="rounded-lg" // Rounded edges for the iframe
                        ></iframe>
                    </div>
                </div>
            </footer>

            <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
        </div>
    );
};

export default Footer;