package org.project.libraryProject.dto;

import org.project.libraryProject.entity.ChatRoom;

import java.time.LocalDateTime;

public class ChatRoomDTO {
    private int roomId;
    private int bookId;
    private int buyerId;
    private LocalDateTime regDate;

    public ChatRoom toEntity(){
        return ChatRoom.builder()
                .roomId(roomId)
                .bookId(bookId)
                .buyerId(buyerId)
                .regDate(regDate)
                .build();
    }
}
