export default function AboutContainer() {
  const experienceInYears = () => {
    const currentYear = new Date().getFullYear()

    const phpStartYear = 2015;

    return {
      php: Math.floor(currentYear - phpStartYear),
      ror: 1,
      node: "a few months",
      react: "no professional experience"
    }
  }

  return <section className="about-container">
    <h2>About</h2>
    <p>I have programming knowledge in PHP, Ruby on Rails, NodeJS and React
      languages, being approximately {experienceInYears().php} years of experience with PHP, {experienceInYears().ror} year of
      experience with Ruby on Rails, {experienceInYears().node} with NodeJS and {experienceInYears().react} with React.</p>

    <p>My experience with PHP involves creating websites in Wordpress and
      systems using Zend Framework, Yii2, Symfony and Laravel. My knowledge also
      involves HTML5, CSS3, Javascript, jQuery, Bootstrap, Git, Docker and MySQL
      and PostgreSQL databases.</p>

    <p>I have worked with government systems, working on code development and maintenance to optimize systems.</p>
  </section>
}