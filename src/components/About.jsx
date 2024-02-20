import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-0.2" className="w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black -mb-72">
      <h1 className="text-[4vw] opacity-80 leading-[4vw] tracking-tighter -mb-10">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="  border-t-[1.55px] border-[#a1b562] mt-28 flex justify-between items-center py-4 px-16 -mb-[35vh]">
        <div className="grid gap-y-30 md:grid-cols-12 py-15 outline-top mb-60 w-[95%] text-lg opacity-80 ">
          <div className="md:col-span-4 lg:col-span-6 reset-last">
            <p>What you can expect:</p>
          </div>
          <div className="md:col-span-4 lg:col-span-4 reset-last">
            <div className="wysiwyg reset-last max-w-275 ">
              <p className="mb-10 w-[20vw]">
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it's live or digital,
                delivered for one or a hundred people.{" "}
              </p>
              <p className="w-[20vw]">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-2 reset-last md:items-end md:justify-end md:flex laptop:justify-start">
            <div>
              <p className="mb-15">S:</p>
              <ul className="social-list leading-loose social-list--default">
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href="https://www.instagram.com/ochi_design/"
                    previewlistener="true"
                  >
                    Instagram{" "}
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href="https://www.behance.net/ochi_design"
                    previewlistener="true"
                  >
                    Behance{" "}
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href="https://www.facebook.com/OCHI-presentation-design-103605044779378/"
                    previewlistener="true"
                  >
                    Facebook{" "}
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href="https://www.linkedin.com/company/56403597"
                    previewlistener="true"
                  >
                    Linkedin{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="  border-t-[1.55px] flex gap-5 border-[#a1b562] mt-28 justify-between  py-4 px-18 mb-[35vh]  ">
        <div className="w-1/2 ">
          <h1 className="text-6xl tracking-tighter mb-8 opacity-80">
            Our approach:
          </h1>
          <button className="px-7 py-5 bg-zinc-900 rounded-full text-white uppercase flex flex-wrap items-center gap-10">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 bg-[#b0c859] h-[67vh] rounded-2xl">
         <picture>
            <img className="w-full h-full bg-cover rounded-2xl" src="https://images.unsplash.com/photo-1587053170222-6d3e76bcef85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
         </picture>
        </div>
      </div>
    </div>
  );
};

export default About;
