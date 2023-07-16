import { useState } from "react";
import { Navigate } from "react-router-dom";
import Logo from "../assets/CHLogo.png";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const CreateJob = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [locationType, setLocationType] = useState("");
  const [navigate, setNavigate] = useState(false);
  const [Added, setAdded] = useState(false);

  const handleAddJob = async (e) => {
    e.preventDefault();
    try {
      const body = { company, position, workLocation, locationType };
      await fetch("https://careerhelper.onrender.com/addJobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "include",
      });
      setAdded(true);
      setTimeout(() => {
        setNavigate(true);
      }, 1000);
    } catch (err) {
      console.error(err.message);
    }
  };

  if (navigate) {
    return <Navigate to="/jobs" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-[83vh] bg-gray-100"
    >
      {Added &&
        (toast(" Job Added Successfully", {
          position: "top-center",
          autoClose: 1000,
        }),
        (<ToastContainer />))}
      <Card
        color="white"
        shadow={true}
        className="p-10 flex justify-center items-center"
      >
        <img src={Logo} alt="Logo" className="w-32" />

        <Typography variant="h4" color="blue-gray">
          Add a new job
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Fill in the details of the job you want to add
        </Typography>
        <form
          onSubmit={handleAddJob}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              size="lg"
              label="Company"
            />
            <Input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              size="lg"
              label="Position"
            />
            <Input
              value={workLocation}
              onChange={(e) => setWorkLocation(e.target.value)}
              size="lg"
              label="workLocation"
            />
            <Input
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
              size="lg"
              label="locationType"
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Add job
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};

export default CreateJob;
