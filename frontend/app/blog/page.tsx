import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clipora Blog – YouTube Download Guides & Tech News",
  description: "Read the latest guides on how to download YouTube videos, convert to MP3, and more on the Clipora Blog.",
};

export default function BlogList() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Clipora <span className="neon-text-gradient">Blog</span></h1>
            <p className="text-white/60">Expert guides, tips, and tricks for video enthusiasts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group">
                <article className="glass-card overflow-hidden h-full flex flex-col hover:border-white/20 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs text-white/40 mb-3">{blog.date}</div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-neonRed transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-white/60 text-sm line-clamp-3 mb-6">
                      {blog.description}
                    </p>
                    <div className="mt-auto text-sm font-bold text-neonPurple flex items-center">
                      Read More <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
