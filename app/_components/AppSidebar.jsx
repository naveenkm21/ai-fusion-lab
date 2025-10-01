"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { SunIcon } from "lucide-react"    
import { Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Moon } from "lucide-react"


export function AppSidebar() {
  const {theme, setTheme} = useTheme()
  return (
    <Sidebar>
      <SidebarHeader>
      <div className="p-3">
          <div className="mb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                          <Image src="/logo.svg" alt="logo" width={60} height={40} 
                              className="w-[60px] h-[40px] object-contain"
                          />
                        <h2 className="font-bold text-xl"> AI Fusion</h2>
                    </div>
                    <div className="flex items-center gap-2">
                          {theme == 'light'? <Button variant={'ghost'} onClick={() =>setTheme('dark')}><Sun/></Button>
                          : <Button variant={'ghost'} onClick={() =>setTheme('light')}><Moon/></Button>}
                    </div>
                </div>
            </div>
          <Button className='mt-7 w-full'>+ New Chat</Button>
        </div>
      </SidebarHeader>  
      <SidebarContent>
        <SidebarGroup >
          <div className="p-3">
            <h2 className="font-bold text-lg">Chats</h2>
            <p className="text-sm text-gray-400">Sign In to start chatting with muliple AI models</p>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter >
        <div className="p-3 mb-10">
            <Button className={'w-full'} size={'lg'}> Sign In/Sign Up</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
