package org.project.libraryProject.repository;

import org.project.libraryProject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String>
{
    List<User> findAll();

    boolean existsByUserId(String userId);

    boolean existsByPhone(String phone);

    boolean existsByEmail(String email);

    Optional<User> findByUserId(String userId);
}