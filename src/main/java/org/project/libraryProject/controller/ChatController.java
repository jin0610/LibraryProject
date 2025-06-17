package org.project.libraryProject.controller;

import lombok.extern.slf4j.Slf4j;
import org.project.libraryProject.entity.ChatRoom;
import org.project.libraryProject.service.ChatRoomService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/chat")
public class ChatController {

    private final ChatRoomService chatRoomService;

    public ChatController(ChatRoomService chatRoomService){
        this.chatRoomService = chatRoomService;
    }

    @GetMapping
    public List<ChatRoom> getAllChatRoom(){
        return chatRoomService.getAllChatRoom();
    }


}
