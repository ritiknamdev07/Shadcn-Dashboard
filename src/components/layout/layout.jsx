
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/app-sidebar"
import { Separator } from "@/components/ui/separator"

function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen">
        <AppSidebar />
        <div className="flex flex-col flex-1 bg-gray-100">
          <div className="flex items-center rounded-sm  gap-2 bg-white p-2 ">
          <SidebarTrigger /> <Separator orientation="vertical" />
 <h3 className="font-bold">Dashboard</h3>
          </div>
          <main className="flex-1 p-4 bg-gray-100 overflow-auto  ">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default Layout