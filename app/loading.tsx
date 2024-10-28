import { Loader } from "lucide-react";

function loading() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col gap-y-1">
      <Loader />
      <span>Getting Ready</span>
    </div>
  );
}

export default loading;
