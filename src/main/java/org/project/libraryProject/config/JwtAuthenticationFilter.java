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

        // 1. Extract token from request header
        String token = jwtProvider.resolveToken(request);

        // 2. Validate token and authenticate
        if (token != null && jwtProvider.validateToken(token)) {
            String username = jwtProvider.getUsernameFromToken(token);

            // 3. Get user info and create auth object
            UserDetails userDetails = loginService.loadUserByUsername(username);
            // Auth token class to hold user credentials (ID, PW) and roles in Spring Security
            UsernamePasswordAuthenticationToken auth =
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

            // 4. Store auth in SecurityContext
            SecurityContextHolder.getContext().setAuthentication(auth);
        }

        // 5. Proceed to next filter
        filterChain.doFilter(request, response);
    }
}