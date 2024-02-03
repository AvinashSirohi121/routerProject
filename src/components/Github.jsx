import axios from "axios";
import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const getGithubData = async () => {
    setLoading(true);
    await axios(`https://api.github.com/users/avinashsirohi121`)
      .then((res) => {
        console.log("Resposne =>", res);
        setData(res.data);
      })

      .catch((e) => console.log("Error  =>", e))
      .finaly(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getGithubData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen flex w-[70%] mx-auto gap-[20px] mt-[50px] font-mono ">
          <div className="w-[40%]">
            <img
              className="rounded-full sm:mt-[50px] xl:mt-[0px]"
              src={data.avatar_url}
            />
          </div>
          <div className=" xl:mt-[60px] xl:leading-9 w-[60%] pl-[3rem] pt-[3rem] leading-9">
            <div className="xl:text-5xl text-2xl text-gray-800 font-[900] ">
              Name : {data.name}
            </div>
            <div className="xl:text-3xl text-xl text-gray-800 font-semibold">
              UserName : {data.login}
            </div>
            <div className="xl:text-3xl text-xl text-gray-800 font-semibold">
              Followers : {data.followers}
            </div>
            <div className="xl:text-3xl text-xl text-gray-800 font-semibold">
              Company : {data.company}, {data.location}
            </div>
            <div className="xl:text-3xl text-xl text-gray-800 font-semibold">
              Repositeries : {data.public_repos}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Github;
