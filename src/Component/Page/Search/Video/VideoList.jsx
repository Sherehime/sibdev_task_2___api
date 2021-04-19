import React, { useState } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import style from "./video.module.css";

const VideoList = (props) => {
  const [videoId, setVideoId] = useState(null);

  const videos = props.videos.map((video) => (
    <VideoItem
      key={video.index}
      snippet={video.snippet}
      videoId={video.id.videoId}
      onClick={() => {
        setVideoId(video.id.videoId);
      }}
    />
  ));

  return (
    <div className={style.video}>
      <Switch>
        <Route
          exact
          path="/page/search"
          render={() => (
            <Redirect to={`/page/search/result/${props.textRequest}`} />
          )}
        />
        <Route
          path="/page/search/result/:textRequest?"
          render={() => (
            <VideoGrid
              textRequest={props.textRequest}
              videos={videos}
              totalCount={props.totalCount}
            />
          )}
        />
        <Route
          path="/page/search/watch/:videoId?"
          render={() => <Video videoId={videoId} />}
        />
      </Switch>
    </div>
  );
};

const VideoGrid = ({ videos, textRequest, totalCount }) => {
  const [listMode, setListMode] = useState(false);

  return (
    <div className={style.video_wrapper}>
      <div className={style.video_request}>
        <div className={style.video_request_item}>
          {`Видео по запросу "${textRequest}"`}
          <span className={style.video_request_count}>{`${totalCount}`}</span>
        </div>
        <div className={style.video_request_item}>
          <div
            onClick={() => {
              setListMode(false);
            }}
            className={style.video_request_icon}
          >
            <AppstoreOutlined />
          </div>
          <div
            onClick={() => {
              setListMode(true);
            }}
            className={style.video_request_icon}
          >
            <BarsOutlined />
          </div>
        </div>
      </div>
      <div className= {listMode ? "style.video_inner_list": "style.video_inner_grid"}>
        {videos}
      </div>
    </div>
  );
};

const VideoItem = ({ snippet, onClick, videoId }) => {
  return (
    <NavLink to={`/page/search/watch/${videoId}`}>
      <div className={style.video_item} onClick={onClick}>
        <img className={style.video_img} src={snippet.thumbnails.high.url} />
        <div className={style.video_title}>{snippet.title}</div>
        <div className={style.video_chanelTitle}>{snippet.channelTitle}</div>
      </div>
    </NavLink>
  );
};

const Video = ({ videoId }) => {
  return (
    <div className="video_play">
      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoList;
