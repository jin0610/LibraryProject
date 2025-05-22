package org.project.libraryProject.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Entity
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Table(name = "user")
public class User {

    @Id
    @Column(name = "user_id", nullable = false, length = 20)
    private String userId;

    @Column(name = "user_name", nullable = false, length = 20)
    private String userName;

    @Column(name = "user_pwd", nullable = false, length = 150)
    private String userPwd;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthdate;

    @Column(nullable = false, length = 20)
    private String phone;

    @Column(length = 50)
    private String email;

    @Column(nullable = false, length = 1)
    private int gender; // 0 = M, 1 = F

    @Column(length = 200)
    private String address;

    @Column(name = "noti_status", nullable = false, length = 1)
    private int notiStatus;

    @Column(name = "user_level", nullable = false, length = 1)
    private int userLevel;

    @CreatedDate
    @Column(name = "join_date", nullable = false, updatable = false)
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime joinDate;

    @Builder
    public User(String userId, String userName, String userPwd, LocalDate birthdate, String phone, String email, int gender, String address, int notiStatus, int userLevel) {
        this.userId = userId;
        this.userName = userName;
        this.userPwd = userPwd;
        this.birthdate = birthdate;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.address = address;
        this.notiStatus = notiStatus;
        this.userLevel = userLevel;
    }
}


