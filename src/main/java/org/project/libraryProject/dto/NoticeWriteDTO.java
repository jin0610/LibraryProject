package org.project.libraryProject.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.project.libraryProject.entity.Notice;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Getter
@Setter
@NoArgsConstructor
public class NoticeWriteDTO {
    private int noticeId;
    private String title;
    private String content;
    private String writer;
    private LocalDateTime regDate;

    public Notice toEntity(){
        return Notice.builder()
                .noticeId(noticeId)
                .title(title)
                .content(content)
                .writer(writer)
                .regDate(regDate)
                .build();
    }
}
