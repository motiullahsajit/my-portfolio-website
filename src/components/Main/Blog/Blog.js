import React from 'react';

const Blog = ({ blog }) => {
    const { title, shortDisprition, imgUrl, BlogLink } = blog;
    return (
        <article className='col-md-4'>
            <div className="card h-100">
                <img src={imgUrl} className="card-img-top h-75" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{shortDisprition}</p>
                    <p className='text-warning mt-3'>Read More</p>
                </div>
            </div>
        </article>
    );
};

export default Blog;