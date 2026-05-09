import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find(b => b.slug === params.slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | Clipora Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [{ url: blog.image }],
    }
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find(b => b.slug === params.slug);
  
  if (!blog) notFound();

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-sm text-neonPurple font-bold mb-4 uppercase tracking-widest">Guide</div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">{blog.title}</h1>
            <div className="flex items-center space-x-4 text-white/40 text-sm">
              <span>{blog.date}</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/5">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          <div 
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-white prose-headings:font-bold
              prose-p:text-white/70 prose-p:leading-relaxed
              prose-a:text-neonPurple prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-ul:text-white/70"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />

          <div className="mt-20 p-12 glass-card text-center">
             <h3 className="text-2xl font-bold mb-4">Try Clipora Today</h3>
             <p className="text-white/60 mb-8">The easiest way to download any YouTube video for free.</p>
             <button className="neon-button">Go to Downloader</button>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
