import React, { useState } from 'react'
import AiModelList from '../../shared/AiModelList'
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Lock, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

function AiMultiModels() {
  const [aiModelList, setAiModelList] = useState(AiModelList)

  const onToggleChange = (modelName, value) => {
    setAiModelList((prev) =>
      prev.map((m) =>
        m.model === modelName ? { ...m, enable: value } : m
      )
    )
  }

  return (
    <div className="flex flex-1 h-[75vh] border-b overflow-x-auto">
      {aiModelList.map((model) => (
        <div
          key={model.model}
          className={`
            flex flex-col border-r h-full
            transition-all duration-300 ease-in-out
            ${model.enable ? 'w-[400px]' : 'w-[100px]'}
            flex-shrink-0
          `}
        >
          <div className="border-gray-200 dark:border-slate-800 w-full h-full">
            <div className="flex items-center justify-between gap-2 p-4 border-b h-[70px]">
              {/* Left side: icon + select */}
              <div className="flex items-center gap-2">
                <Image src={model.icon} alt={model.model} width={24} height={24} />
                {model.enable && (
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={model.subModel[0].name} />
                    </SelectTrigger>
                    <SelectContent>
                      {model.subModel.map((subModel) => (
                        <SelectItem key={subModel.name} value={subModel.name}>
                          {subModel.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              {/* Right side: Switch or expand icon */}
              {model.enable ? (
                <Switch
                  checked={model.enable}
                  onCheckedChange={(v) => onToggleChange(model.model, v)}
                />
              ) : (
                <MessageSquare
                  onClick={() => onToggleChange(model.model, true)}
                  className="cursor-pointer w-6 h-6 text-gray-600"
                />
              )}
            </div>
          </div>
            {model.premium && model.enable && (
                <div className="flex flex-1 items-center justify-center p-52">
                    <Button><Lock/>Upgrade to unlock</Button>
                </div>
            )}

        
        </div>
      ))}

      
    </div>
  )
}

export default AiMultiModels
