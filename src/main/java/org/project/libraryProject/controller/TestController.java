package org.project.libraryProject.controller;

import org.project.libraryProject.entity.User;
import org.project.libraryProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.WebApplicationContext;

import javax.persistence.EntityManager;
import javax.servlet.ServletContext;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Controller
public class TestController {

    private final UserService userService;

    @Autowired
    public TestController(UserService userService) {
        this.userService = userService;
    }


    @Autowired
    private WebApplicationContext context;

    @RequestMapping("/checkBeans")
    public void checkBeans(ServletContext servletContext) {
        ApplicationContext rootContext = context.getParent(); // 루트 컨텍스트 가져오기
        String[] beanNames = rootContext.getBeanDefinitionNames();
        System.out.println("Root Context Beans: " + Arrays.toString(beanNames));
    }

    // 사용자 ID로 사용자 조회
    @RequestMapping("/user")
    public String getUser(@RequestParam String userId, Model model) throws IOException {
        model.addAttribute("users", userService.getUserById(userId));
        /*List<Map<String, Object>>*/
        return "dbTest";
    }
}
