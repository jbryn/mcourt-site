import { useState } from "react";

const usePlayVideo = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive((prevState) => !prevState);
  };

  return { active, toggle };
};

export default usePlayVideo;
