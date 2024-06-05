import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen p-20">
      <div className="h-[50rem] w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col gap-4 lg:gap-20 w-full items-center">
          <h2 className="text-2xl font-extrabold text-center lg:text-5xl">
            Here's How to Reach Me 🌎 📞
          </h2>
          <div className="text-center text-xl flex flex-col gap-4">
            <p>
              Phone: <a href="tel:+4028021809">402-802-1809</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:brookemccartney64@gmail.com">
                brookemccartney64@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
