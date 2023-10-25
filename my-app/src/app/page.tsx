import Image from "next/image";
import Counter from "@/components/Counter";
export default function Home() {
  console.log("안녕");
  return (
    <>
      <h1>홈페이지닷!</h1>
      <Counter />
    </>
  );
}
