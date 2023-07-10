package com.example.board.api.controller;

import com.example.board.api.dto.PostRequestDto;
import com.example.board.entity.Post;
import com.example.board.service.PostService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/post")
    public long createPost(@RequestBody PostRequestDto postRequestDto) {
        return postService.save(postRequestDto);
    }
}
