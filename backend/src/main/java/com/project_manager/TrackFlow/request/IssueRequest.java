package com.project_manager.TrackFlow.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IssueRequest {

    private String title;
    private String description;
    private String status;
    private Integer projectId;
    private String priority;
    private LocalDate dueDate;

}
