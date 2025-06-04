package org.project.libraryProject.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Table(name="notice")
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notice_id", nullable = false)
    private int noticeId;

    @Column(name = "title", nullable = false, length = 40)
    private String title;

    @Column(name = "content", nullable = false, length = 1000)
    private String content;

    @Column(name = "writer", nullable = false, length = 20)
    private String writer;

    @Column(name="reg_date", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date regDate;

    @Builder
    public Notice(String title, String content, String writer, Date regDate){
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.regDate = regDate;
    }
}
