package org.project.libraryProject.controller;

import lombok.extern.slf4j.Slf4j;
import org.project.libraryProject.dto.UserRegisterDTO;
import org.project.libraryProject.repository.UserRepository;
import org.project.libraryProject.service.LoginService;
import org.project.libraryProject.service.impl.LoginServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginServiceImpl.class);

    private final LoginService loginService;
    private final UserRepository userRepository;

    public LoginController(LoginService loginService, UserRepository userRepository) {
        this.loginService = loginService;
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegisterDTO dto) {
        String result = loginService.registerUser(dto);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/check-id")
    public ResponseEntity<Map<String, Boolean>> checkId(@RequestParam String userId) {
        boolean exists = userRepository.existsByUserId(userId);
        return ResponseEntity.ok(Map.of("exists", exists));
    }

    @GetMapping("/check-phone")
    public ResponseEntity<Map<String, Boolean>> checkPhone(@RequestParam String phone) {
        boolean exists = userRepository.existsByPhone(phone);
        return ResponseEntity.ok(Map.of("exists", exists));
    }

    @GetMapping("/check-email")
    public ResponseEntity<Map<String, Boolean>> checkEmail(@RequestParam String email) {
        boolean exists = userRepository.existsByEmail(email);
        return ResponseEntity.ok(Map.of("exists", exists));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserRegisterDTO request) {
        String token = loginService.login(request);
        return ResponseEntity.ok(Collections.singletonMap("token", token));
    }
}
