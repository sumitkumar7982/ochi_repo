import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex px-20 py-16 h-screen bg-zinc-900">
      <div className="w-1/2">
        <h1 className="text-[7vw] uppercase -mb-16 font-semibold tracking-tighter">
          Eye-
        </h1>
        <h1 className="text-[7vw] uppercase font-semibold tracking-tighter">
          Opening
        </h1>
      </div>
      <div className="w-1/2">
        <h1 className="text-[7vw] uppercase -mb-16 font-semibold tracking-tighter">
          Presentations
        </h1>
        <div className="grid grid-cols-2 gap-30">
          <div className="md:col-span-2">
            <div className="mt-20">
              <p className="mb-15">S:</p>
              <ul className="social-list leading-loose social-list--default">
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href="https://www.instagram.com/ochi_design/"
                    previewlistener="true"
                  >
                    Instagram
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href="https://www.behance.net/ochi_design"
                    previewlistener="true"
                  >
                    Behance
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href="https://www.facebook.com/OCHI-presentation-design-103605044779378/"
                    previewlistener="true"
                  >
                    Facebook
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link link link--underline"
                    href="https://www.linkedin.com/company/56403597"
                    previewlistener="true"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="leading-loose">
          <p className="mb-15">L:</p>
      
        </div>
      </div>
    </div>
  );
};

export default Footer;
