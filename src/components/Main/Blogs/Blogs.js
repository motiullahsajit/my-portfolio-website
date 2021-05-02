import React from 'react';
import Blog from '../Blog/Blog';
import { Blogsdata } from './BlogsData';

const Blogs = () => {
    const blogs = Blogsdata;
    return (
        <section id='blog' style={{ backgroundColor: "#F9F9FF" }} className='container-fluid py-5'>
            <div className="container">
                <h1 className='text-center mb-5'>My blogs</h1>
                <div className="row g-5 mx-auto">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;