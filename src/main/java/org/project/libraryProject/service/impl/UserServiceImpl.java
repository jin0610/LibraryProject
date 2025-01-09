package org.project.libraryProject.service.impl;

import org.project.libraryProject.entity.User;
import org.project.libraryProject.repository.UserRepository;
//import org.project.libraryProject.repository.UserRepositoryCustomImpl;
import org.project.libraryProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private final UserRepository userRepository;



//    private final UserRepositoryCustomImpl userRepositoryCustom;

    public UserServiceImpl(UserRepository userRepository
//            , UserRepositoryCustomImpl userRepositoryCustom
    ) {
        this.userRepository = userRepository;
//        this.userRepositoryCustom = userRepositoryCustom;
    }

    @Override
    public List<User> getAllUsers() {
        List<User> users = userRepository.findAll();
        for(User user : users) {
            System.out.println(user.getUserId() + " " + user.getUserName());
        }
        System.out.println("Fetched Users: " + users);
        return users;
    }

//    public User getUserById(String id) {
//        return userRepositoryCustom.findUserById(id);
//    }

}
