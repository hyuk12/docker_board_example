package com.example.board.service;

import com.example.board.api.dto.PostRequestDto;
import com.example.board.entity.Post;
import com.example.board.repository.PostRepository;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public long save(PostRequestDto postRequestDto) {

        Post post = Post.builder()
                .title(postRequestDto.getTitle())
                .content(postRequestDto.getContent())
                .build();

        postRepository.save(post);
        return post.getId();
    }
}
