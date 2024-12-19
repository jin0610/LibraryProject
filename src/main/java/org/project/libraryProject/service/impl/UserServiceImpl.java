package org.project.libraryProject.service.impl;

import org.project.libraryProject.entity.User;
import org.project.libraryProject.repository.UserRepository;
import org.project.libraryProject.repository.UserRepositoryCustomImpl;
import org.project.libraryProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserRepositoryCustomImpl userRepositoryCustom;

    public UserServiceImpl(UserRepository userRepository, UserRepositoryCustomImpl userRepositoryCustom) {
        this.userRepository = userRepository;
        this.userRepositoryCustom = userRepositoryCustom;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String id) {
        return userRepositoryCustom.findUserById(id);
    }

}
