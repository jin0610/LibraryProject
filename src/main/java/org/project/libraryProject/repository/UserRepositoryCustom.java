package org.project.libraryProject.repository;

import org.project.libraryProject.entity.User;

public interface UserRepositoryCustom {
    User findUserById(String id);
}
