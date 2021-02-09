import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "@/components/loading/loading.js";

const Home = () => {
  const [loading, setLoading] = useState(false)
  const {count} = useSelector(state => state.home);
  const dispatch = useDispatch();
  const delayAdd = function delayAdd() {
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'ADD_COUNT' });
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div>{count}</div>
      <Loading isShow={loading}></Loading>
      <button onClick={() => delayAdd()}>一秒后 +1</button>
      <button onClick={() => dispatch({type: 'SUB_COUNT'})}>-1</button>
    </div>
  );
};

export default Home;