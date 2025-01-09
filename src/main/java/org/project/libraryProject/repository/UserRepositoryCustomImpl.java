package org.project.libraryProject.repository;

//import com.querydsl.jpa.impl.JPAQueryFactory;
import org.project.libraryProject.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryCustomImpl implements UserRepositoryCustom {

//    private final JPAQueryFactory queryFactory;

//    @Autowired
//    public UserRepositoryCustomImpl(JPAQueryFactory queryFactory) {
//        this.queryFactory = queryFactory;
//    }

    @Override
    public User findUserById(String id) {
//        QUser user = QUser.user;
//        return queryFactory.selectFrom(user)
//                .where(user.userId.eq(id))
//                .fetchOne();

    return null;
    }

}
