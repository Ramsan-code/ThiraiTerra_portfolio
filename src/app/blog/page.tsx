import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { format, parseISO } from "date-fns";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Blog | ThiraiTerra",
  description: "Read the latest updates and insights from ThiraiTerra on Medium.",
};

interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

interface MediumFeedResponse {
  status: string;
  items: MediumPost[];
}

// Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600;

async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thiraiterra",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Medium feed");
    }

    const data: MediumFeedResponse = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}

// Helper to strip HTML tags to create a clean excerpt
function createExcerpt(html: string, length = 150) {
  const text = html.replace(/<[^>]*>?/gm, "").trim();
  return text.length > length ? text.substring(0, length) + "..." : text;
}

export default async function BlogListingPage() {
  const posts = await getMediumPosts();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-foreground selection:text-background">
      <Navbar />

      <main className="pt-32 pb-40">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-20">
            <Badge className="bg-foreground/5 text-foreground/60 mb-6 border-foreground/10 px-4 py-1.5 uppercase tracking-[0.2em] text-[10px]">
              Blog
            </Badge>
            <h1 className="text-display-hero !text-6xl mb-6 tracking-[-0.03em] break-words">
              Industry <span className="text-foreground/40 italic">INSIGHTS</span>
            </h1>
            <p className="text-body-narrative text-muted-foreground max-w-2xl mb-8">
              Thoughts, engineering deep dives, and updates from the ThiraiTerra team.
            </p>
            <a
              href="https://medium.com/@thiraiterra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-foreground/90 transition-all hover:scale-[1.02]"
            >
              Follow us on Medium <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => {
              // Medium dates from rss2json are usually "YYYY-MM-DD HH:mm:ss" 
              // We replace space with 'T' to make it ISO 8601 compatible for date-fns
              const isoDateString = post.pubDate.replace(" ", "T");
              let formattedDate = post.pubDate;
              try {
                formattedDate = format(parseISO(isoDateString), "MMMM d, yyyy");
              } catch (e) {
                // fallback to raw string if parsing fails
              }

              const excerpt = createExcerpt(post.description);

              // Extract a valid thumbnail if one isn't provided natively by rss2json
              // Sometimes Medium RSS puts the first image in description instead of thumbnail
              let imageUrl = post.thumbnail;
              if (!imageUrl && post.description.includes("<img")) {
                const imgMatch = post.description.match(/<img[^>]+src="([^">]+)"/);
                if (imgMatch && imgMatch[1]) {
                  imageUrl = imgMatch[1];
                }
              }

              return (
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={post.guid}
                  className="group h-full flex flex-col"
                >
                  <SpotlightCard className="p-0 h-full flex flex-col border-foreground/10 hover:border-foreground/30 transition-colors overflow-hidden">
                    {/* Thumbnail Image */}
                    {imageUrl && (
                      <div className="relative w-full h-48 bg-foreground/5 border-b border-foreground/10 overflow-hidden">
                        {/* We use standard img tag because next/image requires domains configured in next.config.mjs */}
                        <img
                          src={imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}

                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-6">
                        <Calendar className="w-4 h-4 text-foreground/40" />
                        <time dateTime={isoDateString} className="text-label-stats text-[10px] uppercase tracking-widest text-foreground/60">
                          {formattedDate}
                        </time>
                      </div>

                      <h2 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-foreground/80 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3 flex-1">
                        {excerpt}
                      </p>

                      <div>
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.categories.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-foreground/5 border border-foreground/10 text-foreground/60 uppercase tracking-widest">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center text-[11px] font-bold uppercase tracking-widest text-foreground gap-2 group-hover:gap-4 transition-all">
                          Read on Medium <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </a>
              );
            })}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-6">We're currently writing new insights.</p>
              <a
                href="https://medium.com/@thiraiterra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 text-foreground font-bold uppercase tracking-widest text-[10px] hover:bg-foreground/5 transition-all"
              >
                Visit our Medium Page <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
