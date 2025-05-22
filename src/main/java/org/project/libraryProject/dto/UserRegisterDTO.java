package org.project.libraryProject.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.project.libraryProject.entity.User;

import java.time.LocalDate;

@Data
@Getter
@Setter
@NoArgsConstructor
public class UserRegisterDTO {
    private String userId;
    private String userPwd;
    private String userName;
    private String birthdate;
    private String phone;
    private String email;
    private String address;
    private String gender;
    private String notiStatus;

    public User toEntity(String encodedPwd) {
        return User.builder()
                .userId(userId)
                .userPwd(encodedPwd)
                .userName(userName)
                .birthdate(LocalDate.parse(birthdate))
                .phone(phone)
                .email(email)
                .address(address)
                .gender("F".equalsIgnoreCase(gender) ? 1 : 0)
                .notiStatus("N".equalsIgnoreCase(notiStatus) ? 0 : 1)
                .userLevel(0)
                .build();
    }
}

