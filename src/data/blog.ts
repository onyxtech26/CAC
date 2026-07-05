import { BlogPost } from '../types';

/**
 * Published blog posts (bundled with the site — visible to every visitor).
 *
 * To publish a new post permanently: write it in the in-site blog editor
 * (double-click the navbar logo → log in → compose → "Generate JSON"),
 * then paste the generated object into this array and redeploy.
 *
 * Posts saved from the editor as a "local draft" live in localStorage and
 * only appear in the author's own browser until added here.
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'why-forensic-appraisal',
    title: 'Why Forensic Appraisal Beats a Gut-Feel Valuation',
    author: 'Mohaan',
    date: '2 July 2026',
    category: 'Forensics',
    excerpt:
      'Most property losses are avoidable. They come from valuing on optimism instead of evidence. Here is how a forensic approach compresses that risk.',
    content:
      'Every property decision is really a decision about risk. The question is whether that risk is measured or assumed.\n\nA gut-feel valuation leans on recent asking prices and a general sense of the market. A forensic appraisal starts from verified evidence: the chain of title, encumbrances, comparable transactions that actually closed, and the physical condition of the asset itself.\n\nAt CAC we treat every deal as a file to be proven, not a story to be believed. Before capital is committed, each asset is independently valued and title-verified, and held under first legal charge. That discipline is what turns an uncertain purchase into a defensible position.',
    readTime: '3 min read',
  },
  {
    id: 'subsale-flip-playbook',
    title: 'The Subsale Flip Playbook: Buy Below, Exit in Months',
    author: 'CAC Research',
    date: '28 June 2026',
    category: 'Strategy',
    excerpt:
      'Fast subsale flips are the engine of a balanced pipeline. The margin is made at acquisition — not at resale.',
    content:
      'A good flip is won on the day you buy, not the day you sell.\n\nOur subsale process is deliberately narrow: source below-market homes in established corridors, verify clean title, refurbish only where value can be added, and resolve to a profitable resale inside a two-to-three month window.\n\nBy pairing these fast-exit flips with higher-upside land plays, the overall pipeline stays balanced — quick capital recycling on one side, larger conversions on the other, all inside the same six-month facility cycle.',
    readTime: '4 min read',
  },
];
