import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to reason about</>,
    description: (
      <>
        By removing common ways in which programs tend to become harder to understand and maintain, Tony is easier to reason about. It also supports advanced syntactical features like pattern matching, operator overloading, and list comprehensions.
      </>
    ),
  },
  {
    title: <>Safety as a foundation (v0.2.0)</>,
    description: (
      <>
        Tony is strongly and statically typed. It's type system is completely "sound", meaning that type mismatches are caught before running your code. Tony utilizes refinement types allowing for domain-specific checks at compile time, and as a bonus drastically reducing the need for error handling.
      </>
    ),
  },
  {
    title: <>Built for parallelism (v0.3.0)</>,
    description: (
      <>
        Tony makes it incredibly easy to write concurrent programs. It simplifies sharing memory between threads through channels and is inherently safe by only supporting immutable values.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.install,
              )}
              to={useBaseUrl('docs/cli/install')}>
              Install
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/introduction')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
