<h1 align=center>🖥️</h1>
<h1 align=center>Marcus Stewart's Portfolio V2</h1>

<p align=center>See <a href="https://www.marcusstewart.me">https://www.marcusstewart.me/</a>. Made with Gatsby. ❤️</p>

<p align="center">
  <a href="https://www.marcusstewart.me">
    <img alt="Website" src="https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fwww.marcusstewart.me%2F">
  </a>
</p>

## 🚀 Deployment

Deployed on [Netlify](https://www.netlify.com) automatically on every push to `main`.

- **Node.js:** set by the `NODE_VERSION` environment variable in Netlify (currently `24`).
- **`@netlify/blobs` is required** even though the site's code doesn't import it. Netlify's bot-blocker extension adds
  an edge function that loads it from this project's dependencies, and the build fails without it. Don't remove it when
  cleaning up dependencies.
- **Environment variables:** `ARCJET_KEY` must be set in Netlify for the Arcjet function in `netlify/functions/index`.

## 🤓 Author

- **Marcus Stewart** - [MMStewart](https://github.com/mmstewart)

## 📚 Resources

<p>Resources that helped me make this website possible!</p>

- [Iconify](https://iconify.design)
- [DaisyUI](https://daisyui.com)
- [PrebuiltUI](https://prebuiltui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Rombo](https://rombo.co)
- [Arcjet](https://arcjet.com)

## 💜 Acknowledgments

- [Gatsby](https://www.gatsbyjs.com)
- [Netlify](https://www.netlify.com)

## 📝 License

Copyright (c) 2025–present Marcus Stewart, see Git history

BSD Zero Clause licensed, see [LICENSE](LICENSE) file.
