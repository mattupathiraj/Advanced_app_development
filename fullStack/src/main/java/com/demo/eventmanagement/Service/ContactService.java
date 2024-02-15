package com.demo.eventmanagement.Service;


import com.demo.eventmanagement.Entity.Contact;
import com.demo.eventmanagement.dto.ContactDto;
import com.demo.eventmanagement.Mapper.Contactmapper;
import com.demo.eventmanagement.Repo.ContactRepository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactDto createContact(ContactDto contactDto) {
        Contact contact = Contactmapper.toEntity(contactDto);
        contact = contactRepository.save(contact);
        return Contactmapper.toDto(contact);
    }
public List<ContactDto> getAllContacts() {
        List<Contact> contacts = contactRepository.findAll();
        return contacts.stream()
                .map(Contactmapper::toDto)
                .collect(Collectors.toList());
    }
    // If you need to implement other service methods, you can add them here

}