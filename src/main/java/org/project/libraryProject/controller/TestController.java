package org.project.libraryProject.controller;

import org.project.libraryProject.entity.User;
import org.project.libraryProject.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.List;

@Controller
public class TestController {

    private final UserService userService;

    public TestController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/user")
    public String getUser(Model model) throws IOException {
        List<User> users = userService.getAllUsers();

        System.out.println("Users in Controller: " + users);
        model.addAttribute("users", users);

        return "dbTest";
    }
}
