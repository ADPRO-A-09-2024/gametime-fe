import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center gap-2 flex-wrap">
      <Button variant={"default"}>Click me</Button>
      <Button variant={"outline"}>Click me</Button>
      <Button variant={"destructive"}>Click me</Button>
    </div>
  );
}
