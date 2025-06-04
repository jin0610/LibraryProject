package org.project.libraryProject.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.project.libraryProject.entity.Notice;

import java.util.Date;

@Data
@Getter
@Setter
@NoArgsConstructor
public class NoticeWriteDTO {
    private String title;
    private String content;
    private String writer;
    private Date regDate;

    public Notice toEntity(){
        return Notice.builder()
                .title(title)
                .content(content)
                .writer(writer)
                .regDate(regDate)
                .build();
    }
}
