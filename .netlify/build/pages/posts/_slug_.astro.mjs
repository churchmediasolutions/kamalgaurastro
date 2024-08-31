import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_BJkajDH2.mjs';
import 'kleur/colors';
import { $ as $$SinglePost } from '../../chunks/SinglePost_p15e57o4.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BzFgCXV6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SinglePost", $$SinglePost, { "post": { ...post, image }, "url": url }, { "default": ($$result3) => renderTemplate`${post.Content ? renderTemplate`${renderComponent($$result3, "post.Content", post.Content, {})}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(post.content || "")}` })}`}` })} ` })}`;
}, "C:/development/kamalgaur/astrowind/src/pages/posts/[slug].astro", void 0);

const $$file = "C:/development/kamalgaur/astrowind/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
