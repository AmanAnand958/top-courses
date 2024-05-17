import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Card = (props) => {
    let course = props.course; // Destructure the course from props
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");
        } else {
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev, course.id]);
            }
            
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="w-[300px] bg-cyan-500 rounded-md overflow-hidden relative">
            <div className='relative'>
                <img src={course.image.url} alt={course.title} className="w-full h-[200px] object-cover" />
                <div className="absolute right-2 bottom-3">
                    <button onClick={clickHandler} className="w-[40px] h-[40px] bg-white rounded-full grid place-items-center">
                        {!likedCourses.includes(course.id)?(<FcLikePlaceholder fontSize="1.75rem"/>) : (<FcLike fontSize="1.75rem" />)}
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length>100?(course.description.substr(0,100))+'...':(course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;
