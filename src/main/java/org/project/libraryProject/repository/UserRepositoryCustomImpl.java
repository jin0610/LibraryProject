package org.project.libraryProject.repository;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.project.libraryProject.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
//import java.util.List;

@Repository
public class UserRepositoryCustomImpl implements UserRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Autowired
    public UserRepositoryCustomImpl(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

//    @PersistenceContext
//    private EntityManager em;


//    @Override
    public User findUserById(String id) {
//        QUser qUser = QUser.user; // QueryDSL 사용자 객체 참조
//
//        return queryFactory
//                .selectFrom(qUser)
//                .where(qUser.id.eq(id))
//                .fetchOne();
        return null;
    }

//    @PersistenceContext
//    private EntityManager entityManager;
//
//    @Override
//    public List<User> findUsersByName(String name) {
//        QUser user = QUser.user;
//        JPAQuery<?> query = new JPAQuery<Void>(entityManager);
//
//        return query.select(user)
//                .from(user)
//                .where(user.userName.eq(name))
//                .fetch();
//    }

}
