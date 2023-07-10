import React from 'react';
import {useMutation} from "react-query";
import axios, {post} from "axios";

const PostPage = () => {
    const post = useMutation( async (postData) => {
        try {
            const response = await axios.post("http://localhost:8080/post", postData);

        }catch (error) {
            console.log(error);
        }
    }, {
            onSuccess: (response) => {
                if (response.status === 200) {

                    console.log(response);
                }
            }
    });
}

    const postButtonClickEvent = () => {
        post.mutate({
            variables: {
                name: document.getElementById("name").value,
                content: document.getElementById("content").value
            }
        });
    }
    return (
        <div>
            <h1>Post Page</h1>
            <input type="text" placeholder={"사용자 이름 입력"}/>
            <textarea type="text" placeholder={"내용입력"}/>
            <button onClick={postButtonClickEvent}>저장</button>
        </div>
    );


export default PostPage;