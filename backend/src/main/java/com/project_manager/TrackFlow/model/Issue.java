package com.project_manager.TrackFlow.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "assignee_id")
    private User assignee;

}
