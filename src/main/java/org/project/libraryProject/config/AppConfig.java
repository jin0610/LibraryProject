package org.project.libraryProject.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@Configuration
@ComponentScan(basePackages = "org.project.libraryProject")
@EnableJpaRepositories(basePackages = "org.project.libraryProject.repository")
public class AppConfig {

}