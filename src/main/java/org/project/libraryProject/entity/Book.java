package org.project.libraryProject.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id", nullable = false)
    private Integer id;

    @Column(name = "book_name", nullable = false, length = 40)
    private String name;

    @Column(name = "book_writer", nullable = false, length = 40)
    private String writer;

    @Column(name = "book_pubdate", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate pubDate;

    @Column(name = "book_publisher", nullable = false, length = 40)
    private String publisher;

    @Column(name = "book_image", length = 100)
    private String image;

    @Column(name = "status")
    private Integer status;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cate_id", nullable = false)
    private Category category;

    @Column(name = "reg_date", nullable = false, updatable = false)
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime regDate;

}
