package org.project.libraryProject.config;

import org.project.libraryProject.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtProvider jwtProvider;
    private final LoginService loginService;

    @Autowired
    public JwtAuthenticationFilter(JwtProvider jwtProvider, LoginService loginService) {
        this.jwtProvider = jwtProvider;
        this.loginService = loginService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        // 1. 요청 헤더에서 토큰 추출
        String token = jwtProvider.resolveToken(request);

        // 2. 토큰이 유효하면 인증 처리
        if (token != null && jwtProvider.validateToken(token)) {
            String username = jwtProvider.getUsernameFromToken(token);

            // 3. 유저 정보 가져와서 인증 객체 생성
            UserDetails userDetails = loginService.loadUserByUsername(username);
            //사용자 인증 정보(ID, PW 등)와 권한(Role)을 담기 위한 Spring Security의 인증 토큰 클래스
            UsernamePasswordAuthenticationToken auth =
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

            // 4. SecurityContext에 인증 객체 저장
            SecurityContextHolder.getContext().setAuthentication(auth);
        }

        // 5. 다음 필터로 이동
        filterChain.doFilter(request, response);
    }
}