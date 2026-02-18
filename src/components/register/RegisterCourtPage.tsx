import React from "react";
import RegisterCourtForm from "./RegisterCourtForm";
import RegisterCourtMap from "./RegisterCourtMap";
import RegisterCourtStats from "./RegisterCourtStats"; 

export default function RegisterCourtPage() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto p-4 md:p-8 gap-8">
      <div className="flex-1 flex flex-col gap-8 max-w-2xl">
        <RegisterCourtForm />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <RegisterCourtMap />
        <RegisterCourtStats />
      </div>
    </div>
  );
}
