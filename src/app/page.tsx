import Image from 'next/image'
import Link from 'next/link'
import AppBar from './components/AppBar/AppBar'

const STATIC_URL = process.env.NEXT_PUBLIC_STATIC

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <AppBar />
      <main className="flex flex-col lg:flex-row bg-gray-100 p-4 gap-4">

        {/* Left Pane */}
        <section className="flex flex-col w-full lg:w-1/3 rounded-lg shadow-xl bg-white">
          {/* Photo section */}
          <div className="flex flex-row p-4 gap-4">
              <div className="flex">
            <Image src={`${STATIC_URL}/profile_pic.JPEG`}
                    className="object-cover"
                    width={180}
                    height={180}
                    priority
                    alt="Arif Oyong"/>
              </div>
            <div className="flex flex-col">
              <div className="flex font-bold text-slate-500 md:justify-start py-4">
                Hi. I am Arif Oyong
              </div>

              <div className="flex flex-col text-slate-500 text-sm py-2 gap-1">
                <Link href="mailto: arifoyong@gmail.com">📧  arifoyong@gmail.com</Link>
                <p>📞  86528243</p>
              </div>
              <div className="flex flex-col text-sm py-2 gap-1">
                <p className="text-blue-800 underline py-1"><Link href="https://www.linkedin.com/in/arif-wicaksono-oyong-62087721">My LinkedIn</Link></p>
                <p className="text-blue-800 underline py-1"><Link href="https://github.com/arifoyong">My Github</Link></p>
              </div>
              
              <div className="flex justify-start">
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
              <div className="text-2xl font-bold text-slate-700">
                About Me
              </div>
              <div className="ml-2 text-slate-700">
                Innovative technical leader with 13 years of experience in manufacturing industry. Proven ability to drive innovation through digital transformation and automation. Strong communicator with broad understanding of digital technologies & industrial automation, providing technical leadership to engineering team with diverse roles & skillset.
              </div>
              {/* <div className="ml-2 text-slate-700">
                I have diverse work experience in manufacturing industry. Throughout my career I&apos;ve enjoyed several roles in machine development, Smart Factory Planning & Execution, and Manager of Rationalization & Factory Automation.
              </div> */}
              {/* <div className="ml-2 text-slate-700">
                In my personal time, I enjoy exploring interesting technologies. Recently I tinkered with various machine learning & AI technologies, focusing on their practical examples such as OCR and chat bot. 
              </div>  */}
            </div>

            {/* Skills */}
            <div className="flex flex-col py-4 gap-2 text-sm">
              <div className="text-2xl font-bold text-slate-700">
                Skills
              </div>
                <ul className="list-disc text-slate-700 md:gap-8 ml-2">
                  <li>Project management</li>
                  <li>Solution development</li>
                  <li>Machine interface with VB.NET</li>
                  <li>Fullstack development: Python, NodeJS, React, MYSQL</li>
                  <li>BI & Analysis: SQL, PowerBI</li>
                  <li>Machine learning: tensorflow, scikit</li>
                  <li>Industrial Automation</li>
                </ul>
            </div>

            {/* Language */}
            <div className="flex flex-col py-4 gap-2 text-sm">
              <div className="text-2xl font-bold text-slate-700">
                Language
              </div>
                <ul className="list-disc text-slate-700 md:gap-8 ml-2">
                  <li>English: fluent</li>
                  <li>Indonesian: native</li>
                </ul>
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
              <p className="font-medium">Murata Electronics Singapore <span className="bg-teal-100 text-slate-600 rounded-xl px-2 ml-2">2020 - current</span></p>
              <div className="pt-1 ml-1">
                <div className="underline">Key responsibilities:</div>
                <div>Leading a team of engineers for:</div>
                <ul className="list-disc list-inside">
                  <li>Lead & provide technical leadership to engineering team with diverse role and skillset</li>
                  <li>Plan & implement rationalization activities through introduction of automation, development of application, and/or BI analytics</li>
                </ul>
              </div>
              <div className="pt-1 ml-1">
                <div className="underline">Highlights:</div>
                <ul className="list-disc list-inside">
                  <li>Lead the development of standards for machine data collection & standards communication for parsing data to server </li>
                  <li>Development & deployment of Convolutional Neural Network (CNN-based) AI to assist operator in defect detection, resulting in 30% increase in productivity and zero outflow</li>
                  <li>Drive defective ratio improvement activity in Inspection Process by leveraging PowerBI analytics. The effort resulted in over S$1 million cost reduction </li>
                </ul>
              </div>
            </div>
            <div className="pt-2 ml-2">
              <p className="text-lg font-semibold">Assistant Manager - Smart Factory</p>
              <p className="font-medium">Murata Electronics Singapore <span className="bg-teal-100 text-slate-600 rounded-xl px-2 ml-2">2017 - 2020</span></p>
              <div className="pt-2 ml-1">
                <div className="underline">Key responsibilities:</div>
                <ul className="list-disc list-inside">
                  <li>Plan & execute Smart Factory initiatives</li>
                  <li>Drive adoption of new technologies including IT tools across the manufacturing division</li>
                </ul>
              </div>
              <div className="pt-2 ml-1">
                <div className="underline">Highlights:</div>
                <ul className="list-disc list-inside">
                  <li>Drove introduction and adoption of BI tools for visualization of key factory KPIs</li>
                  <li>Initiated deployment of Autonomous Mobile Robot for lot delivery across processes</li>
                  <li>Developed methodology & application for machine data collection</li>
                </ul>
              </div>
            </div>
            <div className="pt-2 ml-2">
              <p className="text-lg font-semibold">Senior Engineer - Machine Development</p>
              <p className="font-medium">Murata Electronics Singapore <span className="bg-teal-100 text-slate-600 rounded-xl px-2 ml-2">2010 - 2017</span></p>
              <div className="pt-2 ml-1">
                <div className="underline">Key responsibilities:</div>
                <ul className="list-disc list-inside">
                  <li>Design & development of automated machines for MLCC production</li>
                  <li>Review of mechanical & electrical design</li>
                </ul>
              </div>
              <div className="pt-2 ml-1">
                <div className="underline">Highlights:</div>
                <ul className="list-disc list-inside">
                  <li>Developed 10 different machine types for MLCC manufacturing</li>
                  <li>One of the machine types was expanded to overseas affiliates</li>
                </ul>
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
              <p className="font-medium">Monash University Malaysia  <span className="bg-teal-100 text-slate-600 rounded-xl px-2 ml-2">2008 - 2010</span></p>
            </div>
            <div className="ml-2">
            <p className="text-lg font-semibold">Bachelor of Engineering (Mechatronics)</p>
              <p className="font-medium">Monash University Malaysia  <span className="bg-teal-100 text-slate-600 rounded-xl px-2 ml-2">2002 - 2006</span></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
