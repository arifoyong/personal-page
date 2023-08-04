import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto justify-center px-8 py-4">
      {/* Banner Section */}
      <div className="flex md:flex-row flex-col items-center justify-center gap-2 md:gap-8 bg-white">
        <div className="flex flex-col text-2xl md:text-3xl lg:text-5xl justify-center">
          <div className="flex font-bold justify-center md:justify-start">
            Hi. I'm Arif Oyong
          </div>
          <div className="flex justify-center md:justify-start">
            Engineer
          </div>
          <div className="flex justify-center md:justify-start pt-2">
            <Link href="/chat">
            <button className="px-4 py-2 bg-blue-700 text-sm text-white rounded-xl hover:bg-blue-800 shadow-lg">
              Interview me
            </button>
            </Link>
          </div>
          
        </div>
        <div className="hidden md:block">
          <Image src="/image/profile_pic.jpeg"
                  width={200}
                  height={200}
                  alt="Arif Oyong"/>
        </div>
      </div>

      {/* About Me */}
      <div className="flex flex-col pt-4 gap-2 text-sm">
        <div className="text-2xl font-bold">
          About Me
        </div>
        <div className="ml-2">
          I'm passionate about solving problems with modern technology.
        </div>
        <div className="ml-2">
          I have diverse work experience in manufacturing industry. Throughout my career I've enjoyed several roles in machine development, Smart Factory Planning & Execution, and Manager of Rationalization & Factory Automation.
        </div>
        <div className="ml-2">
          In my personal time, I enjoy exploring interesting technologies. Recently I tinkered with various machine learning & AI technologies, focusing on their practical examples such as OCR and chat bot. 
        </div>
      </div>

      {/* Work Experience */}
      <div className="flex flex-col pt-4 text-sm">
        <div className="text-2xl font-bold">
          Work Experience
        </div>
        <div className="pt-2 ml-2">
          <p className="text-lg font-semibold">Manager - Rationalization & FA</p>
          <p className="font-medium">Murata Electronics Singapore <span className="text-gray-800">(2020-now)</span></p>
          <div className="list-disc pt-1 ml-1">
            <div className="underline">Key responsibilities:</div>
            <div>Leading a team of engineers for:</div>
            <li>Factory capacity planning to meet demand forecast</li>
            <li>To implement rationalization activities, including factory automation & leveraging IT technology to bring down cost</li>
          </div>
          <div className="list-disc pt-1 ml-1">
            <div className="underline">Highlights:</div>
            <li>Introduction of the first robot in Murata Singapore 
                  to reduce related manual work by 80%</li>
            <li>Development & introduction of CNN-based AI to assist
                  operator in defect detection, resulting in 30% increase in
                  productivity & 0 outflow</li>
            <li>Development of framework & standards for machine data collection</li>
          </div>
        </div>
        <div className="pt-2 ml-2">
          <p className="text-lg font-semibold">Assistant Manager - Smart Factory</p>
          <p className="font-medium">Murata Electronics Singapore <span className="text-gray-800">(2017-2020)</span></p>
          <div className="list-disc pt-2 ml-1">
            <div className="underline">Key responsibilities:</div>
            <li>Plan & execute Smart Factory initiatives</li>
            <li>Drove adoption of new technologies including IT tools
                across the manufacturing division</li>
          </div>
          <div className="list-disc pt-2 ml-1">
            <div className="underline">Highlights:</div>
            <li>Deployment of Autonomous Mobile Robot for lot delivery
                across processes, complete with lift integration</li>
            <li>Development of interface for machine data collection</li>
            <li>Implementation of BI tools for visualization of key factory
                KPIs</li>
          </div>
        </div>
        <div className="pt-2 ml-2">
          <p className="text-lg font-semibold">Executive - Machine Development</p>
          <p className="font-medium">Murata Electronics Singapore <span className="text-gray-800">(2010-2017)</span></p>
          <div className="list-disc pt-2 ml-1">
            <div className="underline">Key responsibilities:</div>
            <li>Design & development of machines for MLCC production</li>
            <li>Review of mechanical & electrical design</li>
          </div>
          <div className="list-disc pt-2 ml-1">
            <div className="underline">Highlights:</div>
            <li>Developed 10 different machines for MLCC manufacturing</li>
            <li>Expansion of developed machines to overseas affiliates</li>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="flex flex-col pt-4 gap-2 text-sm">
        <div className="text-2xl font-bold">
          Education
        </div>
        <div className="ml-2">
          <p className="text-lg font-semibold">Master of Engineering (Mechatronics)</p>
          <p className="font-medium">Monash University Malaysia | <span className="text-gray-800">2008-2010</span></p>
        </div>
        <div className="ml-2">
        <p className="text-lg font-semibold">Bachelor of Engineering (Mechatronics)</p>
          <p className="font-medium">Monash University Malaysia | <span className="text-gray-800">2002-2006</span></p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col pt-4 gap-2 text-sm">
        <div className="text-2xl font-bold">
          Skills
        </div>
        <div className="flex flex-col md:flex-row md:gap-8 ml-2">
          <div className="list-disc">
            <li>Project management</li>
            <li>Communication</li>
            <li>Planning & roadmapping</li>
          </div>
          <div className="list-disc">
            <li>Industrial machine design</li>
            <li>Machine safety</li>
            <li>SQL</li>
            <li>PowerBI</li>
          </div>
          <div className="list-disc">
            <li>VB.NET</li>
            <li>Python</li>
            <li>NodeJS</li>
            <li>Tensorflow</li>
            <li>React</li>
          </div>
        </div>
       
      </div>


    </main>
  )
}
