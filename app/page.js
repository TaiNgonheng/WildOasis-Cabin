import Link from "next/link";
import Navigation from "@/app/_components/Navigation";

export default function Home() {
  return (
      <div>
        <h1>The Wild oasis. Welcome to Cabin</h1>
        <Link href="/cabins">Explore luxury cabins</Link>
      </div>
  );
}
