"use client";
import { useState } from "react";
import Image from "next/image";

export default function BootcampPopup() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {/* Button */}
            <button
                onClick={handleClick}
                className="fixed md:bottom-10 bottom-4 text-xs md:text-base right-4 md:right-10 z-[100] px-4 py-3 rounded-3xl bg-[#003668] text-white cursor-pointer"
            >
                Bootcamp Registration
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] px-4 flex items-center justify-center bg-black/50">
                    <div className="bg-white flex md:flex-row flex-col rounded-xl p-4 md:w-[80vw] w-full h-[70vh] overflow-y-auto !relative shadow-lg">
                        
                        {/* Close Button */}
                        <button
                            onClick={handleClick}
                            className="absolute top-3 right-3 aspect-square h-10 w-10 rounded-full bg-white text-gray-600 hover:text-black text-xl font-bold z-10"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        {/* Modal Content */}
                        <div className="flex md:flex-row flex-col gap-6 w-full">
                            {/* Image Section */}
                            <div className="md:w-[40%] w-full h-[250px] md:h-auto relative rounded-xl overflow-hidden">
                                <Image
                                    src="/images/bootcamp.jpeg"
                                    alt="Trailblazers Bootcamp"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="md:w-[60%] w-full">
                                <h2 className="text-2xl font-bold text-[#003668] mb-4">Trailblazers Bootcamp 2.0</h2>
                                
                                <p className="text-gray-700 mb-3">
                                    The Trailblazers Bootcamp 2.0 is a <strong>4-week practical training program</strong> designed to introduce young professionals—especially lawyers, students, and new wigs—to the fast-growing world of data protection and privacy.
                                </p>

                                <h3 className="font-semibold text-gray-800 mb-2">You&apos;ll learn how to:</h3>
                                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                                    <li>Understand privacy laws like the NDPR and how they affect real businesses</li>
                                    <li>Get real insight into data protection policies, breach responses, and consent management</li>
                                    <li>Explore how AI, tech, and global regulations impact data in today&apos;s world</li>
                                    <li>Build skills for careers in this evolving field</li>
                                </ul>

                                <p className="text-gray-700 mb-4">
                                    It&apos;s a mix of beginner-friendly classes, real-world tasks, and expert-led sessions so you leave with actual knowledge and confidence—not just theory.
                                </p>

                                <p className="text-gray-700 mb-6">
                                    By the end of the Bootcamp, you&apos;ll understand why <strong>“data is the new oil”</strong> and how to protect it.
                                </p>

                                <a
                                    href="https://bit.ly/TmlcDpb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#003668] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#005292] transition"
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
