import Lottie from "lottie-react";
import animationData from "@/public/ornament.json";

export default function Ornament() {
  return (
    <div className="w-40 h-40">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
