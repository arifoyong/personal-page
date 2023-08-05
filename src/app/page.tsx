import Image from 'next/image'
import Link from 'next/link'

const STATIC_URL = process.env.NEXT_PUBLIC_STATIC

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row max-w-screen-xl mx-auto bg-gray-100 p-4 gap-4">

      {/* Left Pane */}
      <section className="flex flex-col w-full md:w-1/3 rounded-lg shadow-xl bg-white">
        {/* Photo section */}
        <div className="flex flex-row p-4 gap-4">
          <Image src={`${STATIC_URL}/profile_pic.JPEG`}
                  width={180}
                  height={180}
                  alt="Arif Oyong"/>
          <div className="flex flex-col">
            <div className="flex font-bold text-slate-500 md:justify-start py-4">
              Hi. I am Arif Oyong
            </div>

            <div className="flex flex-col text-slate-500 text-sm py-2 ml-2 gap-1">
              <Link href="mailto: arifoyong@gmail.com">📧  arifoyong@gmail.com</Link>
              <p>📞  86528243</p>
            </div>
            <div className="flex flex-col text-sm py-2 ml-2 gap-1">
              <p className="text-blue-500 underline"><Link href="https://www.linkedin.com/in/arif-wicaksono-oyong-62087721">My LinkedIn</Link></p>
              <p className="text-blue-500 underline"><Link href="https://github.com/arifoyong">My Github</Link></p>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <Link href="/chat">
                <button className="px-4 py-2 bg-blue-700 text-sm text-white rounded-xl hover:bg-blue-800 shadow-lg">
                  Interview me
                </button>
              </Link>
          </div>
  
          </div>
        </div>

        <div className="flex-1 bg-teal-100 p-4 ">
          {/* About Me */}
          <div className="flex flex-col gap-2 text-sm">
            <div className="text-2xl font-bold text-slate-500">
              About Me
            </div>
            <div className="ml-2 text-slate-500">
              I am passionate about solving problems with modern technology.
            </div>
            <div className="ml-2 text-slate-500">
              I have diverse work experience in manufacturing industry. Throughout my career I&apos;ve enjoyed several roles in machine development, Smart Factory Planning & Execution, and Manager of Rationalization & Factory Automation.
            </div>
            <div className="ml-2 text-slate-500">
              In my personal time, I enjoy exploring interesting technologies. Recently I tinkered with various machine learning & AI technologies, focusing on their practical examples such as OCR and chat bot. 
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col py-4 gap-2 text-sm">
            <div className="text-2xl font-bold text-slate-500">
              Skills
            </div>
            <div className="flex flex-col md:flex-row text-slate-500 md:gap-8 ml-2">
              <div className="list-disc">
                <li>Project management</li>
                <li>Communication</li>
                <li>Planning & roadmapping</li>
                <li>Industrial machine design</li>
                <li>Machine safety</li>
              </div>
              <div className="list-disc">
                <li>VB.NET</li>
                <li>Python</li>
                <li>NodeJS</li>
                <li>Tensorflow</li>
                <li>SQL</li>
                <li>PowerBI</li>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Pane */}
      <section className="flex flex-col flex-1 bg-white rounded-lg shadow-xl p-4">
        {/* Work Experience */}
        <div className="flex flex-col pt-4 text-sm text-slate-500">
          <div className="text-2xl font-bold ">
            Work Experience
          </div>
          <div className="pt-2 ml-2">
            <p className="text-lg font-semibold">Manager - Rationalization & FA</p>
            <p className="font-medium">Murata Electronics Singapore <span className="bg-teal-100 rounded-xl px-2 ml-2">2020 - current</span></p>
            <div className="list-disc pt-1 ml-1">
              <div className="underline">Key responsibilities:</div>
              <div>Leading a team of engineers for:</div>
              <li>Factory capacity planning to meet demand forecast</li>
              <li>To implement rationalization activities, including factory automation & leveraging IT technology to bring down cost</li>
            </div>
            <div className="list-disc pt-1 ml-1">
              <div className="underline">Highlights:</div>
              <li>Introduction of the first robot in Murata Singapore to reduce related manual work by 80%</li>
              <li>Development & introduction of CNN-based AI to assist operator in defect detection, resulting in 30% increase in productivity & 0 outflow</li>
              <li>Development of framework & standards for machine data collection</li>
            </div>
          </div>
          <div className="pt-2 ml-2">
            <p className="text-lg font-semibold">Assistant Manager - Smart Factory</p>
            <p className="font-medium">Murata Electronics Singapore <span className="bg-teal-100 rounded-xl px-2 ml-2">2017 - 2020</span></p>
            <div className="list-disc pt-2 ml-1">
              <div className="underline">Key responsibilities:</div>
              <li>Plan & execute Smart Factory initiatives</li>
              <li>Drove adoption of new technologies including IT tools across the manufacturing division</li>
            </div>
            <div className="list-disc pt-2 ml-1">
              <div className="underline">Highlights:</div>
              <li>Deployment of Autonomous Mobile Robot for lot delivery across processes, complete with lift integration</li>
              <li>Development of interface for machine data collection</li>
              <li>Implementation of BI tools for visualization of key factory KPIs</li>
            </div>
          </div>
          <div className="pt-2 ml-2">
            <p className="text-lg font-semibold">Executive - Machine Development</p>
            <p className="font-medium">Murata Electronics Singapore <span className="bg-teal-100 rounded-xl px-2 ml-2">2010 - 2017</span></p>
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
        <div className="flex flex-col pt-4 gap-2 text-sm text-slate-500">
          <div className="text-2xl font-bold">
            Education
          </div>
          <div className="ml-2">
            <p className="text-lg font-semibold">Master of Engineering (Mechatronics)</p>
            <p className="font-medium">Monash University Malaysia  <span className="bg-teal-100 rounded-xl px-2 ml-2">2008 - 2010</span></p>
          </div>
          <div className="ml-2">
          <p className="text-lg font-semibold">Bachelor of Engineering (Mechatronics)</p>
            <p className="font-medium">Monash University Malaysia  <span className="bg-teal-100 rounded-xl px-2 ml-2">2002 - 2006</span></p>
          </div>
        </div>
      </section>
    </main>
  )
}
