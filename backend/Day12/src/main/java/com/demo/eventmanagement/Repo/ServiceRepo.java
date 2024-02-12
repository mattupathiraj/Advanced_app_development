package com.demo.eventmanagement.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.eventmanagement.Entity.Serviceentity;

@Repository
public interface ServiceRepo extends JpaRepository<Serviceentity, Long> {
    Serviceentity findByEventname(String eventname);
    void deleteByEventname(String eventname);
    // Other methods...
}