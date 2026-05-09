import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Clipora?</h2>
            <p className="text-white/60">The fastest and most reliable YouTube downloader on the web.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ultra-Fast Speed",
                desc: "Our high-speed servers ensure your downloads are processed in seconds.",
                icon: "⚡"
              },
              {
                title: "No Registration",
                desc: "Download as many videos as you want without creating an account.",
                icon: "🛡️"
              },
              {
                title: "Multiple Formats",
                desc: "Support for MP4, MP3, and more in various qualities up to 4K.",
                icon: "🎥"
              }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8 hover:bg-white/10 transition-all cursor-default">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending / Recent Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold mb-12 flex items-center">
             <span className="w-2 h-8 bg-neon-gradient rounded-full mr-4" />
             Trending Downloads
           </h2>
           
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="group cursor-pointer">
                   <div className="relative aspect-video rounded-xl overflow-hidden mb-3 border border-white/5 group-hover:border-white/20 transition-all">
                      <img 
                        src={`https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80`} 
                        alt="trending"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                   </div>
                   <h4 className="font-semibold text-sm line-clamp-2 text-white/80 group-hover:text-white transition-colors">
                     Trending YouTube Video #{item} - HD Download
                   </h4>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is Clipora free to use?", a: "Yes, Clipora is 100% free and will always be." },
              { q: "Do I need to install any software?", a: "No, Clipora is a web-based tool. You only need a browser." },
              { q: "Can I download YouTube Shorts?", a: "Absolutely! Just paste the Shorts URL and we'll handle the rest." }
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-white/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
