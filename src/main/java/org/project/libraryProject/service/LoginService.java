package org.project.libraryProject.service;

import org.project.libraryProject.dto.UserRegisterDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface LoginService {

    public String registerUser(UserRegisterDTO dto);

    public String login(UserRegisterDTO req);

    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
