# GitHub release timeline visualization

Visualize releases of any GitHub repository on a timeline, with information about commits and pull requests.

Embeds in VitePress, can be a good replacement for `changelog` in the project's technical documentation, automating description of changes and making tracking them convenient for users.

![](./rt.jpg)

## Demo

- [https://vuesence.github.io/release-timeline/](https://vuesence.github.io/release-timeline/) (you can specify any repository via the selection in the upper left corner)

## Documentation

## [https://vue-faq.org/en/release-timeline/](https://vue-faq.org/en/release-timeline/)

## Installation

```bash [pnpm]
pnpm add release-timeline
```

In your code:

```vue
<script setup>
import { ReleaseTimeline, DefaultOptions as options } from "release-timeline";
import "release-timeline/dist/style.css";
import "release-timeline/dist/animated-background.css";

options.github.owner = "vuesence";
options.github.repo = "release-timeline";
</script>

<ReleaseTimeline :options="options" />
```

## Contributors

🚀 If you have any ideas for development of optimization of `release-timeline`, feel free to open [issues](https://github.com/vuesence/release-timeline/issues) or [pull requests](https://github.com/vuesence/release-timeline/pulls).
