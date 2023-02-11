import React, { useEffect, useState } from 'react';
import Post from '../Posts/Post';

const AllPost = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://dummyapi.io/data/v1/post", {
            headers: {
                "app-id": "63e524af27722acebf48853c"
            }
        })
            .then(res => res.json())
            .then(data => setPosts(data.data))
    }, [])

    return (
        <div className='my-10'>
            <h3 className='text-center text-3xl text-cyan-800 font-bold my-7'>All Posts</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-6'>
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default AllPost;