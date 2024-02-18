import React from "react";
import "./page-1.css"
import Navbar from "../../components/Navbar"
import MosqueImg from "../../assets/masjid-img.jpg"
import { useState } from "react";
import Footer from "../../components/Footer";


const Page1 = () => {
    const [blogpages, useBlogPages] = useState([
        {image: {MosqueImg}, title: "Lorem Ipsum Yadayada", contents: "Lorem ipsum eget fusce tempor dapibus lobortis lectus, blandit dictum himenaeos cursus diam et, sed sit aliquam suspendisse tristique non. Ad volutpat viverra maecenas rhoncus luctus turpis tellus, rutrum nisi imperdiet laoreet neque at ullamcorper, erat neque quis sociosqu rutrum imperdiet. Class curabitur aptent dictum rutrum nullam habitant vestibulum, congue amet praesent mauris vulputate non, vivamus eleifend velit lorem neque duis. Feugiat amet vulputate est consequat morbi ultricies vitae litora ante imperdiet, curae auctor metus posuere volutpat velit auctor euismod scelerisque morbi, aliquet etiam posuere commodo purus lacinia luctus non commodo.Curabitur viverra ad molestie euismod hac nulla nullam etiam dui adipiscing enim, sociosqu consequat tempor vitae luctus sollicitudin nisl et condimentum diam, aenean vivamus habitasse torquent per sit primis a id aenean. Maecenas metus curae aenean tellus luctus aliquet fames congue purus commodo, convallis eros nec varius congue adipiscing donec venenatis hendrerit, etiam ad dictum vivamus eu a morbi lorem ut. Dolor hendrerit purus consequat ad, habitasse urna venenatis." },
        {image: {MosqueImg}, title: "Lorem Ipsum Yadayada222", contents: "Lorem ipsum eget fusce tempor dapibus lobortis lectus, blandit dictum himenaeos cursus diam et, sed sit aliquam suspendisse tristique non. Ad volutpat viverra maecenas rhoncus luctus turpis tellus, rutrum nisi imperdiet laoreet neque at ullamcorper, erat neque quis sociosqu rutrum imperdiet. Class curabitur aptent dictum rutrum nullam habitant vestibulum, congue amet praesent mauris vulputate non, vivamus eleifend velit lorem neque duis. Feugiat amet vulputate est consequat morbi ultricies vitae litora ante imperdiet, curae auctor metus posuere volutpat velit auctor euismod scelerisque morbi, aliquet etiam posuere commodo purus lacinia luctus non commodo.Curabitur viverra ad molestie euismod hac nulla nullam etiam dui adipiscing enim, sociosqu consequat tempor vitae luctus sollicitudin nisl et condimentum diam, aenean vivamus habitasse torquent per sit primis a id aenean. Maecenas metus curae aenean tellus luctus aliquet fames congue purus commodo, convallis eros nec varius congue adipiscing donec venenatis hendrerit, etiam ad dictum vivamus eu a morbi lorem ut. Dolor hendrerit purus consequat ad, habitasse urna venenatis." }, 
    ])

    return (
    <div>
        <Navbar />
        <div>
                <img src={MosqueImg} className="blog-img"></img>
                <h1 className="page-header"></h1>
                <hr className="page-divide"></hr>
                <p className="page-paragraph">
                    Lorem ipsum eget fusce tempor dapibus lobortis lectus, blandit dictum himenaeos cursus diam et, sed sit aliquam suspendisse tristique non. Ad volutpat viverra maecenas rhoncus luctus turpis tellus, rutrum nisi imperdiet laoreet neque at ullamcorper, erat neque quis sociosqu rutrum imperdiet. Class curabitur aptent dictum rutrum nullam habitant vestibulum, congue amet praesent mauris vulputate non, vivamus eleifend velit lorem neque duis. Feugiat amet vulputate est consequat morbi ultricies vitae litora ante imperdiet, curae auctor metus posuere volutpat velit auctor euismod scelerisque morbi, aliquet etiam posuere commodo purus lacinia luctus non commodo.
                <br className="page-parabreak"></br>
                <br></br>
                Curabitur viverra ad molestie euismod hac nulla nullam etiam dui adipiscing enim, sociosqu consequat tempor vitae luctus sollicitudin nisl et condimentum diam, aenean vivamus habitasse torquent per sit primis a id aenean. Maecenas metus curae aenean tellus luctus aliquet fames congue purus commodo, convallis eros nec varius congue adipiscing donec venenatis hendrerit, etiam ad dictum vivamus eu a morbi lorem ut. Dolor hendrerit purus consequat ad, habitasse urna venenatis.
                </p>
        </div>
        <Footer />
    </div>
    )
}

export default Page1;