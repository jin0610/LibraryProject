package org.project.libraryProject.service;

import org.project.libraryProject.entity.User;
import org.project.libraryProject.repository.UserRepositoryCustomImpl;
import org.project.libraryProject.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User getUserById(String id);

}