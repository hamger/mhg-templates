import React, {useState, useEffect} from "react";
import Loading from "@/components/loading/loading.js";
import { useModel } from "@/store.js";

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [state, dispatchers] = useModel('home')
  const [state2, dispatchers2] = useModel('report')
  const { count } = state
  const { addCount, subCount } = dispatchers
  const { data } = state2
  const { getReport } = dispatchers2

  useEffect(() => {
    getReport()
  }, [dispatchers2]);

  const delayAdd = function delayAdd() {
    setLoading(true);
    setTimeout(() => {
      addCount({count: 3})
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => delayAdd()}>一秒后加 3</button>
      <button onClick={() => subCount({count: 2})}>减 2</button>
      <Loading isShow={loading}></Loading>
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  );
};

export default Home;