import { Paperclip, Mic, Send } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import AiMultiModels from './AiMultiModels'




function ChatInputBox() {
  return (
    <div className="min-h-screen relative pb-24">
      {/*Page content above the input box */}
      <div >
        <AiMultiModels/>
      </div>
      
      {/* Fixed Chat Input Box */}
      <div className="fixed bottom-0 left-0 w-full px-4 pb-6 flex justify-center">
        {/* Pill container (centered, roomy, Gemini-like) */}
        <div className="w-full max-w-3xl flex items-center gap-3
                        bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800
                        rounded-[28px] px-4 py-3 shadow-md">
          
          {/* Left: small paperclip inside the pill */}
          <Button
            variant="ghost"
            size="icon"
            className="p-1.5 rounded-full
                       text-gray-400 dark:text-gray-500
                       hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <Paperclip className="h-4 w-4" />
          </Button>

          {/* Input: grows to fill space */}
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 h-8 text-sm bg-transparent border-0 outline-none
                       placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100"
          />

          {/* Right: mic + send (send as filled round button) */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="p-1.5 rounded-full
                         text-gray-400 dark:text-gray-500
                         hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <Mic className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              className="p-2 rounded-full
                         bg-black text-white shadow-sm
                         hover:opacity-90 dark:bg-white dark:text-black"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInputBox
