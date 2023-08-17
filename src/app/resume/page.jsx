'use client';
import {useState} from "react";

const Resume = () => {
  const [resumeLink] = useState("https://drive.google.com/file/d/1DQCcBD9dfGE0En9sz-wQUtwZz-Ee-kdr/preview")
  return (
    <div style={{height: '85vh'}}>
      <h1>CS Resume</h1>
      <iframe src={resumeLink} width="100%" height="100%" allow="autoplay"></iframe>
    </div>
  );
};

export default Resume;