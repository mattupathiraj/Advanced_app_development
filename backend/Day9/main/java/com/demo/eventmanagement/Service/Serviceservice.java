package com.demo.eventmanagement.Service;



import org.springframework.stereotype.Service;

import com.demo.eventmanagement.dto.Servicedto;
import com.demo.eventmanagement.Entity.Serviceentity;
import com.demo.eventmanagement.Mapper.Servicemapper;
import com.demo.eventmanagement.Repo.ServiceRepo;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class Serviceservice {

    private final ServiceRepo serviceRepo;

    public Serviceservice(ServiceRepo serviceRepo) {
        this.serviceRepo = serviceRepo;
    }

    public List<Servicedto> getAllServices() {
        List<Serviceentity> services = serviceRepo.findAll();
        return services.stream()
                .map(Servicemapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Servicedto getServiceByName(String eventname) {
        Serviceentity serviceentity = serviceRepo.findByEventname(eventname);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto createService(Servicedto servicedto) {
        Serviceentity serviceentity = Servicemapper.maptoServiceentity(servicedto);
        serviceentity = serviceRepo.save(serviceentity);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto updateServiceByName(String eventname, Servicedto updatedServicedto) {
        Serviceentity existingService = serviceRepo.findByEventname(eventname);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setEventname(updatedServicedto.getEventname());
            existingService.setVenue(updatedServicedto.getVenue());
            existingService.setPaymentstatus(updatedServicedto.getPaymentstatus());
            existingService.setBookingstatus(updatedServicedto.getBookingstatus());
            existingService.setTiming(updatedServicedto.getTiming());

            existingService = serviceRepo.save(existingService);
            return Servicemapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    public void deleteServiceByName(String eventname) {
        serviceRepo.deleteByEventname(eventname);
    }
}