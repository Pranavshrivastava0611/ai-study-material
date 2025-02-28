"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import CourseCard from "./CourseCard";

function CourseList() {
    const { user } = useUser();
    const [courseList,setCourseList] = useState([]);

    const getCourseList = async () => {
        try {
            if (!user?.primaryEmailAddress?.emailAddress) {
                console.warn("User email not available yet");
                return;
            }

            const result = await axios.post("/api/courses", {
                createdBy: user.primaryEmailAddress.emailAddress,
            });

            console.log("Course List:", result.data,result);
            setCourseList(result.data.result);
        } catch (error) {
            console.error("Error fetching courses:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        if (user) {
            getCourseList();
        }
    }, [user]);

    return (
        <>
        <div className="mt-10">
            <h2 className="font-bold text-2xl">Your Study Material</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
            {courseList.map((course,index) => (
                <>
                    <CourseCard course={course} key={index} />

                </>
            ))}
        </div>
        
        </>
    )
}

export default CourseList;
