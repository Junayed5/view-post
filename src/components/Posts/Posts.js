import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://dummyapi.io/data/v1/post?limit=6", {
            headers: {
                "app-id": "63e524af27722acebf48853c"
            }
        })
            .then(res => res.json())
            .then(data => setPosts(data.data))
    }, [])

    return (
        <div>
            <h3 className='text-center text-3xl text-cyan-800 font-bold my-7'>Posts</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-6'>
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>

            <div className='flex justify-center'>
                <Link to='/all-post' className="btn btn-accent text-white my-10 w-40"> See More</Link>
            </div>
        </div>
    );
};

export default Posts;