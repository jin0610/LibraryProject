package org.project.libraryProject.repository;

import org.project.libraryProject.entity.Book;
import org.project.libraryProject.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Integer> {
    
    // 채팅방의 전체 리스트 가져오기
    List<ChatRoom> findAll();
}
