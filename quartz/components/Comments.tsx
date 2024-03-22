import { QuartzComponentConstructor } from "./types";

export default (() => {
    function Footer(){
        return (
            <script src="https://giscus.app/client.js"
                data-repo="dytan/pub"
                data-repo-id="R_kgDOK_lf3A"
                data-category="General"
                data-category-id="DIC_kwDOK_lf3M4CeJZm"
                data-mapping="pathname"
                data-strict="0"
                data-reactions-enabled="1"
                data-emit-metadata="0"
                data-input-position="bottom"
                data-theme="preferred_color_scheme"
                data-lang="en"
                crossorigin="anonymous"
                async>
            </script>
        )
    }

    return Footer
}) satisfies QuartzComponentConstructor