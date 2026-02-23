package com.binoBackend.dto;

import lombok.Data;

@Data
public class BinoRequest {
    private String category;
    private String query;
    private String location;
}
