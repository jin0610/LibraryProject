package org.project.libraryProject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

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


