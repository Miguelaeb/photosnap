import React from "react";

export default function Main() {
    return (
        <div>
            <div>
                <img src="/images/Bitmap.png" alt="" />

                <div className=" bg-black pt-[4.5rem] pl-[2.06rem] pb-[4.5rem] pr-6">
                    <h1 className=" title__mobile">
                        Create and share your photo stories.
                    </h1>
                    <p className=" paragraph__mobile">
                        Photosnap is a platform for photographers and visual
                        storytellers. We make it easy to share photos, tell
                        stories and connect with others.
                    </p>
                    <div className=" flex items-center mt-[1.44rem]">
                        <button className=" invite__button">
                            Get an invite
                        </button>

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
        </div>
    );
}
