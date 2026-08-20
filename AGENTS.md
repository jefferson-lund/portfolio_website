## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## GitHub

This is a **personal** project. Use the `jefferson-lund` account only — not `jefferson-pattern`.

- Before any `gh` command or GitHub MCP action, switch accounts:
  ```bash
  gh auth switch -h github.com -u jefferson-lund
  ```
- Verify with `gh auth status` that the active account is `jefferson-lund`.
- Git remote must use the personal SSH host:
  `git@github-lund:jefferson-lund/<repo>.git`
- Do not push to or create resources under `jefferson-pattern` from this repo.
- Commits in this repo should use the local git identity configured for `jefferson-lund`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
