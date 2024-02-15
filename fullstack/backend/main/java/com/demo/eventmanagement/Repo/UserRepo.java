package com.demo.eventmanagement.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.eventmanagement.Entity.Users;


@Repository
public interface UserRepo extends JpaRepository<Users,String>{
    Optional<Users> findByEmail(String email);
}
