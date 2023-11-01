import { blog_data } from '../../../data';
import BlogPostTwo from '../../blog-post-2/blog-post-two';

const BlogArea = ({ style_2 }) => {
    const blogItems = blog_data.filter(b => b.home_1);
    return (
        <div className={`edu-blog-area ${style_2 ? style_2 : "blog-area-1 edu-section-gap" }`} style={{
            backgroundColor: '#F0FFCA',
            position: 'relative',
            zIndex: '1',
        }}>
            <div className="container">
                <div className="section-title section-center" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                    <h2 className="title">Follow our journeys ✨</h2>
                </div>
                <div className="row g-5">
                    {blogItems.map((blogItem, i) => ( 
                        <div key={i} className="col-lg-4 col-md-6 col-12" data-sal-delay={blogItem.delay} data-sal="slide-up" data-sal-duration="800">
                            <BlogPostTwo param={blogItem} />
                        </div> 
                    ))}
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1 scene">
                    <img src="/assets/images/about/shape-25.png" alt="Shape" />
                </li>
            </ul>
        </div>
    )
}

export default BlogArea;