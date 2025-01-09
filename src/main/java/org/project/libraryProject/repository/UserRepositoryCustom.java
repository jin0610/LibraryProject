package org.project.libraryProject.repository;

import org.project.libraryProject.entity.User;

import java.util.List;

public interface UserRepositoryCustom {
    User findUserById(String id);
//    public List<User> findUsersByName(String name);
}
