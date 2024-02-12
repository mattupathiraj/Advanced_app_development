package com.demo.eventmanagement.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "booking")
public class Serviceentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "eventname",nullable = false)
    private String eventname;

    @Column(name = "venue",nullable = false)
    private String venue;

    @Column(name = "paymentstatus",nullable = false)
    private String paymentstatus;

    @Column(name = "bookingstatus",nullable = false)
    private String bookingstatus;

    @Column(name = "timing",nullable = false)
    private String timing;

}