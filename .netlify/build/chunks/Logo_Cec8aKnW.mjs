import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BJkajDH2.mjs';
import 'kleur/colors';
import 'clsx';
import { S as SITE } from './permalinks_CEN_AaiC.mjs';

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white">
🚀 ${SITE?.name} </span>`;
}, "C:/development/kamalgaur/astrowind/src/components/Logo.astro", void 0);

export { $$Logo as $ };
