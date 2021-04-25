import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import donuts from '../images/blueberries.jpeg' 
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About Us">
    <Seo title="About" />
    <img src={donuts} alt="donuts" style={{marginBottom: '60px'}}/>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem dolorem rerum quos distinctio eos adipisci officiis veritatis? Ipsam, perspiciatis velit?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi earum accusantium perferendis tempore maiores suscipit minus quam sapiente magni quasi ea pariatur repudiandae iure perspiciatis blanditiis, reiciendis repellat dolorem quibusdam! Ad adipisci cumque necessitatibus nam libero qui non velit atque ut eaque, deserunt quam perspiciatis temporibus odit doloremque et pariatur officia fugiat quod labore, animi iste voluptatum. Est necessitatibus in possimus dicta, ad odit! Ut adipisci ullam dolores officiis facere qui dolorem recusandae eum perspiciatis aut, harum sequi atque reiciendis a rerum? Ducimus eos, quis dicta nesciunt sequi aspernatur! Dolore modi hic inventore veniam iure fugiat architecto error omnis?</p>
    <br/>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quisquam, mollitia est perspiciatis rem doloribus ipsa voluptate eligendi sunt cum excepturi dolorum deleniti in vel earum sed qui veritatis maiores obcaecati magnam. Ut impedit repellendus optio maiores nesciunt officiis ratione quam ipsa nam ullam cumque neque, numquam cupiditate quo ab.</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, officia aliquid neque nesciunt sapiente, aliquam fugiat enim dolor dignissimos repudiandae illo mollitia eius error qui magnam vero, et hic quis perspiciatis sit beatae deleniti quisquam? Distinctio nemo velit libero natus enim cupiditate nobis suscipit sapiente repellendus nostrum, tenetur consectetur consequuntur quibusdam. Harum aliquam vel est delectus, eaque dolorem ipsam nostrum ea velit placeat tempora dolores earum vitae possimus, voluptate deleniti pariatur, cupiditate obcaecati rerum libero? Dolorem fuga accusamus, consequatur quo sequi ab officiis fugit expedita neque explicabo mollitia temporibus soluta voluptatem atque impedit? Enim non quis dignissimos, explicabo, voluptatibus ut reprehenderit exercitationem tempore omnis odit cum ipsam dolorem adipisci nobis ipsa ullam dolorum magnam. Sint, aliquid illo! Blanditiis quasi alias voluptatum sit. Distinctio dolores accusamus sit sunt ullam cupiditate, repellendus eos id et optio tempora quisquam voluptatum non facilis ipsum consectetur, perspiciatis placeat beatae vel? Impedit temporibus optio nisi nulla.</p>
  </Layout>
)

export default AboutPage
