package com.example.board.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;

@Entity
@Table(name = "posts_tb")
@Builder
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;

    public Post() {

    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }
}
