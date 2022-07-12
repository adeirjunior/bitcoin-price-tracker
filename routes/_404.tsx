/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps} from "$fresh/server.ts"

export default function Home(props: PageProps) {
    const title = "Error 404";
    return (
      <div class={tw`w-screen h-screen bg-gray-900`}>
        <head>
          <title>{title}</title>
        </head>
        <div class={tw`p-8 mx-auto max-w-screen-md bg-gray-900`}>
          <img
            src="/logo.svg"
            width="200px"
            class="mx-auto"
          />
          <h2 class={tw`my-10 text(center 3xl white)`}>{title}</h2>
          <p class={tw`my-10 text(center xl white)`}>Path {props.url.pathname} not found</p>
        </div>
      </div>
    );
  }