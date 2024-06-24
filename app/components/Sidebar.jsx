import Image from "next/image";
import trash from "../assets/trash.png";
import edit from "../assets/edit.png";
import users from "../assets/users.png";
import matches from "../assets/matches.png";
import messages from "../assets/message-icon.png";
import views from "../assets/views.png";

const Sidebar = () => {
  return (
    <div className="text-black flex flex-col h-full bg-[#FCFCFC] justify-between">
      <div>
        <div className="flex flex-col py-2 px-3">
          <div className="flex flex-row gap-4 mb-4">
            <button className="flex items-center h-full rounded-xl border-2 border-[#DC4A2D] bg-[#FEF4F2] text-[#DC4A2D] text-sm p-2">
              <Image src={trash} alt="trash" width={16} height={16} className="mr-2" />
              Delete Job
            </button>
            <button className="flex items-center h-full rounded-xl border-2 border-[#DC4A2D] bg-[#DC4A2D] text-white text-sm py-2 px-4">
              <Image src={edit} alt="edit" width={16} height={16} className="mr-2" />
              Edit Job
            </button>
          </div>
          <div className="flex flex-col p-2 divide-y">
            <div className="flex flex-row justify-between items-center p-2">
              <button className="flex items-center h-full text-black text-sm pr-2">
                <Image src={users} alt="users" width={16} height={16} className="mr-2" />
                Applicants
              </button>
              <p className="font-semibold">400</p>
            </div>
            <div className="flex flex-row justify-between items-center p-2">
              <button className="flex items-center h-full text-black text-sm pr-2">
                <Image src={matches} alt="matches" width={16} height={16} className="mr-2" />
                Matches
              </button>
              <p className="font-semibold">100</p>
            </div>
            <div className="flex flex-row justify-between items-center p-2">
              <button className="flex items-center h-full text-black text-sm pr-2">
                <Image src={messages} alt="messages" width={16} height={16} className="mr-2" />
                Messages
              </button>
              <p className="font-semibold">147</p>
            </div>
            <div className="flex flex-row justify-between items-center p-2">
              <button className="flex items-center h-full text-black text-sm pr-2">
                <Image src={views} alt="views" width={16} height={16} className="mr-2" />
                Views
              </button>
              <p className="font-semibold">800</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-4"></div>
    </div>
  );
};

export default Sidebar;
