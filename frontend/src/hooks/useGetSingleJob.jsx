import { setAllJobs, setSingleJob } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetSingleJob = (jobId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, []);
  return <div></div>;
};

export default useGetSingleJob;
