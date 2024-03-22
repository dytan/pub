/*
 * @FilePath: \pub\quartz\components\Footer.tsx
 * @LastModifiedBy: minliu
 * @LastEditTime: 2024-03-22 11:14:51
 * @Description: 
 */
/*
 */
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
  record: string
}

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const record = opts?.record ?? ""
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div class="giscus"></div>
        <hr />
        <p>
          Created with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>, © {year}
        </p>
       
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>

        <p>
        <a href="https://beian.miit.gov.cn/" target="_blank">{record}</a>
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
