import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses(
        (prev) => prev.filter((likedCourseId) => likedCourseId !== course.id),
        toast.warning("Like Removed")
      );
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  };

  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="" />
        <button
          onClick={clickHandler}
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center"
        >
          {likedCourses.includes(course.id) ? (
            <FcLike fontSize="1.75rem" />
          ) : (
            <FcLikePlaceholder fontSize="1.75rem" />
          )}
        </button>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className=" text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
