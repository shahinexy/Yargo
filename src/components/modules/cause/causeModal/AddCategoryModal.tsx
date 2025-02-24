"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AiOutlinePlus } from "react-icons/ai";
import { FieldValues } from "react-hook-form";
import { FaSave } from "react-icons/fa";
import { useState } from "react";
import MyFormWrapper from "@/components/form/MyFormWrapper";
import MyFormInput from "@/components/form/MyFormInput";
import MyFormSelect from "@/components/form/MyFormSelect";

const AddCategoryModal = () => {
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-white rounded-3xl md:py-2 py-2 md:px-3 text-xl text-black flex gap-2 items-center">
        <AiOutlinePlus /> Add Category
      </DialogTrigger>

      <DialogContent className="max-w-[935px] rounded-[50px] [&>button]:hidden">
        <DialogHeader>
          <div>
            <MyFormWrapper onSubmit={onSubmit}>
              <DialogTitle className="md:mb-7 mb-3">
                <div className="flex justify-between gap-1">
                  <div className="">
                    <h1 className="md:text-4xl text-xl font-medium md:mb-4 mb-2">
                      Add Category
                    </h1>
                    <p className="md:text-2xl font-normal">On 20 Jun, 2024</p>
                  </div>
                  <div className="space-x-3 flex ">
                    <div>
                      <button
                        onClick={() => setOpen(false)}
                        className="border border-[#0C0B2133] text-[#0C0B21] py-3 px-6 rounded-full font-normal"
                      >
                        Discard
                      </button>
                    </div>
                    <div>
                      <button className="border border-[#0C0B21] bg-[#0C0B21] text-white py-3 px-6 rounded-full flex items-center justify-center gap-1  font-normal">
                        <FaSave /> Save
                      </button>
                    </div>
                  </div>
                </div>
              </DialogTitle>
              <div className="space-y-2">
                <h3 className="md:text-3xl font-medium">Cause Category</h3>
                <MyFormSelect
                  name="cause-category"
                  options={[]}
                  selectClassName="md:py-5 py-3 md:px-7 px-5 rounded-full"
                />
              </div>
            </MyFormWrapper>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryModal;
