import React from 'react';
import { CalendarDays, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts } from '@/content/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-medium text-sphere-accent bg-sphere-accent/10 rounded-full mb-4">
              SphereOps Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-sphere-navy mb-4">Insights, Updates, and Delivery Stories</h1>
            <p className="text-sphere-gray text-lg">
              Publish company updates, project learnings, and technical write-ups here to share what your team is building.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-transform hover:-translate-y-1"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <img src={post.coverImage} alt={post.coverAlt} className="h-52 w-full object-cover" loading="lazy" />
                  <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-sphere-accent/10 px-3 py-1 text-xs font-semibold text-sphere-accent">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-sphere-navy mt-4 mb-3 leading-snug">{post.title}</h2>
                  <p className="text-sphere-gray mb-5">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-sphere-gray">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-sphere-accent">Read article</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <h3 className="text-2xl font-semibold text-sphere-navy mb-2">Ready to publish a new blog?</h3>
            <p className="text-sphere-gray mb-6">
              Add a new object in `src/content/blogPosts.ts` with a unique slug, cover image, outcomes, and implementation write-up to publish your latest company update.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-sphere-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sphere-blue"
            >
              Talk to SphereOps
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
