package org.project.libraryProject.service.impl;

import org.project.libraryProject.entity.ChatRoom;
import org.project.libraryProject.repository.ChatRoomRepository;
import org.project.libraryProject.service.ChatRoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ChatRoomServiceImpl implements ChatRoomService {

    private static final Logger logger = LoggerFactory.getLogger(LoginServiceImpl.class);

    @Autowired
    private final ChatRoomRepository chatRoomRepository;

    public ChatRoomServiceImpl(ChatRoomRepository chatRoomRepository) {
        this.chatRoomRepository = chatRoomRepository;
    }

    @Override
    public List<ChatRoom> getAllChatRoom(){
        return chatRoomRepository.findAll();
    };
}
