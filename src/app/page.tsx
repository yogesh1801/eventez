"use client"

import { Button } from "@/components/ui/button"
import cateringservice from "@/assets/cateringservice.png"
import businessgrowth from "@/assets/Business growth-rafiki.png"
import demand from "@/assets/demand.png"
import revenue from "@/assets/revenue.png"
import Image from "next/image"
import partnership from "@/assets/Partnership-amico.png"
import { PhoneIcon } from "lucide-react"
import { MailIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <>
    <div className="flex flex-wrap justify-between mt-5 mx-5">
      <h2 className="text-3xl font-semibold tracking-tight transition-colors">
        EventEZ
      </h2>
      <Button onClick={() => {
        window.location.href = "https://forms.gle/wakVKERmvYQnRcD56"
      }}>
        <b>JOIN US</b>
      </Button>
    </div>

    <div className="mx-8 flex flex-wrap justify-between">
      <h2 className="mt-[110px] mx-[80px] text-4xl font-bold tracking-wider transition-colors">
        Revolutionize YourEvent <br />
        Business with EventEZ <br />
        Limited-Time Free <br/>
        Onboarding! <br/> <br/>
        <Button className="text-4xl tracking-tight font-semibold" variant="default2">
        Avail Limited time offer
        </Button>
      </h2>
      <Image src={cateringservice} alt="image" width={500}
      height={100}/>
    </div>

    <div className="flex flex-wrap justify-center">
      <h2 className="-mt-10 text-4xl font-bold tracking-wider transition-colors">
        Why Partner with EventEZ?
      </h2>
    </div>

    <div className="flex flex-wrap justify-between mx-[100px] mt-[100px] mb-5">
      <Card>
        <CardHeader>
        <CardTitle>
          <div className="text-2xl font-bold">
          Pioneering Technology
          </div>
        </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-left text-xl font-semibold">
          We’re the first to offer<br />
          immersive 3D venue<br/>
          tours through AR/VR,<br />
          giving you a significant<br />
          edge.<br />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="text-2xl font-bold">
            Early Mover Advantage
          </div></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-left text-xl font-semibold">
          Be a frontrunner in<br />
          event tech! Partner with<br/>
          us now and capitalize on<br />
          the massive growth<br />
          potential of this market<br />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
        <CardTitle>
            <div className="text-2xl font-bold">
            Free Onboarding **
          </div></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-left text-xl font-semibold">
          {"Right now, we're"}<br />
          {"onboarding vendors at no"}<br/>
          {"cost. Leverage our platform"}<br />
          {"and its benefits without any"}<br />
          {"upfront investment"}<br />
          </div>
        </CardContent>
      </Card>
    </div>

    <div className="flex flex-wrap justify-center">
      <h2 className="mt-10 mb-[50px] text-4xl font-bold tracking-wider transition-colors">
      Benefits for Our Partners
      </h2>
    </div>

    <div className="mx-8 flex flex-wrap justify-between">
    <h2 className="mt-[50px] mx-[20px] text-4xl font-bold tracking-wider transition-colors">
        Boost Your Business Like Never Before<br />
        <div className="flex flex-wrap justify mt-10">
        <Image src={demand} alt="image" width={100} height={100} className="mt-3"/>
        <h2 className="mt-2 ml-5 text-xl tracking-wider transition-colors">
          <b>{"Increased Customer Conversion Rate (Estimated 20% Increase): "}</b>{"Our platform streamlines the plannig process, leading to higher customer engagement and conversion rates."}
        </h2>
        </div>
        <div className="flex flex-wrap justify mt-10">
        <Image src={revenue} alt="image" width={100} height={100} className="mt-3"/>
        <h2 className="mt-2 ml-5 text-xl tracking-wider transition-colors">
          <br/><b>{"Boosted Event Frequency (Estimated 15% Increase): "}</b>
          {"EventEZ makes planning effortless, encouraging customers to host more events"}
        </h2>
        </div>
      </h2>
      <Image src={businessgrowth} alt="image" width={400} height={200} className="mt-[70px]"/>
    </div>

    <div className="mx-8 flex flex-wrap justify-between mb-5">
    <Image src={partnership} alt="image" width={400} height={200} className="mt-[70px] mr-12"/>
    <h2 className="mt-[130px] mr-[20px] text-4xl font-bold tracking-wider transition-colors">
        Join a Growing Network of Successful Partners<br />
        <div className="flex flex-wrap justify mt-10">
        <h2 className="mt-2 ml-5 text-xl tracking-wider transition-colors">
          {"We are proud to have already onboarded prestigious establishments like the "}
          {"establishments like the "}
          <b><h2 className="text-[#3FE0D0]">{"Windsor Hotel in Patna, Cafe 53, Paradise Inn Food Palace "}</h2></b>
          {"and many more across different cities. Partner with us and gain access to a thriving network of event professionals."}
        </h2>
        </div>
      </h2>
    </div>

    <div className="flex flex-wrap justify-center mb-10 mt-10">
        <h2 className="mt-2 text-4xl font-bold tracking-wider transition-colors">
          {"Contact Us"}
        </h2>
    </div>

    <div className="flex flex-wrap justify-between mx-[300px] mb-10">
      <div className="flex flex-wrap justify-center">
        <PhoneIcon className="mr-5" /> { "+91-9109332026" }
      </div>
      <div className="flex flex-wrap justify-center">
        <MailIcon className="mr-5" /> {"eventez@eventez.co.in"}
      </div>
    </div>
    </>
  )
}
