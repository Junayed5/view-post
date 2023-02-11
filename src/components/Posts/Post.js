import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {

    const { id, image, likes, owner, publishDate, text, tags } = post

    return (
        <div className="card card-side bg-base-200 shadow-xl">
            <figure><img className='h-64 w-80 md:w-52 lg:w-52' src={image} alt="image" /></figure>
            <div className="card-body">
                <div className='flex gap-x-3'>
                    <div className="avatar">
                        <div className="w-11 h-fit rounded-full">
                            <img src={owner.picture} />
                        </div>
                    </div>
                    <div className='mb-3 -mt-2'>
                        <p className='font-semibold'>{owner.title}. {owner.firstName} {owner.lastName}</p>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <p>{text}</p>
                <div className='flex gap-x-4'>
                    {
                        tags.map(tag => <p  className='bg-red-400 w-fit text-white px-3 py-1 rounded-md'>#{tag}</p>)
                    }
                </div>
                <div className="card-actions justify-between">
                    <div className='flex gap-x-3 mt-5'>
                        <img className='h-5 w-5' src="https://cdn-icons-png.flaticon.com/512/4102/4102964.png" alt="" />
                        <p className='-mt-1'>{likes}</p>
                    </div>
                    <Link to={`/post/${id}`}><button className="btn btn-sm bg-sky-900 mt-3">Post Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Post;