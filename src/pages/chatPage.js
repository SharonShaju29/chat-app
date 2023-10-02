import "./css/chatPage.css";
import React from 'react';
import { MoreOutlined } from "@ant-design/icons";
import profile from "../assets/profile.jpg";
import { Routes, Route, Navigate } from "react-router-dom";
import ChatHistory from "../components/chat/chatHistory";
import ChatSection from "../components/chat/chatSection";
import ChatFiller from "../components/chat/chatFiller";
import { authToken } from "../utils/auth";
import { useEffect } from "react";
import { Dropdown, Space } from 'antd';


const items = [
{
  label: <a href="https://www.antgroup.com">Profile</a>,
  key: '0',
},
{
  label: <a href="https://www.aliyun.com">Log out</a>,
  key: '1',
}]

function ChatPage() {
  useEffect(()=>{
    const authToken = window.localStorage.getItem('userLog') ?? ''
  })

  return (
    <div>
      <div className="header-bar-wrapper">
        <img src={profile} className="image-profile" alt="" />
        <Dropdown menu={{items}}>
        <MoreOutlined className="icon-more" />
        </Dropdown>
      </div>
      <div>
        <Routes>
          <Route path="/messages/*" element={<ChatHistory />} />
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/messages/chat" element={<ChatSection />} />
        </Routes>
      </div>
    </div>
  );
  // else {
  //   return <Navigate to={"/user/login"}/>
  // }
}

export default ChatPage;
