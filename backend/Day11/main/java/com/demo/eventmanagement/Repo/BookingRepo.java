package com.demo.eventmanagement.Repo;

import com.demo.eventmanagement.Entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long> {
    // You can define custom query methods if needed
}