package org.project.libraryProject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Getter
@Entity
@Setter
@ToString
@Table(name="notice")
public class Notice {

    @Id
    private int notice_id;
    private String title;
    private String content;
    private String writer;
    private Date reg_date;
}
