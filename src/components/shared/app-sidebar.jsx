import { Calendar, Home, Inbox, Newspaper, Search, Settings, Scroll, Cable, Link2, Link2Icon, UserRoundPen } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@/components/ui/sidebar"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Menu items.
const items = [
  {
    title: "Articles",
    url: "#",
    icon: Newspaper ,
  },
  {
    title: "Auto Blog",
    url: "#",
    icon: Scroll,
  },
  {
    title: "Internal Links",
    url: "#",
    icon: Cable,
  },
  {
    title: "Free Backlinks",
    url: "#",
    icon: Link2Icon,
  },
  {
    title: "Profile",
    url: "#",
    icon: UserRoundPen,
  },
]

export function AppSidebar() {
  return (
    <Sidebar  >
      <SidebarContent className="bg-white p-6 rounded-lg shadow-md h-screen">
        <SidebarGroup>
          <SidebarGroupLabel className="text-4xl font-bold p-6">abun</SidebarGroupLabel>
          <Select className=" ">
  <SelectTrigger className="w-[180px] mt-4 mb-4">
    <SelectValue placeholder="company" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">amazon</SelectItem>
    <SelectItem value="dark">google</SelectItem>
  </SelectContent>
</Select>
          <SidebarGroupContent>

            <SidebarMenu>
          {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
