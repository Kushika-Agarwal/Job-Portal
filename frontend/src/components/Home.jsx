import React, { useEffect } from "react";
import Navbar from "./shared/Nabar";
import HeroSection from "./HeroSection";
import Footer from "./shared/Footer";
import LatestJob from "./LatestJob";
import CategoryCarousel from "./CategoryCarousel";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useGetAllJobs();
  useEffect(() => {
    if (user?.role == "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJob />
      <Footer />
    </div>
  );
};

export default Home;
