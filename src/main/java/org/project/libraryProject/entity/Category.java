package org.project.libraryProject.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cate_id", nullable = false)
    private Integer id;

    @Column(name = "cate_name", nullable = false, length = 100)
    private String name;

    @Column(name = "cate_desc", nullable = false)
    private String desc;

}
