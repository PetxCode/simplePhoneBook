import React, { useState, useEffect } from "react";
import "./HomeScreen.css";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import img from "./img/1.png";
import img1 from "./img/2.png";
import img2 from "./img/3.png";
import avatar from "./img/dev.gif";
import moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";
import ContentLoader, { Instagram } from "react-content-loader";

const HomeScreen = () => {
  const [toggle, setToggle] = useState(false);
  const [myImage, setMyImage] = useState(avatar);
  const [text, setText] = useState("");

  const [dommyData, setDommyData] = useState([
    {
      id: 1,
      title: "I love coding in ReactJS",
      time: "2sec ago",
      image: img,
      icon: "i",
      save: false,
    },
    {
      id: 2,
      title: "I love coding in NodeJS",
      time: "6sec ago",
      image: img1,
      icon: "i",
      save: false,
    },
    {
      id: 3,
      title: "I love coding in MongoDB",
      time: "9sec ago",
      image: img2,
      icon: "i",
      save: false,
    },
  ]);

  const onToggle = (id) => {
    // setToggle(!toggle);
    setDommyData({ ...dommyData, save: true });
    const res = dommyData.map((el) => el.id === id);
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const result = URL.createObjectURL(file);
    console.log(result);
    setMyImage(result);
  };

  const addItem = () => {
    const items = {
      id: dommyData && dommyData.length + 1,
      title: text,
      image: myImage,
      time: Date.now(),
      icon: text.substring(0, 2),
      save: toggle,
    };

    setDommyData([...dommyData, items]);
    setMyImage(avatar);
    setText("");
  };

  const deleteItem = (id) => {
    const removeItem = dommyData.filter((el) => el.id !== id);
    setDommyData(removeItem);
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     setDommyData([
  //       {
  //         id: 1,
  //         title: "I love coding in ReactJS",
  //         time: "2sec ago",
  //         image: img,
  //         icon: "i",
  //         save: false,
  //       },
  //       {
  //         id: 2,
  //         title: "I love coding in NodeJS",
  //         time: "6sec ago",
  //         image: img1,
  //         icon: "i",
  //         save: false,
  //       },
  //       {
  //         id: 3,
  //         title: "I love coding in MongoDB",
  //         time: "9sec ago",
  //         image: img2,
  //         icon: "i",
  //         save: false,
  //       },
  //     ]);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    const saveData = JSON.parse(window.localStorage.getItem("store"));
    setDommyData(saveData);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("store", JSON.stringify(dommyData));
  }, [dommyData]);

  return (
    <>
      <div className="input__container">
        <div className="input__wrapper">
          <div className="input__inputs">
            <input
              type="file"
              className="input__input"
              onChange={uploadImage}
            />
            <input
              type="text"
              placeholder="Enter the Title here"
              className="input__input"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button
              className="input__button"
              onClick={() => {
                console.log(text);
                addItem();
              }}
            >
              Add to DB
            </button>
          </div>
          <img className="input__display" src={myImage} />
        </div>
      </div>
      {!dommyData && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "30px",
          }}
        >
          {/* <CircularProgress color="secondary" /> */}
          <Instagram
            speed={2}
            foregroundColor="white"
            backgroundColor="gray"
            width={600}
            height={400}
            viewBox="10 10 500 500"
          />

          <Instagram
            speed={2}
            foregroundColor="white"
            backgroundColor="gray"
            width={600}
            height={400}
            viewBox="10 10 500 500"
          />

          <Instagram
            speed={2}
            foregroundColor="white"
            backgroundColor="gray"
            width={600}
            height={400}
            viewBox="10 10 500 500"
          />
        </div>
      )}
      <div className="container">
        {dommyData &&
          dommyData.map((props) => (
            <div className="container__body" key={props.id}>
              <div className="container__icon">
                <div className="container__icon1">{props.icon}</div>
                <div className="container__icon1">
                  <div className="container__iconsDelete">
                    {" "}
                    <AiFillDelete
                      onClick={() => {
                        deleteItem(props.id);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="container__title">{props.title}</div>
              <div className="container__time">
                {moment(props.time).fromNow()}
              </div>
              <img className="container__img" src={props.image} />
              <div className="container__icons">
                <BiCommentDetail />

                {toggle ? (
                  <BsFillBookmarkFill onClick={onToggle} />
                ) : (
                  <BsBookmark
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      onToggle(props.id);
                    }}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomeScreen;
