package org.project.libraryProject.dto;

import lombok.Builder;
import lombok.Data;
import org.project.libraryProject.entity.User;

@Data
@Builder
public class UserResponseDTO {
    private String userId;
    private String userName;
    private String phone;
    private String email;
    private String gender;
    private String birthdate;
    private String notiStatus;
    private String joinDate;

    public static UserResponseDTO fromEntity(User user) {
        return UserResponseDTO.builder()
                .userId(user.getUserId())
                .userName(user.getUserName())
                .phone(user.getPhone())
                .email(user.getEmail())
                .gender(user.getGender() == 1 ? "F" : "M")
                .birthdate(user.getBirthdate().toString())
                .notiStatus(user.getNotiStatus() == 1 ? "Y" : "N")
                .joinDate(user.getJoinDate().toString())
                .build();
    }
}
