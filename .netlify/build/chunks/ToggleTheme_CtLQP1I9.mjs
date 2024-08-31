import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from './astro/server_BJkajDH2.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_xTdnRnni.mjs';
import { U as UI } from './permalinks_CEN_AaiC.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$ToggleTheme = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToggleTheme;
  const {
    label = "Toggle between Dark and Light mode",
    class: className = "text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center",
    iconClass = "w-6 h-6",
    iconName = "tabler:sun"
  } = Astro2.props;
  return renderTemplate`${!(UI.theme.endsWith(":only")) && renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-color-scheme>${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": iconClass })}</button>`}`;
}, "C:/development/kamalgaur/astrowind/src/components/common/ToggleTheme.astro", void 0);

export { $$ToggleTheme as $ };
