import Image from "next/image";
import briefcase from "./assets/briefcase.png";
import messages from "./assets/message-icon.png";
import coinHand from "./assets/coins-hand.png";
import bell from "./assets/bell-02.png";
import ellipse from "./assets/Ellipse-4.png";
import atlassian from "./assets/Atlassian-1.png";
import atlassianTwo from "./assets/Atlassian-2.png";
import down from "./assets/chevron-down.png";
import orangeLine from "./assets/orange-line.png";
import ellipseGreen from "./assets/Ellipse-green.png";
import dotGreen from "./assets/Dot-Green.png";
import locationMarker from "./assets/location-marker.png";
import figma from "./assets/figma.png";
import illustrator from "./assets/illustrator.png";
import xd from "./assets/xd.png";

import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="divide-y flex flex-col bg-white">
        <header className="bg-white w-full h-20 items-center">
          <div className="flex flex-row justify-between p-4">
            <div>
              <button className="p-2 text-[#DC4A2D] font-semibold text-sm bg-gray-200 w-14 h-12">
                Logo
              </button>
            </div>
            <div className="w-38 h-12 rounded-3xl border-2 border-gray flex justify-between gap-8 p-2">
              <button className="flex items-center h-full rounded-2xl bg-[#DC4A2D] text-white text-sm p-2">
                <Image src={briefcase} alt="briefcase" width={16} height={16} className="mr-2" />
                Jobs
              </button>
              <button className="flex items-center h-full text-gray-400 text-sm p-2">
                <div className="flex flex-col items-center">
                  <Image src={ellipse} className="ml-2 w-1 h-1/6" />            
                  <Image src={messages} alt="messages" width={16} height={16} className="mr-2" />
                </div> 
                Messages
              </button>
              <button className="flex items-center h-full text-gray-400 text-sm p-2">
                <Image src={coinHand} alt="coins-hand" width={16} height={16} className="mr-2" />
                Payments
              </button>
            </div>
            <div className="h-12 border-gray flex justify-between items-center gap-2 p-2">
              <div className="mr-2 flex flex-col items-center gap-0">
                <Image src={ellipse} className="ml-2 w-1 h-1/6"/>
                <Image src={bell} width={22} height={8} />
              </div>
              <Image src={atlassian} className="w-8 h-8 mt-1"/>
              <Image src={down} className="w-4 h-4"/>
            </div>
          </div>
        </header>
        <nav className="bg-white w-full h-12 flex flex-row justify-start">
          <div className="flex flex-col justify-center text-sm font-semibold text-[#DC4A2D] ml-10">
            <div className="flex flex-col items-center h-11 pt-3 pb-4">Job preview</div>
            <Image src={orangeLine} className="mb-0 justify-center"/>
          </div>
          <div className="flex flex-col items-center justify-center text-sm text-gray-400 ml-10 divide-y">
            Applicants
          </div>
          <div className="flex flex-col items-center justify-center text-sm text-gray-400 ml-10 divide-y">
            Match
          </div>
          <div className="flex flex-col items-center justify-center text-sm text-gray-400 ml-10 divide-y">
            Messages
          </div>
        </nav>
        <section className="h-full w-full bg-white flex flex-row divide-x justify-between">
          <div className="w-9/11 divide-y">
            <div className="ml-10 mt-6 w-full flex flex-col">
              <div className="flex justify-start items-center gap-4">
                <h1 className="font-bold text-black text-2xl">Senior Product Designer</h1>
                <Image src={ellipseGreen} width={4} height={4} />
                <p className="text-xs text-black">posted 2 days ago</p>
                <button className="flex items-center h-full rounded-3xl border-2 border-[#ABEFC6] bg-[#ECFDF3] font-semibold text-[#067647] text-xs px-2">
                  <Image src={dotGreen} alt="dotGreen" width={4} height={4} className="mr-1" />
                  Open
                </button>
              </div>
              <div className="flex items-center justify-start gap-1 my-2 text-sm text-[#5D5D5D]">
                <button className="flex items-center h-full py-2 pr-2">
                  <Image src={locationMarker} alt="location" width={8} height={8} className="mr-2" />
                  Delaware, USA
                </button>
                <Image src={ellipseGreen} width={2} height={2} />
                <button className="flex items-center h-full p-2">
                  <Image src={locationMarker} alt="edit" width={8} height={8} className="mr-2" />
                  Edit Job
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row gap-28 ml-10 my-2 text-xs text-[#6E6D6D] mr-80">
                <div>Skills Required</div>
                <div>Preferred Language</div>
                <div>Type</div>
                <div>Years of Experience</div>
              </div>
              <div className="flex flex-row gap-24 ml-10 mt-2 mb-1 text-xs text-[#6E6D6D]">
                <button className="flex items-center h-full rounded-lg border-2 border-[#D0D5DD] bg-white text-black text-xs p-1">
                  <Image src={figma} alt="figma" width={12} height={12} className="mr-1" />
                  Figma
                </button>
                <p className="text-black font-semibold text-sm ml-9">English</p>
                <p className="text-black font-semibold text-sm ml-16">Full Time</p>
                <p className="text-black font-semibold text-sm ml-0">3+ Years of Experience</p>
              </div>
              <div className="flex flex-row gap-28 ml-10 mb-1 text-xs text-[#6E6D6D] mr-80">
                <button className="flex items-center h-full rounded-lg border-2 border-[#D0D5DD] bg-white text-black text-xs p-1">
                  <Image src={illustrator} alt="illustrator" width={12} height={12} className="mr-1" />
                  Adobe Illustrator
                </button>
              </div>
              <div className="flex flex-row gap-28 ml-10 mb-3 text-xs text-[#6E6D6D] mr-80">
                <button className="flex items-center h-full rounded-lg border-2 border-[#D0D5DD] bg-white text-black text-xs p-1">
                  <Image src={xd} alt="xd" width={12} height={12} className="mr-1" />
                  Adobe XD
                </button>
              </div>
            </div>
            <div className="my-3 w-full flex flex-col">
              <div className="text-xs text-[#6E6D6D] ml-10 mt-3 my-2">
                About the job:
              </div>
              <div className="text-sm text-black ml-10">
                <ol className="list-decimal list-inside">
                  <li>Handle the UI/UX research design</li>
                  <li>Work on researching on latest web applications designs & trends</li>
                  <li>Work on conceptualizing and visualizing</li>
                  <li>Work on creating graphics content and other graphic related works</li>
                </ol>
                <p className="my-1">Benefits:</p>
                <ul className="list-inside list-disc">
                  <li>Health insurance</li>
                  <li>Provident Fund</li>
                </ul>
                <p className="my-1">Schedule:</p>
                <ul className="list-disc list-inside">
                  <li>Day shift</li>
                </ul>
                <p className="my-1">Supplemental pay types:</p>
                <ul className="list-disc list-inside">
                 <li>Performance bonus</li>
                 <li>Yearly bonus</li>
                </ul>
                <p className="mb-1 mr-100">Work Location: In person</p>
              </div>
            </div>
            <div className="w-full">
              <div className="ml-10 my-2">
                <button className="flex items-center h-full text-black text-md pr-2">
                  <Image src={atlassianTwo} alt="logo" width={16} height={16} className="mr-2" />
                  Atlassian
                </button>
              </div>
              <div className="flex flex-row ml-10 mb-10">
                
                <div className="flex flex-col mr-20">
                  <div className="mb-2">
                    <p className="text-black text-xs mb-1">Company-size:</p>
                    <p className="text-black text-sm">1k - 2k Employees</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-black text-xs mb-1">Sector</p>
                    <p className="text-black text-sm">Information Technology, Infrastructure</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-black text-xs mb-1">Founded In</p>
                    <p className="text-black text-sm">2019</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="mb-2">
                    <p className="text-black text-xs mb-1">Type</p>
                    <p className="text-black text-sm">Private</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-black text-xs mb-1">Funding</p>
                    <p className="text-black text-sm">Bootstrapped</p>
                  </div>
                  <div className="mb-2">
                    <p className="text-black text-xs mb-1">Founded By</p>
                    <p className="text-black text-sm">Scott Farquhar, Mike Cannon-Brookes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/11">
            <Sidebar />
          </div>
        </section>
        <footer className="bg-white w-full h-16">

        </footer>
      </div>
    </>
  );
}
