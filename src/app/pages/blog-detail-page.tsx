import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Clock, User, ArrowLeft, Calendar, Tag } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase-client";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  hero_image_url: string | null;
  author: string;
  author_role: string | null;
  author_avatar_url: string | null;
  category: string;
  tags: string[];
  read_time: number;
  published_at: string;
}

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      if (!slug) return;
      
      setLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      if (error) {
        setError("Blog post not found");
        setLoading(false);
        return;
      }

      setBlog(data);
      setLoading(false);
    }

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog Post Not Found</h1>
            <p className="text-slate-600 mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link
              to="/resources/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(blog.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                to="/resources/blog"
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                {blog.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{blog.author}</span>
                  {blog.author_role && (
                    <span className="text-slate-400">• {blog.author_role}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{blog.read_time} min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl" />
      </section>

      {/* Hero Image */}
      {blog.hero_image_url && (
        <section className="py-12 bg-white relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={blog.hero_image_url}
                alt={blog.title}
                className="w-full rounded-2xl shadow-2xl aspect-video object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg prose-slate max-w-none
                prose-headings:font-bold prose-headings:text-slate-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-slate-600 prose-li:mb-2
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                prose-hr:border-slate-200 prose-hr:my-12"
              dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
            />

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-8 border-t border-slate-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-slate-500" />
                  <span className="font-semibold text-slate-700">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Revenue Operations?
              </h3>
              <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
                See how Tasknova can help your team predict deal risk, improve forecasting accuracy, and close more deals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/book-demo"
                  className="px-8 py-3 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  Book a Demo
                </Link>
                <Link
                  to="/resources/blog"
                  className="px-8 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  More Articles
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Helper function to convert markdown-style content to HTML
function formatContent(content: string): string {
  // Split content into blocks by double newlines
  const blocks = content.split(/\n\n+/);
  
  return blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';
    
    // Headers
    if (trimmed.startsWith('## ')) {
      return `<h2 class="mt-12 mb-6">${trimmed.slice(3)}</h2>`;
    }
    if (trimmed.startsWith('### ')) {
      return `<h3 class="mt-8 mb-4">${trimmed.slice(4)}</h3>`;
    }
    
    // Horizontal rule
    if (trimmed === '---') {
      return '<hr class="my-12"/>';
    }
    
    // List items
    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').map(line => {
        if (line.startsWith('- ')) {
          const itemContent = line.slice(2)
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>');
          return `<li class="mb-3">${itemContent}</li>`;
        }
        return '';
      }).join('');
      return `<ul class="my-6 ml-6 list-disc space-y-2">${items}</ul>`;
    }
    
    // Regular paragraph - apply inline formatting
    const formatted = trimmed
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    return `<p class="mb-6 leading-relaxed">${formatted}</p>`;
  }).join('\n');
}

export default BlogDetailPage;
