import{_ as e,c as t,o as i,a3 as o}from"./chunks/framework.BYhES31N.js";const p=JSON.parse('{"title":"Client notifications","description":"","frontmatter":{},"headers":[],"relativePath":"developers/client-notifications.md","filePath":"developers/client-notifications.md"}'),a={name:"developers/client-notifications.md"},s=o('<h1 id="client-notifications" tabindex="-1">Client notifications <a class="header-anchor" href="#client-notifications" aria-label="Permalink to &quot;Client notifications&quot;">​</a></h1><p>When AireForms is iframed into another application it will raise notification events to the parent window via <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage" target="_blank" rel="noreferrer">postMessage</a>. By listening to these events you can navigate away/close any modals after the user has finished with the form.</p><p>The following messages are available:</p><ul><li><code>form-discarded</code> - Raised when the user clicks the discard button</li><li><code>form-closed</code> - Raised when the user clicks the close button</li><li><code>form-draft-saved</code> - Raised when the user clicks the save draft button</li><li><code>form-submitted</code> - Raised when the user clicks the submit button</li><li><code>form-keep-alive</code> - From 7.5.0 this is raised every 5 minutes if there has been any user interaction on the form</li></ul>',4),n=[s];function r(c,l,d,h,f,_){return i(),t("div",null,n)}const u=e(a,[["render",r]]);export{p as __pageData,u as default};
