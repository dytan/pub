/*
 * @FilePath: /quartz/quartz/components/Footer.tsx
 * @LastModifiedBy: dytan
 * @LastEditTime: 2024-01-07 15:39:05
 * @Description: 
 */
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
  beian: string
}

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const beian = opts?.beian ?? ""
    return (
      <footer class={`${displayClass ?? ""}`}>
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
        <a href="https://beian.miit.gov.cn/" target="_blank">{beian}</a>
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
