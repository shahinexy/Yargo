"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RxCross1 } from "react-icons/rx";
import { use, useState } from "react";
import Image from "next/image";
import { TUser } from "@/types/user.type";
import { FaRegUserCircle } from "react-icons/fa";
import DeleteModal from "../common/DeleteModal";

const UserInfoModal = ({user}: {user: TUser}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-primary md:px-4 px-2 md:py-2 py-1 rounded-full">
        View Profile
      </DialogTrigger>

      <DialogContent className="max-w-[350px] [&>button]:hidden !rounded-[42px]">
        <DialogHeader>
          <DialogTitle>
            <div>
              <div className="flex justify-end gap-1">
                <button
                  onClick={() => setOpen(false)}
                  className="border border-[#0C0B2133] p-2 rounded-full font-normal"
                >
                  <RxCross1 />
                </button>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="rounded-full overflow-hidden">
                  {user?.profileImage ? <Image
                    src={user?.profileImage}
                    alt="user"
                    width={1000}
                    height={1000}
                    className="w-[125px] h-[125px] rounded-full"
                  /> : <FaRegUserCircle className="w-[125px] h-[125px] rounded-full"/>}
                </div>

                <div className="text-center md:mt-4 mt-3 md:mb-7 mb-4">
                  <h3 className="md:text-xl">{user.fullName}</h3>
                  <p className="text-sm font-normal">{user.email}</p>
                </div>

                <div className="flex items-center space-x-4 justify-between w-full md:mb-7 mb-4">
                  <div className="text-center space-y-2">
                    <p className="font-normal">Contribution</p>
                    <p className="md:text-3xl text-xl font-semibold">50</p>
                  </div>
                  <div className="h-14 border-l-2 border-black"></div>
                  <div className="text-center space-y-2">
                    <p className="font-normal">Total Giving</p>
                    <p className="md:text-3xl text-xl font-semibold">$500</p>
                  </div>
                </div>

                <div className="w-full flex justify-center">
                  <DeleteModal id={user.id} type="user" />
                </div>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoModal;
