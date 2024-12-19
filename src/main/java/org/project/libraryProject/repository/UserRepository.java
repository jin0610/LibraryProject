package org.project.libraryProject.repository;

import org.project.libraryProject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long>, UserRepositoryCustom {
    List<User> findAllUsers(String id);
}