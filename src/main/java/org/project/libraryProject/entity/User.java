package org.project.libraryProject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Getter
@Entity
@Setter
@ToString
@Table(name = "user")
public class User {

    @Id
    private String userId;

    private String userName;
}


