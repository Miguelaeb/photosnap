import React from "react";

export default function Main() {
    return (
        <div>
            <div>
                <img className=" w-full lg:w-[60%]" src="/images/Bitmap.png" alt="river" />

                <div className=" relative bg-black pt-[4.5rem] pl-[2.06rem] pb-[4.5rem] pr-6">
                    <div className=" line"></div>
                    <h1 className=" title__mobile">
                        Create and share your photo stories.
                    </h1>
                    <p className=" paragraph__mobile">
                        Photosnap is a platform for photographers and visual
                        storytellers. We make it easy to share photos, tell
                        stories and connect with others.
                    </p>
                    <div className=" flex items-center mt-[1.44rem] cursor-pointer">
                        <button className=" btn__invite">Get an invite</button>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="14"
                            viewBox="0 0 42 14"
                            fill="none">
                            <path d="M0 7H41.864" stroke="white" />
                            <path
                                d="M35.4282 1L41.4282 7L35.4282 13"
                                stroke="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div>
                <img className=" w-full" src="/images/pc.png" alt="pc" />

                <div className=" relative pt-[4.5rem] pl-[2.06rem] pb-[4.5rem] pr-6">
                    <h1 className=" title__mobile--stories">
                        Beautiful stories every time
                    </h1>
                    <p className=" paragraph__mobile--stories">
                        We provide design templates to ensure your stories look
                        terrific. Easily add photos, text, embed maps and media
                        from other networks. Then share your story with
                        everyone.
                    </p>
                    <div className=" flex items-center mt-[1.44rem] cursor-pointer">
                        <button className=" btn__invite--stories">
                            View the stories
                        </button>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="14"
                            viewBox="0 0 42 14"
                            fill="none">
                            <path d="M0 7H41.864" stroke="black" />
                            <path
                                d="M35.4282 1L41.4282 7L35.4282 13"
                                stroke="black"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div>
                <img
                    className=" w-full"
                    src="/images/camera__man.png"
                    alt="camera man"
                />

                <div className=" relative pt-[4.5rem] pl-[2.06rem] pb-[4.5rem] pr-6">
                    <h1 className=" title__mobile--stories">
                        Desgined for everyone
                    </h1>
                    <p className=" paragraph__mobile--stories">
                        Photosnap can help you create stories that resonate with
                        your audience. Our tool is designed for photographers of
                        all levels, brands, businesses you name it.
                    </p>
                    <div className=" flex items-center mt-[1.44rem] cursor-pointer">
                        <button className=" btn__invite--stories">
                            View the stories
                        </button>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="14"
                            viewBox="0 0 42 14"
                            fill="none">
                            <path d="M0 7H41.864" stroke="black" />
                            <path
                                d="M35.4282 1L41.4282 7L35.4282 13"
                                stroke="black"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
