import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="max-w-[720px] flex flex-row justify-between items-center p-4 gap-4 mx-auto my-5 bg-gray-200">
      <h1 className="text-lg font-bold">Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
