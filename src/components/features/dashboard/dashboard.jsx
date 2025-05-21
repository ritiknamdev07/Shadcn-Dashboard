import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import ArticleTable from "../../shared/app-table";


const Dashboard = () => {



  // Example data for each tab
  const generatedArticles = [
    {
      id: "ART001",
      title: "Understanding React Hooks",
      keyword: "React, Hooks",
      words: 1200,
      createdOn: "2024-06-01",
      action: "View",
      publish: true,
    },
    {
      id: "ART002",
      title: "Advanced JavaScript Patterns",
      keyword: "JavaScript, Patterns",
      words: 950,
      createdOn: "2024-05-28",
      action: "View",
      publish: false,
    },
    {
      id: "ART003",
      title: "UI/UX Best Practices",
      keyword: "UI, UX, Design",
      words: 1100,
      createdOn: "2024-05-20",
      action: "View",
      publish: true,
    },
    {
      id: "ART004",
      title: "State Management in Redux",
      keyword: "Redux, State",
      words: 1300,
      createdOn: "2024-05-15",
      action: "View",
      publish: false,
    },
    {
      id: "ART005",
      title: "Deploying with Vercel",
      keyword: "Deployment, Vercel",
      words: 800,
      createdOn: "2024-05-10",
      action: "View",
      publish: true,
    },
    {
      id: "ART006",
      title: "Next.js Server Components",
      keyword: "Next.js, Server Components",
      words: 1050,
      createdOn: "2024-06-10",
      action: "View",
      publish: false,
    },
    {
      id: "ART007",
      title: "Optimizing React Performance",
      keyword: "React, Performance",
      words: 980,
      createdOn: "2024-06-12",
      action: "View",
      publish: false,
    },
    {
      id: "ART008",
      title: "TypeScript for Beginners",
      keyword: "TypeScript, JavaScript",
      words: 1150,
      createdOn: "2024-06-15",
      action: "View",
      publish: true,
    },
    {
      id: "ART009",
      title: "Testing React Applications",
      keyword: "React, Testing",
      words: 900,
      createdOn: "2024-06-18",
      action: "View",
      publish: false,
    },
    {
      id: "ART010",
      title: "Building Accessible Web Apps",
      keyword: "Accessibility, Web",
      words: 1000,
      createdOn: "2024-06-20",
      action: "View",
      publish: true,
    },
  ];

  const publishedArticles = generatedArticles.filter(a => a.publish);

  const scheduledArticles = [
    {
      id: "ART011",
      title: "Serverless Functions Explained",
      keyword: "Serverless, Functions",
      words: 950,
      createdOn: "2024-06-22",
      action: "View",
      publish: false,
    },
    {
      id: "ART012",
      title: "GraphQL vs REST APIs",
      keyword: "GraphQL, REST",
      words: 1200,
      createdOn: "2024-06-23",
      action: "View",
      publish: false,
    },
    {
      id: "ART013",
      title: "Introduction to Docker",
      keyword: "Docker, Containers",
      words: 1100,
      createdOn: "2024-06-24",
      action: "View",
      publish: false,
    },
    {
      id: "ART014",
      title: "Micro Frontends Architecture",
      keyword: "Micro Frontends, Architecture",
      words: 1050,
      createdOn: "2024-06-25",
      action: "View",
      publish: false,
    },
    {
      id: "ART015",
      title: "React Native for Web",
      keyword: "React Native, Web",
      words: 980,
      createdOn: "2024-06-26",
      action: "View",
      publish: false,
    },
    {
      id: "ART016",
      title: "Progressive Web Apps",
      keyword: "PWA, Web",
      words: 1000,
      createdOn: "2024-06-27",
      action: "View",
      publish: false,
    },
    {
      id: "ART017",
      title: "Authentication in Next.js",
      keyword: "Authentication, Next.js",
      words: 1150,
      createdOn: "2024-06-28",
      action: "View",
      publish: false,
    },
    {
      id: "ART018",
      title: "API Rate Limiting Strategies",
      keyword: "API, Rate Limiting",
      words: 900,
      createdOn: "2024-06-29",
      action: "View",
      publish: false,
    },
    {
      id: "ART019",
      title: "Monorepo Management Tools",
      keyword: "Monorepo, Tools",
      words: 1000,
      createdOn: "2024-06-30",
      action: "View",
      publish: false,
    },
    {
      id: "ART020",
      title: "WebSockets in Modern Apps",
      keyword: "WebSockets, Real-time",
      words: 950,
      createdOn: "2024-07-01",
      action: "View",
      publish: false,
    },
  ];

  const archivedArticles = [
    {
      id: "ART021",
      title: "Legacy CSS Techniques",
      keyword: "CSS, Legacy",
      words: 700,
      createdOn: "2024-04-01",
      action: "View",
      publish: false,
    },
    {
      id: "ART022",
      title: "Old JavaScript Frameworks",
      keyword: "JavaScript, Legacy",
      words: 850,
      createdOn: "2024-03-15",
      action: "View",
      publish: false,
    },
    {
      id: "ART023",
      title: "Classic HTML Layouts",
      keyword: "HTML, Legacy",
      words: 900,
      createdOn: "2024-03-10",
      action: "View",
      publish: false,
    },
    {
      id: "ART024",
      title: "Deprecated Web APIs",
      keyword: "Web APIs, Deprecated",
      words: 950,
      createdOn: "2024-02-28",
      action: "View",
      publish: false,
    },
    {
      id: "ART025",
      title: "Flash in Web Development",
      keyword: "Flash, Legacy",
      words: 800,
      createdOn: "2024-02-15",
      action: "View",
      publish: false,
    },
    {
      id: "ART026",
      title: "Table-based Layouts",
      keyword: "HTML, Table Layouts",
      words: 1000,
      createdOn: "2024-02-01",
      action: "View",
      publish: false,
    },
    {
      id: "ART027",
      title: "IE6 Compatibility Hacks",
      keyword: "IE6, CSS Hacks",
      words: 750,
      createdOn: "2024-01-20",
      action: "View",
      publish: false,
    },
    {
      id: "ART028",
      title: "Classic ASP Pages",
      keyword: "ASP, Legacy",
      words: 850,
      createdOn: "2024-01-10",
      action: "View",
      publish: false,
    },
    {
      id: "ART029",
      title: "Framesets in HTML",
      keyword: "HTML, Framesets",
      words: 900,
      createdOn: "2023-12-25",
      action: "View",
      publish: false,
    },
    {
      id: "ART030",
      title: "Old School Java Applets",
      keyword: "Java, Applets",
      words: 950,
      createdOn: "2023-12-10",
      action: "View",
      publish: false,
    },
  ];




  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("generated");

  // Helper to filter articles by search
  const filterArticles = (articles) => {
    if (!search.trim()) return articles;
    const lower = search.toLowerCase();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(lower) ||
        a.keyword.toLowerCase().includes(lower)
    );
  };

  // Tab content mapping
  const tabArticles = {
    generated: generatedArticles,
    published: publishedArticles,
    scheduled: scheduledArticles,
    archived: archivedArticles,
  };

  const [loading, setLoading] = React.useState(false);

  // Handle tab change with loading
  const handleTabChange = (value) => {
    setLoading(true);
    setTab(value);
     setTimeout(() => setLoading(false), 500);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md min-h-screen">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-2xl font-bold">Article</h1>
        <Tabs
          defaultValue="generated"
          className="w-full "
          value={tab}
          onValueChange={handleTabChange}
        >
          <TabsList className="self-center flex gap-2 ">
            <TabsTrigger
              value="generated"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Generated Articles
            </TabsTrigger>
            <TabsTrigger
              value="published"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Published Articles
            </TabsTrigger>
            <TabsTrigger
              value="scheduled"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Scheduled Articles
            </TabsTrigger>
            <TabsTrigger
              value="archived"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
            >
              Archived Articles
            </TabsTrigger>
          </TabsList>
          <div className="self-center">
            <Input
              placeholder="Search for Title & Keywords"
              className="w-[300px] mt-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <TabsContent value="generated">
            {loading ? (
              <div className="flex justify-center items-center py-10">Loading...</div>
            ) : filterArticles(generatedArticles).length > 0 ? (
              <ArticleTable
                caption="Total 9 Article Titles | Show 10  entries per page"
                articles={filterArticles(generatedArticles)}
              />
            ) : (
              <p>No articles found.</p>
            )}
          </TabsContent>
          <TabsContent value="published">
            {loading ? (
              <div className="flex justify-center items-center py-10">Loading...</div>
            ) : filterArticles(publishedArticles).length > 0 ? (
              <ArticleTable
                caption="Total 5 Article Titles | Show 10 entries per page"
                articles={filterArticles(publishedArticles)}
              />
            ) : (
              <p>No articles found.</p>
            )}
          </TabsContent>
          <TabsContent value="scheduled">
            {loading ? (
              <div className="flex justify-center items-center py-10">Loading...</div>
            ) : filterArticles(scheduledArticles).length > 0 ? (
              <ArticleTable
                caption="Total 9 Article Titles | Show 10  entries per page"
                articles={filterArticles(scheduledArticles)}
              />
            ) : (
              <p>No articles found.</p>
            )}
          </TabsContent>
          <TabsContent value="archived">
            {loading ? (
              <div className="flex justify-center items-center py-10">Loading...</div>
            ) : filterArticles(archivedArticles).length > 0 ? (
              <ArticleTable
                caption="Total 9 Article Titles | Show 10  entries per page"
                articles={filterArticles(archivedArticles)}
              />
            ) : (
              <p>No articles found.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
export default Dashboard