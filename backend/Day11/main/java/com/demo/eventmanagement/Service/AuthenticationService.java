package com.demo.eventmanagement.Service;
import com.demo.eventmanagement.dto.request.LoginRequest;
import com.demo.eventmanagement.dto.request.RegisterRequest;
import com.demo.eventmanagement.dto.response.LoginResponse;
import com.demo.eventmanagement.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}