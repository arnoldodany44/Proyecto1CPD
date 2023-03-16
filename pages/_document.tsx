import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-U15fJ44sVEsZMQrxXZSPx+ld0N6YGTJhWNU+8KwC0B/2QWTJGidOZ9XvZrLXXFQ2G/W1No4Ez4Jh4dp5/hu/Pg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.3/js/bootstrap.bundle.min.js" integrity="sha512-mmnzYHHl0dCg/e7lQQ/zizxsj0mEmBZD0Bh3x3L/UQ2VtjO/j4i4vp7/06AM5+uV5p83SxEh9V7d5OhbDqbA7g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
