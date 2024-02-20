import React, { useEffect, useState } from "react";

function Eyes() {
const [rotate,setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY,deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-0.6" className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="  absolute flex top-1/2 left-1/2 gap-10 h-56  -translate-x-[50%] -translate-y-[50%]">
          <div className="flex w-[14vw] h-[14vw] rounded-full bg-zinc-100 items-center justify-center">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" line absolute h-1/6 w-full -rotate-45 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   ">
                <div className="ml-1 w-1/6 h-full rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex w-[14vw] h-[14vw] rounded-full bg-zinc-100 items-center justify-center">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex  items-center justify-center">
              <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=" line absolute h-1/6 w-full -rotate-45 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]    ">
                <div className="ml-1 w-1/6 h-full rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
