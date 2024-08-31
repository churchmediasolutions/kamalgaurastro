import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro, u as unescapeHTML, b as addAttribute, F as Fragment } from '../chunks/astro/server_BJkajDH2.mjs';
import 'kleur/colors';
import merge from 'lodash.merge';
import { $ as $$PageLayout } from '../chunks/PageLayout_D_MLlgfc.mjs';
import { $ as $$SinglePost } from '../chunks/SinglePost_p15e57o4.mjs';
import { $ as $$Icon } from '../chunks/Icon_xTdnRnni.mjs';
import { c as getBlogPermalink, I as I18N, d as getCanonical, a as getPermalink } from '../chunks/permalinks_CEN_AaiC.mjs';
import { $ as $$Button } from '../chunks/Button_fQ_pE9k3.mjs';
import { i as findPostsByIds, j as getRelatedPosts, k as blogPostRobots, l as getStaticPathsBlogPost } from '../chunks/blog_BHF07eS2.mjs';
import { f as findImage } from '../chunks/Layout_BzFgCXV6.mjs';
import { $ as $$Grid } from '../chunks/Grid_CQZy9s0P.mjs';
import { $ as $$WidgetWrapper } from '../chunks/WidgetWrapper_BU5klIzt.mjs';
export { renderers } from '../renderers.mjs';

const $$ToBlogLink = createComponent(($$result, $$props, $$slots) => {
  const { textDirection } = I18N;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-6 sm:px-6 max-w-3xl pt-8 md:pt-4 pb-12 md:pb-20"> ${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": "px-3 md:px-3", "href": getBlogPermalink() }, { "default": ($$result2) => renderTemplate`${textDirection === "rtl" ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}`} Back to Blog
` })} </div>`;
}, "C:/development/kamalgaur/astrowind/src/components/blog/ToBlogLink.astro", void 0);

const $$Astro$2 = createAstro("https://astrowind.vercel.app");
const $$BlogHighlightedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogHighlightedPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    postIds = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findPostsByIds(postIds) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`<a class="text-muted dark:text-slate-400 hover:text-primary transition ease-in duration-200 block mb-6 lg:mb-0"${addAttribute(linkUrl, "href")}>${linkText} »
</a>`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "C:/development/kamalgaur/astrowind/src/components/widgets/BlogHighlightedPosts.astro", void 0);

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { post } = Astro2.props;
  const relatedPosts = post.tags ? await getRelatedPosts(post, 4) : [];
  return renderTemplate`${renderTemplate`${renderComponent($$result, "BlogHighlightedPosts", $$BlogHighlightedPosts, { "classes": { container: "pt-0 lg:pt-0 md:pt-0" }, "title": "Related Posts", "linkText": "View All Posts", "linkUrl": getBlogPermalink(), "postIds": relatedPosts.map((post2) => post2.id) })}` }`;
}, "C:/development/kamalgaur/astrowind/src/components/blog/RelatedPosts.astro", void 0);

const $$Astro = createAstro("https://astrowind.vercel.app");
const prerender = true;
const getStaticPaths = async () => {
  return await getStaticPathsBlogPost();
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { post } = Astro2.props;
  const url = getCanonical(getPermalink(post.permalink, "post"));
  const image = await findImage(post.image);
  const metadata = merge(
    {
      title: post.title,
      description: post.excerpt,
      robots: {
        index: blogPostRobots?.index,
        follow: blogPostRobots?.follow
      },
      openGraph: {
        type: "article",
        ...image ? { images: [{ url: image, width: image?.width, height: image?.height }] } : {}
      }
    },
    { ...post?.metadata ? { ...post.metadata, canonical: post.metadata?.canonical || url } : {} }
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SinglePost", $$SinglePost, { "post": { ...post, image }, "url": url }, { "default": ($$result3) => renderTemplate`${post.Content ? renderTemplate`${renderComponent($$result3, "post.Content", post.Content, {})}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(post.content || "")}` })}`}` })} ${renderComponent($$result2, "ToBlogLink", $$ToBlogLink, {})} ${renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "post": post })} ` })}`;
}, "C:/development/kamalgaur/astrowind/src/pages/[...blog]/index.astro", void 0);

const $$file = "C:/development/kamalgaur/astrowind/src/pages/[...blog]/index.astro";
const $$url = "/[...blog]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
