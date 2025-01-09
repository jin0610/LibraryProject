package org.project.libraryProject.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;


@Configuration
//@ImportResource("classpath:/WEB-INF/spring/appServlet/servlet-context.xml")
@ComponentScan(basePackages = "org.project.libraryProject")
@EnableJpaRepositories(
        basePackages = "org.project.libraryProject.repository"
//        ,
//        entityManagerFactoryRef = "entityManagerFactory",
//        transactionManagerRef = "transactionManager"
        )
public class AppConfig {
}