import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AppBar from '../components/AppBar/AppBar'
import { link } from 'fs'


const Card = ({title, imgSrc, content, stacks, githubLink, linkAddress} :
             {title: string, imgSrc: string, content: string, stacks: string, githubLink?:string, linkAddress?: string }) => {
    return (
        <div className="flex flex-col w-full mx-auto align-center gap-2 p-4 border-2">
            <div className="flex mx-auto text-2xl text-blue-800">{title}</div>
            <div className="flex mx-auto">
                <Image src={imgSrc}
                    height={400}
                    width={400}
                    alt={title}
                />
            </div>
            <div className="pt-2">
                {content}
            </div>
            <div className="">
                <span className="font-semibold">Stacks: </span>{stacks}
            </div>
            {githubLink && <Link className="underline text-teal-500" 
                                href={githubLink}>
                                Github Link
                            </Link>
             }
            {linkAddress && <Link className="underline text-teal-500" 
                                href={linkAddress}>
                                Link
                            </Link>
             }
   

        </div>
    )
}


const PersonalPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
        <AppBar/>

        <main className="w-full flex flex-col p-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card title="Interview Chatbot"
                        imgSrc='https://4rifoppo-chatbot.s3.ap-southeast-1.amazonaws.com/ArifOyong-Chatbot-Screenshot.png'
                        content="A LLM-Based chat bot used to simulate interview with myself. It is able to answer basic interview questions such as 'tell me about yourself', 'tell me about your past projects', 'tell me about your strength and weakness', etc. The bot was built with the open-sourced google/flan-T5-xxl and served with AWS Lambda."
                        stacks="NextJS, Python, AWS Lambda, AWS Amplify"
                        linkAddress='https://www.arifoyong.xyz/chat'
                />
				
				<Card title="Dog Breed Identification"
                        imgSrc='https://4rifoppo-chatbot.s3.ap-southeast-1.amazonaws.com/Dogbreed_Screenshot01.gif'
                        content="A project to identify different dog breeds by using Convolutional Neural Network. The web app allow user to upload photo of a dog & it will return the breed of the dog."
                        stacks="Tensorflow, FastAPI, ReactJS, Docker"
                        githubLink='https://github.com/arifoyong/dog_breed_identifier'
                />

                
                <Card title="URL Shortener"
                        imgSrc='https://4rifoppo-chatbot.s3.ap-southeast-1.amazonaws.com/Url_shortener_screenshot_01.png'
                        content="This is a URL shortener application. The aim of this project was to explore redis"
                        stacks="Golang, Redis, NextJS, Docker"
                        githubLink='https://github.com/arifoyong/url-shortener'
                />

                <Card title="Digital Namecard Service"
                        imgSrc='https://4rifoppo-chatbot.s3.ap-southeast-1.amazonaws.com/Digital_namecard_Screenshot02.png'
                        content="A web-based SaaS for digital namecard service. The service allow authenticated user to create digital namecards. The digital namecard can be shared through QR codes & allow the recipient to easily add the contact info into their phonebook"
                        stacks="NextJS, NextAuth, Prisma, MYSQL"
                        githubLink='https://github.com/arifoyong/digital-namecard'
                />

                <Card title="Singapore Bus Stop"
                        imgSrc='https://4rifoppo-chatbot.s3.ap-southeast-1.amazonaws.com/Singapore_bus_map_Screenshot_002.png'
                        content="This project aims to explore MapBox-GL by mapping available bus stations in Singapore. User will also be able to look at details at each bus stop, such as
                        (1) Getting road name, bust stop name, bus stop code
                        (2) Available bus services at particular station
                        (3) Estimated arrival time of each bus service"
                        stacks="NextJS, TailwindCSS"
                        githubLink='https://github.com/arifoyong/SingaporeBusMap'
                />

                <Card title="Crypto Dashboard"
                        imgSrc='https://4rifoppo-chatbot.s3.ap-southeast-1.amazonaws.com/Crypto_Dashboard_Screenshot01.png'
                        content="This is a dashboard application for cryptocurrency. The dashboard displays general overview of crypto market, prices of coins, and crypto news. Data is aggregated from rapidapi.com"
                        stacks="NextJS, Tailwindcss"
                        githubLink='https://github.com/arifoyong/crypto-app'
                />
            </div>
            
        </main>
    </div>
  )
}

export default PersonalPage