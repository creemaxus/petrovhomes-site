export default {
  path: "/404.html",
  output: "404.html",
  title: "Page not found | Petrov Homes",
  description: "The page you were looking for could not be found.",
  noindex: true,
  content: () => `
      <section class="page-header page-header--tall">
        <div class="container page-header__inner">
          <p class="eyebrow eyebrow--light">Error 404</p>
          <h1 class="display-1">This page couldn’t be found.</h1>
          <p class="page-header__lead">The link may be out of date, or the address may have a typo.</p>
          <div class="button-row">
            <a class="button button--light" href="/">Return to the home page</a>
            <a class="button button--outline-light" href="/communities/">Explore communities</a>
          </div>
        </div>
      </section>`,
};
