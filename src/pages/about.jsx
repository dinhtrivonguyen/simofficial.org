import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AboutThreeMain from '../components/abouts/about-4';

const AboutThree = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'About'} />
            <AboutThreeMain />
        </Wrapper>
    )
}

export default AboutThree;