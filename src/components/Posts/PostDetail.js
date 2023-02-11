import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {

    const { id } = useParams();

    const [post, setPost] = useState({});
    // console.log(post);

    const { image, likes, owner, publishDate, text, tags } = post

    useEffect(() => {
        fetch(`https://dummyapi.io/data/v1/post/${id}`, {
            headers: {
                "app-id": "63e524af27722acebf48853c"
            }
        })
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div className='flex justify-center my-5'>
            <div className="card card-compact w-[500px] bg-base-100 shadow-xl">
                <div className='flex gap-x-3'>
                    <div className="avatar">
                        <div className="w-11 h-fit rounded-full">
                            <img src={owner?.picture} />
                        </div>
                    </div>
                    <div className='mb-3 -mt-2'>
                        <p className='font-semibold'>{owner?.title}. {owner?.firstName} {owner?.lastName}</p>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <figure><img className='h-60 w-full' src={image} alt="image" /></figure>

                <div className="card-body">
                    <div className='flex gap-x-3 mt-5'>
                        <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/4102/4102964.png" alt="" />
                        <p className='-mt-1'>{likes}</p>
                    </div>

                    <p>{text}</p>
                    <div className='flex gap-x-4'>
                        {
                            tags?.map(tag => <p className='bg-red-400 w-full text-white px-3 py-1 rounded-md'>#{tag}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;