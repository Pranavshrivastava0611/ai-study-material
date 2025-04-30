"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { RefreshCcw } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { CourseCountContext } from "../../_context/CourseCountContext";
import CourseCard from "./CourseCard";

function CourseList() {
    const { user } = useUser();
    const [courseList,setCourseList] = useState([]);
    const [loading,setLoading] = useState(false);
    const {totalCourses,setTotalCourses} = useContext(CourseCountContext);

    const getCourseList = async () => {
        setLoading(true);
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
            setTotalCourses(result.data.result?.length);
        } catch (error) {
            console.error("Error fetching courses:", error.response?.data || error.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (user) {
            getCourseList();
        }
    }, [user]);

    return (
        <>
        <div className="mt-10 flex justify-between">
            <h2 className="font-bold text-2xl">Your Study Material</h2>
            <Button onClick={getCourseList} className="border-primary  hover:bg-blue-400 "><RefreshCcw className={`${loading && 'animate-spin'}`}/> Refresh</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
            { !loading ? courseList.map((course,index) => (
                    <CourseCard course={course} key={course.id || course.name} />
            )) : 
            [1,2,3,4,5,6].map((_,index)=>(
                <>
                <div className="h-56 w-full bg-slate-200 rounded-lg animate-pulse" key={index + 4}>
                </div>
                </>
            ))
            }
        </div>
        </>
    )
}

export default CourseList;
