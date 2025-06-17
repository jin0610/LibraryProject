package org.project.libraryProject.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Table(name = "chat_room")
public class ChatRoom {
    //DB 변경
    // book_id 외래키 수정 (book -> used_book)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id", nullable = false)
    private Integer roomId;

    @Column(name = "book_id", nullable = false)
    private Integer bookId;

    @Column(name = "buyer_id", nullable = false)
    private Integer buyerId;

    @Column(name = "reg_date", nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime regDate;

    @Builder
    public ChatRoom(int roomId, int bookId, int buyerId, LocalDateTime regDate){
        this.roomId = roomId;
        this.bookId = bookId;
        this.buyerId = buyerId;
        this.regDate = regDate;
    }
}
