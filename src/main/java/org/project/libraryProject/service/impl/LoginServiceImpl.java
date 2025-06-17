package org.project.libraryProject.service.impl;

import org.project.libraryProject.config.JwtProvider;
import org.project.libraryProject.config.security.CustomUserDetails;
import org.project.libraryProject.dto.UserRegisterDTO;
import org.project.libraryProject.entity.User;
import org.project.libraryProject.repository.UserRepository;
import org.project.libraryProject.service.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LoginServiceImpl implements LoginService, UserDetailsService {

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

        // 사용자 인증 정보 등록 (SecurityContextHolder)
        CustomUserDetails userDetails = new CustomUserDetails(user);
        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authToken);

        // JWT 토큰 반환
        return jwtProvider.generateToken(user.getUserId());
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserId(username)
                .orElseThrow(() -> new UsernameNotFoundException("존재하지 않는 아이디입니다."));
        return new CustomUserDetails(user);
    }
}
