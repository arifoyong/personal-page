import { my_name } from "@/app/data/profile";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const DISCLAIMER_MSG = `⚠️ Disclaimer: This AI chatbot simulates ${my_name} for informational purposes.
Responses are automatically generated and may not be accurate or up-to-date. 
For official information, please contact ${my_name} directly.`

export const Disclaimer = () => {
  return (
    <>
      <div className='text-sm italic mt-2 hidden md:block'>
        {DISCLAIMER_MSG}
      </div>
      <Popover>
        <PopoverTrigger className="text-sm italic">⚠️ Disclaimer</PopoverTrigger>
        <PopoverContent>{DISCLAIMER_MSG}</PopoverContent>
      </Popover>
    </>
  )
}