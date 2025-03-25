package org.project.libraryProject.service.impl;

import org.project.libraryProject.entity.User;
import org.project.libraryProject.repository.UserRepository;
import org.project.libraryProject.service.LoginService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public LoginServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String registerUser(User user) {
        try {

            String encPwd = passwordEncoder.encode(user.getUserPwd());
            user = User.builder()
                    .userId(user.getUserId())
                    .userName(user.getUserName())
                    .userPwd(encPwd)
                    .birthdate(user.getBirthdate())
                    .phone(user.getPhone())
                    .email(user.getEmail())
                    .gender(user.getGender())
                    .address(user.getAddress())
                    .notiStatus(user.getNotiStatus())
                    .userLevel("USER")
                    .build();

            userRepository.save(user);
            return "SUCCESS";

        } catch (Exception e) {

            System.err.println("회원가입 실패 : " + e.getMessage());
            return "FAIL";

        }
    }
}
