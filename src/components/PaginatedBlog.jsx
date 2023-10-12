import Link from "next/link";
import Date from '@library/date';

const PaginationPage = ({ items }) => {
    return (
      <>
        {items.map((item, index) => (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={`post-${index}`}>
            <div className="website-co-blog-item">
                <div className="image" data-website-co-overlay data-website-co-scroll>
                    <Link href={`/blog/${item.id}`}>
                        <img src={item.image} alt={item.title} />
                    </Link>
                </div>
                <div className="desc">
                    <div className="info">
                        <div className="date"><Date dateString={item.date} /></div>
                        {item.category}
                    </div>
                    <h5 className="title">
                        <Link href={`/blog/${item.id}`}>
                            <span>{item.title}</span>
                        </Link>
                    </h5>
                    <div className="website-co-text">
                        <div>
                            <p>
                                {item.short} <br />
                                <Link href={`/blog/${item.id}`} className="website-co-btn website-co-hover-btn">
                                    <span>Read more</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
      </>
    );
  };
  export default PaginationPage;
  