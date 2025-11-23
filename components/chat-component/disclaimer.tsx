import { my_name } from "@/app/data/profile";

export const Disclaimer = () => {
  return (
    <div className='text-sm italic mt-2'>
      {`⚠️ Disclaimer: This AI chatbot simulates ${my_name} for informational purposes. Responses are automatically generated and may not be accurate or up to date. For official information, please contact ${my_name} directly.`}
    </div>
  )
}