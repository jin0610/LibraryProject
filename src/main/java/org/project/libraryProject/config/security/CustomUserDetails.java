package org.project.libraryProject.config.security;

import lombok.Getter;
import org.project.libraryProject.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;


@Getter
public class CustomUserDetails implements UserDetails {

    private final User user;

    public CustomUserDetails(User user) {
        this.user = user;
    }

    // Return authority information
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // User 엔티티의 권한 정보를 GrantedAuthority 리스트로 변환해서 반환 (e.g. ROLE_USER, ROLE_ADMIN)
        String roleName;

        switch (user.getUserLevel()) {
            case 1:
                roleName = "ROLE_USER";
                break;
            case 9:
                roleName = "ROLE_ADMIN";
                break;
            default:
                roleName = "ROLE_GUEST";
                break;
        }

        return List.of(new SimpleGrantedAuthority(roleName));
    }

    @Override
    public String getPassword() {
        return user.getUserPwd();
    }

    @Override
    public String getUsername() {
        return user.getUserId();
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}

