import { auth } from "@/auth"

const SettingPage = async () => {
    const sesson = await auth();
  return (
    <div>
        {JSON.stringify(sesson)}
    </div>
  )
}

export default SettingPage