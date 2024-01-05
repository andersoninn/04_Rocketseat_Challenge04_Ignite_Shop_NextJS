import { LiaSpinnerSolid } from "react-icons/lia";

export default function Loading() {
   return (
      <div className="flex justify-center items-center w-full">
        <LiaSpinnerSolid className="animate-spin w-10 h-10" />
      </div>
   );
}
