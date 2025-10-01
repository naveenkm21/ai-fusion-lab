"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";


export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div>
      <h2>Subscribe to me</h2>
      <Button>Subscribe</Button>
      <Button variant="outline" onClick={() => setTheme("light")}>Light</Button>
      <Button variant="outline" onClick={() => setTheme("dark")}>Dark</Button>
      <Button variant="outline" onClick={() => setTheme("system")}>System</Button>  
      
    </div>
  );
}
