import React from 'react';

const AboutUs = () => {
    return (
        <div className='flex justify-center my-20'>
            <div className="card w-[500px] bg-base-200 shadow-xl">
                <div className="card-body relative">

                    <div className="avatar flex justify-center sticky -mt-24">
                        <div className="w-24 h-32  rounded-t-full rounded-b-full">
                            <img src="https://i.ibb.co/GCfCh91/IMG-20230109-213710.jpg" />
                        </div>
                    </div>

                    <h2 className="card-title text-cyan-700 flex justify-center">About Me</h2>

                    <p className='text-justify'>I am <span className='font-semibold'> Mohammad Junayed</span>. I am a passionate front-end developer using React
                        js. As a student, I am studying at BM college in Barishal, Bangladesh. I came to the web
                        development sector to interest my friend Mujahid. Then I research YouTube
                        tutorials and learn basic web design. Then I focused on the development sector. I
                        learn Html, CSS, JavaScript, and React JS. I already completed 4 projects using my
                        development knowledge. Many people ask me “Why are you coming from this
                        section? ”. And my answer is I love computer technology and am interested in
                        web development that’s why I come for this section. Besides of my this sector, I
                        love cricket, football, and badminton. <br />
                        In the future, I want to make myself a full stack web developer. That’s all for
                        myself.
                    </p>
                    <p className='text-xl font-semibold mt-1'>Skills</p>
                    <div className='my-5'>

                        <p><span className='font-semibold'>Expertise:</span> HTML 5, CSS3, Bootstrap, Tailwind CSS,</p>
                        <p><span className='font-semibold'>Comfortable:</span> JavaScript, ES6, React JS, react router, React Firebase Hooks, Firebase(authentication).</p>
                        <p> <span className='font-semibold'>Familiar:</span> Typescript, Redux, React Native, Nodejs, Expressjs, Mongo DB, Next js, React Bootstrap, daisyUI.</p>
                        <p><span className='font-semibold'>Tools:</span> Git, Vs code, Heroku, Render, Vercel, Netlify, Firebase.</p>
                    </div>

                    <a className='btn btn-secondary' href="https://drive.google.com/file/d/1nBHzTXJWmiBmLyHozH-B_CT3x8Hyo1y7/view?usp=sharing" target='_blank'>Resume Here</a>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;