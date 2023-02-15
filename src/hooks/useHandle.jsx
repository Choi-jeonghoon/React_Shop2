import { useNavigate } from "react-router-dom";

const useHandle = () => {
  const navigate = useNavigate();

  const onClickDetailPage = (path) => () => {
    navigate(path);
  };

  return { onClickDetailPage };
};

export default useHandle;
