package org.project.libraryProject.controller;

import lombok.extern.slf4j.Slf4j;
import org.project.libraryProject.service.LoginService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestController
@RequestMapping("/auth")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

//    @GetMapping("/login")
//    public String loginForm() {
//        return "login";
//    }

    @PostMapping("/register")
    public String registerForm(HttpServletRequest request) {
        String userId = request.getParameter("userId");
        String userPwd = request.getParameter("userPwd");
        String userName = request.getParameter("userName");
        String phone = request.getParameter("phone");
        String birthdate = request.getParameter("birthdate");
        String gender = request.getParameter("gender");
        String notiStatus = request.getParameter("notiStatus");

        return "success";
//        return loginService.registerUser(user);
    }

//    @GetMapping
//    public
}
