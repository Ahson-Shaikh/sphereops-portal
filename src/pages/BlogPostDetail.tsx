import React from 'react';
import { CalendarDays, Clock3, ChevronLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/content/blogPosts';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-white">
        <Navbar />
        <main className="pt-32 pb-24">
          <section className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center rounded-2xl border border-slate-200 bg-slate-50 p-10">
              <h1 className="text-3xl font-bold text-sphere-navy mb-3">Blog post not found</h1>
              <p className="text-sphere-gray mb-6">The article you requested does not exist or may have been renamed.</p>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center rounded-full bg-sphere-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sphere-blue"
              >
                Back to Blog
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-sphere-accent mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back to all posts
            </Link>

            <span className="inline-flex items-center rounded-full bg-sphere-accent/10 px-3 py-1 text-xs font-semibold text-sphere-accent mb-4">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-sphere-navy mb-4 leading-tight">{post.title}</h1>
            <p className="text-lg text-sphere-gray mb-6">{post.excerpt}</p>
            <img
              src={post.coverImage}
              alt={post.coverAlt}
              className="w-full h-auto max-h-[420px] object-cover rounded-2xl border border-slate-200 mb-8"
            />

            <div className="flex items-center gap-4 text-sm text-sphere-gray border-b border-slate-200 pb-8 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 mb-8">
              <h2 className="text-xl font-semibold text-sphere-navy mb-4">Key Outcomes</h2>
              <ul className="space-y-3">
                {post.keyOutcomes.map((outcome) => (
                  <li key={outcome} className="text-sphere-gray leading-relaxed">
                    - {outcome}
                  </li>
                ))}
              </ul>
            </section>

            <figure className="mb-8">
              <img
                src={post.inlineImage}
                alt={post.inlineImageAlt}
                className="w-full h-auto max-h-[460px] object-contain rounded-2xl border border-slate-200 bg-white p-2"
                loading="lazy"
              />
              <figcaption className="text-xs text-sphere-gray mt-2">
                Visual reference aligned with this implementation narrative.
              </figcaption>
            </figure>

            <div className="space-y-5 text-sphere-gray leading-relaxed">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostDetail;
