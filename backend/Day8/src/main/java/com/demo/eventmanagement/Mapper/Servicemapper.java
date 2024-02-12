package com.demo.eventmanagement.Mapper;

import com.demo.eventmanagement.dto.Servicedto;
import com.demo.eventmanagement.Entity.Serviceentity;

public class Servicemapper {

    public static Servicedto maptoServicedto(Serviceentity serviceentity) {
        // Implement the mapping logic
        return new Servicedto(
                serviceentity.getId(),
                serviceentity.getEventname(),
                serviceentity.getVenue(),
                serviceentity.getPaymentstatus(),
                serviceentity.getBookingstatus(),
                serviceentity.getTiming()
        );
    }

    public static Serviceentity maptoServiceentity(Servicedto servicedto) {
        // Implement the mapping logic
        return new Serviceentity(
                servicedto.getId(),
                servicedto.getEventname(),
                servicedto.getVenue(),
                servicedto.getPaymentstatus(),
                servicedto.getBookingstatus(),
                servicedto.getTiming()
        );
    }
}