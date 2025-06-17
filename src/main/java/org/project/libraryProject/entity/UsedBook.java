package org.project.libraryProject.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Table(name="used_book")
public class UsedBook {
    // DB 수정
    // used_book 수정 : saler_status 컬럼명 변경 -> sale+status
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id", nullable = false)
    private Integer id;

    @Column(name = "book_name", nullable = false, length = 40)
    private String name;

    @Column(name = "book_writer", nullable = false, length = 40)
    private String writer;

    @Column(name = "book_pubdate")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate pubDate;

    @Column(name = "book_publisher", length = 40)
    private String publisher;

    @Column(name = "book_image", length = 100)
    private String image;   // 중고책 이미지

    @Column(name = "sale_price", nullable = false)
    private Integer salePrice;  // 판매 가격

    @Column(name = "saler_id", nullable = false, length=40)
    private String salerId; // 판매자 ID

    @Column(name = "sale_status", nullable = false)
    private int salerStatus;    // 판매 여부 : 판매됨(0), 판매 중(1)

    @Column(name = "cate_id", nullable = false)
    private Integer cate_id;    // 도서분류 ID



}
