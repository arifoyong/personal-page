import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-2 text-muted-foreground">
      {/* Left */}
      <section className="flex flex-col w-full lg:w-1/3 rounded-lg shadow-xl border-1">
        {/* Photo section */}
        <div className="flex flex-row p-4 gap-4">
          <div className="flex">
            <Image src={`https://4rifoppo-chatbot.s3.ap-southeast-1.amazonaws.com/profile_pic.JPEG`}
              className="object-cover"
              width={180}
              height={180}
              priority
              alt="Arif Oyong" />
          </div>
          <div className="flex flex-col">
            <div className="flex font-bold md:justify-start py-4">
              Hi. I am Arif Oyong
            </div>

            <div className="flex flex-col text-sm py-2 gap-1">
              <Link href="mailto: arifoyong@gmail.com">📧  arifoyong@gmail.com</Link>
              <p>📞  86528243</p>
            </div>
            <div className="flex flex-col text-sm py-2 gap-1">
              <p className="text-blue-800 underline py-1"><Link href="https://www.linkedin.com/in/arif-wicaksono-oyong-62087721">My LinkedIn</Link></p>
              <p className="text-blue-800 underline py-1"><Link href="https://github.com/arifoyong">My Github</Link></p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 ">
          {/* About Me */}
          <div className="flex flex-col gap-2 text-sm">
            <div className="text-2xl font-bold">
              Summary
            </div>
            <div className="flex flex-col gap-2">
              <p>
                I’m a digital transformation leader with a strong foundation in software engineering. I apply cutting-edge digital technologies—including AI, data science, full-stack development, and Microsoft Power Platform—to help organizations optimize processes, gain insights, and innovate faster.
              </p>
              <p>
                My career began in industrial machine development for manufacturing, where I gained hands-on experience in mechanical and electrical design. This foundation led me to specialize in collecting machine data and using it for system integration, predictive maintenance, and automation.
              </p>
              <p>
                At my core, I’m passionate about exploring and applying new technologies to solve real-world problems
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col py-4 gap-2 text-sm">
            <div className="text-2xl font-bold">
              Top Skills
            </div>
            <ul className="list-disc md:gap-8 ml-2">
              <li>Fullstack: Python, NodeJS, React, Docker</li>
              <li>Large Language Model</li>
              <li>BI & Data Analysis: SQL, PowerBI</li>
              <li>Power Platform</li>
            </ul>
          </div>

          {/* Language */}
          <div className="flex flex-col py-4 gap-2 text-sm">
            <div className="text-2xl font-bold">
              Language
            </div>
            <ul className="list-disc md:gap-8 ml-2">
              <li>English: fluent</li>
              <li>Indonesian: native</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Right */}
      <section className="flex flex-col flex-1 rounded-lg shadow-xl border-1 p-4">
        {/* Work Experience */}
        <div className="flex flex-col pt-4 text-sm ">
          <div className="text-2xl font-bold ">
            Work Experience
          </div>
          <div className="pt-2 ml-2">
            <p className="text-lg font-semibold">Application Engineer - APEC Digitalization</p>
            <p className="font-medium">DHL Express <span className="bg-secondary rounded-xl px-4 ml-2">2024 - current</span></p>
            {/* <div className="pt-1 ml-1">
                <div className="underline">Key responsibilities:</div>
                <div>Leading a team of engineers for:</div>
                <ul className="list-disc list-inside">
                  <li>Lead & provide technical leadership to engineering team with diverse role and skillset</li>
                  <li>Plan & implement rationalization activities through introduction of automation, development of application, and/or BI analytics</li>
                </ul>
              </div> */}

            {/* <div className="underline">Highlights:</div> */}
            <ul className="list-disc list-outside pt-2 ml-1">
              <li>Development of fullstack web application for sales training agent by incorporating Azure OpenAI. The application reduces the need for one-on-one coaching session, as well as enabling training for sales person without fear of making a mistake</li>
              <li>Customer name matching, by using combination of traditional NLP and LLM. The system allows for customer information search from few hours to less than 5 minutes per customer.</li>
              <li>Fullstack web application for visualizing key KPIs for SME segment, recommendation on programs to improve KPIs, as well as progress tracker. The application has been used by sales persons across APEC Region.</li>
              <li>Digitalization of workplace observation process by using Microsoft PowerApps, Power Automate & PowerBI.</li>
            </ul>

          </div>
          <div className="pt-2 ml-2">
            <p className="text-lg font-semibold">Manager - Rationalization & FA</p>
            <p className="font-medium">Murata Electronics Singapore <span className="bg-secondary rounded-xl px-4 ml-2">2020 - 2023</span></p>
            {/* <div className="pt-1 ml-1">
                <div className="underline">Key responsibilities:</div>
                <div>Leading a team of engineers for:</div>
                <ul className="list-disc list-inside">
                  <li>Lead & provide technical leadership to engineering team with diverse role and skillset</li>
                  <li>Plan & implement rationalization activities through introduction of automation, development of application, and/or BI analytics</li>
                </ul>
              </div> */}

            {/* <div className="underline">Highlights:</div> */}
            <ul className="list-disc list-outside pt-2 ml-1">
              <li>Lead development of standard framework for machine data collection, from machine to database server. The implementation of those standards cut development time up to 80%</li>
              <li>Design, develop, test, and deploy CNN-based AI model to assist operator in defect detection, resulting in 30% increase in productivity and zero defective outflow. The system was deployed as full stack solution combining Python, Tensorflow, React, & MYSQL</li>
              <li>Drive defective ratio improvement activity in Inspection Process by leveraging data analysis & monitoring with PowerBI combined with understanding on process. The effort resulted in over S$1 million cost reduction</li>
            </ul>

          </div>
          <div className="pt-2 ml-2">
            <p className="text-lg font-semibold">Assistant Manager - Smart Factory</p>
            <p className="font-medium">Murata Electronics Singapore <span className="bg-secondary rounded-xl px-4 ml-2">2017 - 2020</span></p>
            {/* <div className="pt-2 ml-1">
                <div className="underline">Key responsibilities:</div>
                <ul className="list-disc list-inside">
                  <li>Plan & execute Smart Factory initiatives</li>
                  <li>Drive adoption of new technologies including IT tools across the manufacturing division</li>
                </ul>
              </div> */}

            {/* <div className="underline">Highlights:</div> */}
            <ul className="list-disc list-outside pt-2 ml-1">
              <li>Drove introduction and adoption of BI tools for visualization of factory reports, eliminating ≈350 hours/month required for manual creation & update of those reporting. The creation of such a report involved in-depth requirements gathering, extensive SQL processing, and visualization development.</li>
              <li>Deployment of vertical carousel & integration of Manufacturing Execution System, leading to 70% work reduction and 65% space saving</li>
              <li>Initiated deployment of Autonomous Mobile Robot for lot delivery across processes, eliminating ≈400 hours/month of manual lot transportation. The deployment includes integration with lift, automated doors, andon light, and camera for lift occupancy check.</li>
            </ul>

          </div>
          <div className="pt-2 ml-2">
            <p className="text-lg font-semibold">Senior Engineer - Machine Development</p>
            <p className="font-medium">Murata Electronics Singapore <span className="bg-secondary rounded-xl px-4 ml-2">2010 - 2017</span></p>
            {/* <div className="pt-2 ml-1">
                <div className="underline">Key responsibilities:</div>
                <ul className="list-disc list-inside">
                  <li>Design & development of automated machines for MLCC production</li>
                  <li>Review of mechanical & electrical design</li>
                </ul>
              </div> */}
            {/* <div className="underline">Highlights:</div> */}
            <ul className="list-disc list-outside pt-2 ml-1">
              <li>Worked together with internal stakeholders to design requirements for process & machines to achieve organization target.</li>
              <li>Designed & developed over 10 types of semi-automated & automated machines for MLCC manufacturing. One of the machines was successfully expanded to other oversea affiliates.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col pt-4 gap-2 text-sm ">
          <div className="text-2xl font-bold">
            Education
          </div>
          <div className="ml-2">
            <p className="text-lg font-semibold">Master of Engineering (Mechatronics)</p>
            <p className="font-medium">Monash University Malaysia  <span className="bg-secondary rounded-xl px-4 ml-2">2008 - 2010</span></p>
          </div>
          <div className="ml-2">
            <p className="text-lg font-semibold">Bachelor of Engineering (Mechatronics)</p>
            <p className="font-medium">Monash University Malaysia  <span className="bg-secondary rounded-xl px-4 ml-2">2002 - 2006</span></p>
          </div>
        </div>
      </section>
    </div>
  );
}
