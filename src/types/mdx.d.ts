/// <reference types="react" />

declare module "*.mdx" {
  let MDXComponent: (props: React.ComponentProps<"div">) => JSX.Element;
  export default MDXComponent;
}
