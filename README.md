# use-fluent

Small typed hooks: debounce, localStorage, media query, toggle

## Getting started

```bash
npm install
npm test
```

## What it does

- useLocalStorage with JSON serialization
- Tiny: no dependencies besides React
- useMediaQuery SSR-safe
- useDebounce with leading/trailing options

## Examples

```bash
import { useDebounce, useLocalStorage } from './src';

const debounced = useDebounce(value, 300);
```

## Project structure

```text
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md
│   ├── workflows/
│   │   └── ci.yml
│   └── pull_request_template.md
├── docs/
│   ├── development.md
│   ├── faq.md
│   └── usage.md
├── examples/
│   └── quickstart.md
├── src/
│   ├── index.js
│   ├── useDebounce.js
│   └── useLocalStorage.js
├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
└── package.json
```

## Development

```bash
npm install
```

## License

MIT - see [LICENSE](LICENSE).
