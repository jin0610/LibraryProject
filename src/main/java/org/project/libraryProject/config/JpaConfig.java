package org.project.libraryProject.config;

import com.zaxxer.hikari.HikariConfig;
//import jakarta.activation.DataSource;
import jakarta.activation.DataSource;
import org.hibernate.cfg.Environment;


import jakarta.persistence.EntityManagerFactory;  // javax에서 jakarta로 변경

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.Properties;

//import javax.sql.DataSource;
//import java.util.Properties;

//@Configuration
//@EnableJpaRepositories(basePackages = "org.project.libraryProject.repository")
//@EntityScan(basePackages = "org.project.libraryProject.Entity")
@Configuration
@EnableTransactionManagement
public class JpaConfig {

    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://mysql-library.duckdns.org:3306/library?useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=UTC");
        config.setUsername("user");
        config.setPassword("1234");
        config.setDriverClassName("com.mysql.cj.jdbc.Driver");
//        return new DataSource(config);
        return null;
    }

    // EntityManagerFactory
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) {
        LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
//        factoryBean.setDataSource(dataSource);
        factoryBean.setPackagesToScan("org.project.libraryProject.entity");

        // Hibernate JPA Vendor
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setShowSql(true);
        vendorAdapter.setGenerateDdl(true);
        vendorAdapter.setDatabasePlatform("org.hibernate.dialect.MySQLDialect");
        factoryBean.setJpaVendorAdapter(vendorAdapter);

        Properties jpaProperties = new Properties();
        jpaProperties.put(Environment.PHYSICAL_NAMING_STRATEGY,
                "org.project.libraryProject.config.CustomNamingStrategy");
        jpaProperties.put("hibernate.show_sql", "true");

        factoryBean.setJpaProperties(jpaProperties);

        return factoryBean;
    }

    // TransactionManager
    @Bean
    public JpaTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory);
    }
}
