package org.project.libraryProject.service.impl;

import org.project.libraryProject.dto.UserRegisterDTO;
import org.project.libraryProject.entity.User;
import org.project.libraryProject.repository.UserRepository;
import org.project.libraryProject.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    private static final Logger logger = LoggerFactory.getLogger(LoginServiceImpl.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public LoginServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String registerUser(UserRegisterDTO dto) {
        try {
            logger.debug("User ID: " + dto.getUserId());
            String encPwd = passwordEncoder.encode(dto.getUserPwd());
            User user = dto.toEntity(encPwd);
            logger.debug("User ID in Entity: " + user.getUserId());
            userRepository.save(user);
            return "SUCCESS";
        } catch (Exception e) {
            logger.debug("회원가입 실패: " + e.getMessage());
            e.printStackTrace(); //
            return "FAIL";
        }
    }
}
