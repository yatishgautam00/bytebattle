import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Registration Phase",
      content: (
        <div>
          <p className="text-neutral-100 dark:text-neutral-100 text-xs md:text-sm font-normal mb-8">
            {/* Participants can register and form teams of up to four members. A
            registration fee of ₹50 per member is required. */}
            <span className="text-lg md:text-4xl mb-4  flex flex-col text-yellow-400 dark:text-white ">
              <span>Dates:</span>
              <span className="text-lg md:text-2xl mb-4 text-yellow-400 dark:text-white ">
                {" "}
                22-10-2024 to 12-11-2024
              </span>
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              {/* <h2 className="text-lg md:text-4xl mb-4  flex flex-col text-white dark:text-white ">
                <span>Dates:</span>
                <span  className="text-lg md:text-2xl mb-4 text-white dark:text-white "> 22-10-2024 to 12-11-2024</span>
              </h2> */}
              <p className="text-neutral-100 dark:text-neutral-100 text-xs md:text-sm font-normal mb-8">
                Participants can register and form teams of up to four members.
                A registration fee of ₹50 per member is required.
              </p>
            </div>
            <img
              src="/register.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Development Phase",
      content: (
        <div>
          <p className="text-neutral-100 dark:text-neutral-100 text-xs md:text-sm font-normal mb-8">
            <span className="text-lg md:text-4xl mb-4  flex flex-col text-yellow-400 dark:text-white ">
              <span>Dates:</span>
              <span className="text-lg md:text-2xl mb-4 text-yellow-400 dark:text-white ">
                {" "}
                22-10-2024 to 12-11-2024
              </span>
            </span>
          </p>
          {/* <p className="text-neutral-100 dark:text-neutral-100 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p> */}
          <div className="grid grid-cols-1 gap-4 text-slate-100">
            During this two-week period, participants will transform their ideas
            into tangible projects through brainstorming, prototyping, and
            coding. Teams should collaborate effectively, seek feedback from
            peers and mentors, and refine their prototypes. As the deadline
            approaches, prepare final presentations to communicate your
            projects&lsquo; value to the judges and showcase your creativity!
          </div>
        </div>
      ),
    },
    {
      title: "On Judgment Day",
      content: (
        <div>
          <p className="text-yellow-400 dark:text-neutral-100 text-xs md:text-sm font-normal mb-4">
            Teams will present their projects to the judging panel, showcasing
            the hard work and creativity that went into their development.
            Judges will evaluate each project based on the following criteria:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-slate-100 dark:text-neutral-300 text-xs md:text-sm">
              ✅ The code should be well-organized, readable, and maintainable,
              demonstrating best practices in software development.
            </div>
            <div className="flex gap-2 items-center text-slate-100 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Projects should address real-world problems and exhibit a
              positive impact on society, showing how they can be implemented in
              everyday life
            </div>
            <div className="flex gap-2 items-center text-slate-100 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Judges will assess the uniqueness of the ideas presented and
              their potential to bring something new to the market or field.
            </div>
            <div className="flex gap-2 items-center text-slate-100 dark:text-neutral-300 text-xs md:text-sm">
              ✅ The project should be designed to grow and adapt over time,
              handling increased usage and complexity without losing
              functionality.
            </div>
            <div className="flex gap-2 items-center text-slate-100 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Teams must clearly articulate their project&lsquo;s objectives, key
              features, and overall impact, captivating the judges throughout
              their presentation.
            </div>
            <div className="flex gap-2 items-center text-slate-100 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Solutions should be accessible across various platforms and
              devices, ensuring a wide range of users can benefit from the
              project.
            </div>
            <div className="flex gap-2 items-center text-slate-100 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Projects should demonstrate a complete development approach,
              showcasing both front-end and back-end capabilities to create a
              fully functional solution.
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full py-10 px-4 lg:px-10 md:px-5 text-justify ">
      <Timeline data={data} />
    </div>
  );
}
