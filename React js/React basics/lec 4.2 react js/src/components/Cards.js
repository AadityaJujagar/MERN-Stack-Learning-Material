import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      // returns all courses each
      Object.values(courses).forEach((courseType) => {
        courseType.forEach((course) => {
          allCourses.push(course);
        });
      });
      console.log(allCourses);
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {/* map through the array of objects and create a card for every array element*/}
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
            course={course}
          />
        );
      })}
    </div>
  );
}

export default Cards;
