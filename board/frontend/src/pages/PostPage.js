import React, {useState} from 'react';
import {useMutation, useQuery} from "react-query";
import axios, {post} from "axios";

const PostPage = () => {
    const [ postDatas, setPostDatas ] = useState([]);
    const post = useMutation(async (postData) => {
        try {
            const response = await axios.post("http://localhost:8080/post", postData);
            return response
        } catch (error) {
            console.log(error);
        }
    }, {
        onSuccess: (response) => {
            if (response.status === 200) {
                console.log(response);
            }
        }
    });

    const get = useQuery(["getPosts"], async () => {
        try {
            const response = await axios.get("http://localhost:8080/posts");
            return response
        } catch (error) {
            console.log(error);
        }
    }, {
        onSuccess: (response) => {
            if (response.status === 200) {
                setPostDatas([...response.data])
                console.log(response);
            }
        }
    })


    const postButtonClickEvent = () => {
        post.mutate({
            title: document.getElementById("name").value,
            content: document.getElementById("content").value
        });
    }
    return (
        <div>
            <h1>Post Page</h1>
            <input id={"name"} type="text" placeholder={"사용자 이름 입력"}/>
            <textarea id={"content"} type="text" placeholder={"내용입력"}/>
            <button onClick={postButtonClickEvent}>저장</button>
            <button>전체 포스트</button>
            {
                postDatas.length === 0 ? <></> :
                postDatas.map((data, index) => {
                    return (
                        <div key={index}>
                            <h2>{data.title}</h2>
                            <p>{data.content}</p>
                        </div>
                    )})
            }
        </div>
    );
}

export default PostPage;