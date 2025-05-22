package org.project.libraryProject.service.impl;

import org.project.libraryProject.config.JwtProvider;
import org.project.libraryProject.dto.UserRegisterDTO;
import org.project.libraryProject.entity.User;
import org.project.libraryProject.repository.UserRepository;
import org.project.libraryProject.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    private static final Logger logger = LoggerFactory.getLogger(LoginServiceImpl.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtProvider;

    public LoginServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String registerUser(UserRegisterDTO dto) {
        try {
            String encPwd = passwordEncoder.encode(dto.getUserPwd());
            User user = dto.toEntity(encPwd);
            userRepository.save(user);
            return "SUCCESS";
        } catch (Exception e) {
            logger.debug("회원가입 실패: " + e.getMessage());
            e.printStackTrace(); //
            return "FAIL";
        }
    }

    @Override
    public String login(UserRegisterDTO req) {
        User user = userRepository.findByUserId(req.getUserId())
                .orElseThrow(() -> new RuntimeException("존재하지 않는 아이디입니다."));

        if (!passwordEncoder.matches(req.getUserPwd(), user.getUserPwd())) {
            throw new RuntimeException("비밀번호가 일치하지 않습니다.");
        }

        return jwtProvider.generateToken(user.getUserId());
    }
}
