package com.demo.eventmanagement.Service.impl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.demo.eventmanagement.dto.request.LoginRequest;
import com.demo.eventmanagement.dto.request.RegisterRequest;
import com.demo.eventmanagement.dto.response.LoginResponse;
import com.demo.eventmanagement.dto.response.RegisterResponse;
import com.demo.eventmanagement.Entity.Users;
import com.demo.eventmanagement.Repo.UserRepo;
import com.demo.eventmanagement.Service.AuthenticationService;
import com.demo.eventmanagement.utils.jwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthenticationserviceImpl implements AuthenticationService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepo usersRepository;
    private final AuthenticationManager authenticationManager;
    private final jwtUtil jwtUtil;

    @Override
    public RegisterResponse register(RegisterRequest request) {
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return RegisterResponse.builder()
                    .message("Password and ConfirmPassword do not match")
                    .build();
        }

        var user = Users.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(com.demo.eventmanagement.enumerated.Role.USER)
                .build();
        usersRepository.save(user);
        return RegisterResponse.builder()
                .message("User registered successfully")
                .build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = usersRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return LoginResponse.builder()
                .message("Logged in successfully.")
                .token(token)
                .build();
    }

}