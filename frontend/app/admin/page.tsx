import Navbar from "@/components/Navbar";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
           {[
             { label: "Total Downloads", value: "1,234", trend: "+12%" },
             { label: "Active Blogs", value: "52", trend: "+2" },
             { label: "Revenue (Ads)", value: "$450.20", trend: "+5%" },
             { label: "Total Users", value: "8,901", trend: "+150" },
           ].map((stat, i) => (
             <div key={i} className="glass-card p-6">
                <div className="text-white/40 text-sm mb-1">{stat.label}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-green-500 text-xs mt-2">{stat.trend} this week</div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="glass-card p-8">
              <h2 className="text-xl font-bold mb-6">Recent Downloads</h2>
              <div className="space-y-4">
                 {[1, 2, 3, 4, 5].map((item) => (
                   <div key={item} className="flex items-center justify-between py-2 border-b border-white/5">
                      <div className="text-sm font-medium">Video Title Example {item}...</div>
                      <div className="text-xs text-white/40">2 mins ago</div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="glass-card p-8">
              <h2 className="text-xl font-bold mb-6">Blog Management</h2>
              <button className="neon-button w-full mb-4">Create New Post</button>
              <div className="space-y-4">
                 {[1, 2, 3].map((item) => (
                   <div key={item} className="flex items-center justify-between py-2 border-b border-white/5">
                      <div className="text-sm">How to download YouTube...</div>
                      <button className="text-xs text-blue-400">Edit</button>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
