package org.project.libraryProject.config;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class CheckBean {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(WebConfig.class);

        WebConfig webConfig = context.getBean(WebConfig.class);
        System.out.println("✅ WebConfig : " + webConfig);
    }
}