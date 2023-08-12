import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import SuggestionVideoCard from "./SuggestionVideoCard";
import { dataApi } from "../utils/api";
import { Context } from "../context";

const VideoDetails = () => {
  const [videos, setVideos] = useState({});
  const [relatedVideo, setRelatedVideos] = useState();

  const { id } = useParams();
  const { loading, setLoading } = useContext(Context);
  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails() ;
    fetchRelatedVideo() ;
  }, []);

  const fetchVideoDetails = () => {
    setLoading(true);
    dataApi(`video/details/?id=${id}`).then((resp) => {
      setVideos(resp);
      setLoading(false);
    });
  };
  const fetchRelatedVideo = () => {
    setLoading(true);
    dataApi(`video/related-contents/?id=${id}`).then((resp) => {
      setRelatedVideos(resp);
      setLoading(false);
    });
  };
  console.log("video detail =", videos);
  console.log("relatedVideo =", relatedVideo);

  if (loading) {
    return (
      <div className=" h-[calc(100% - 56px)] w-full bg-black  text-white/[0.5] flex justify-center items-center text-center  text-3xl font-bold ">
        {" "}
        Loading.......
      </div>
    );
  }

    return (
      <div className="flex justify-center items-center  flex-row  h-[calc(100% - 56px) bg-black ]">
        {/* flex row lg */}
        <div className="w-full  max-w-[1280px]  flex flex-col lg:flex-row">
          <div className="flex flex-col lg:w-[calc(100%- 350px)] xl:w-[calc(100%- 350px)] px-4 py-3 lg:py-6 overflow-y-auto ">
            <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[400px]   ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0 ">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
                style={{ backgroundColor: "#000000" }}
                playing={true}
              />
            </div>

            <div className="text-white font-bold text-sm mdtext-xl mt-4 line-clamp-2 ">
              {videos?.title}{" "}
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-4">
              {/* channel details */}

              <div className="flex   ">
                <div className="flex items-start ">
                  {/* channel image  */}
                  <div className="flex h-11 w-11  rounded-full overflow-hidden">
                    <img
                      src={videos?.author?.avatar[0]?.url}
                      className="h-full w-full object-cover "
                    />
                  </div>
                  {/* channel name   */}
                  <div className=" flex flex-col ml-3 ">
                    <div className="text-white text-md  font-semibold  flex-items-center ">
                      {" "}
                      {videos?.author?.title}{" "}
                      {videos?.author?.badges[0]?.text == "Verified" && (
                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px]  ml-1" />
                      )}{" "}
                    </div>
                  </div>

                  {/* subscriber */}

                  <div className="text-white-[0.7] text-sm  ">
                    {videos?.author?.stats?.subscribersText}
                  </div>
                </div>
              </div>

              {/* likes and views  */}

              <div className="flex text-white  mt-4 md:mt-0  ">
                <div className="flex items-center justify-center h-11 px-6  rounded-3xl bg-white/[0.15] ">
                  <AiOutlineLike className="text-xl  text-white mr-2" />
                  <span>
                    {`${abbreviateNumber(videos?.stats?.likes, 2)} Likes`}
                  </span>
                </div>
                <div className="flex items-center justify-center h-11 px-6  rounded-3xl bg-white/[0.15]  ml-4">
                  <AiOutlineLike className="text-xl  text-white mr-2" />
                  <span>
                    {`${abbreviateNumber(videos?.stats?.views, 2)} Views`}
                  </span>
                </div>
              </div>
            </div>
          </div>

            {/* Suggestion videos  relatedVideo */}

          <div className="flex flex-col px-4 overflow-y-auto lg:w-[350px] xl:w-[400px] ">
              {
                relatedVideo && relatedVideo?.contents.map((val , id )=>{
                 if(val.type !== 'video') { return false}
                  return ( < SuggestionVideoCard 
                            key={id}
                            video={val?.video}
                          />)
                })
              }
          </div>

        </div>
      </div>
    );
};

export default VideoDetails;
