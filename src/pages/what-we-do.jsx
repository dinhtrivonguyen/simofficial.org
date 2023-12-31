import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AboutThreeMain from '../components/abouts/about-3';

const AboutThree = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'What we do'} />
            <AboutThreeMain />
        </Wrapper>
    )
}

export default AboutThree;