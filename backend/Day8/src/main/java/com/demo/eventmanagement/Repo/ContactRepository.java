package com.demo.eventmanagement.Repo;
import com.demo.eventmanagement.Entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    // You can add custom query methods here if needed
}




