package com.demo.eventmanagement.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Servicedto {
    private Long id;
    private String eventname;
    private String venue;
    private String paymentstatus;
    private String bookingstatus;
    private String timing;

}