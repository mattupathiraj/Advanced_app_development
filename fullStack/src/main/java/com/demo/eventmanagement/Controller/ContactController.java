package com.demo.eventmanagement.Controller;

import com.demo.eventmanagement.Service.ContactService;
import com.demo.eventmanagement.dto.ContactDto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/post")
    public ResponseEntity<ContactDto> createContact(@RequestBody ContactDto contactDto) {
        ContactDto createdContact = contactService.createContact(contactDto);
        return new ResponseEntity<>(createdContact, HttpStatus.CREATED);
    }
    @GetMapping("/get-all")
    public ResponseEntity<List<ContactDto>> getAllContacts() {
        List<ContactDto> contactList = contactService.getAllContacts();
        return new ResponseEntity<>(contactList, HttpStatus.OK);
    }
    // If you need to implement other CRUD operations, you can add them here

}