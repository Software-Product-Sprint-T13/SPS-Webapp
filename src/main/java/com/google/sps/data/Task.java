package com.google.sps.data;

/** An item on a todo list. */
public final class Task {

    private final long id;
    private final String name;
    private final long timestamp;
    private final String street;
    private final String city;
    private final String state;
    private final String zip;
    private final String tel;
    private final String description;
    private final String apprenticeship;

    private final String website;
    private final String email;

    private final String sun1;
    private final String sun2;
    private final String mon1;
    private final String mon2;
    private final String tue1;
    private final String tue2;
    private final String wed1;
    private final String wed2;
    private final String thur1;
    private final String thur2;
    private final String fri1;
    private final String fri2;
    private final String sat1;
    private final String sat2;





    public Task(
        Long id, 
        String name, 
        Long timestamp, 
        String street, 
        String city, 
        String state, 
        String zip,  
        String tel, 
        String description, 
        String apprenticeship, 
        String email, 
        String website,
        String sun1,
        String sun2,
        String mon1,
        String mon2,
        String tue1,
        String tue2,
        String wed1,
        String wed2,
        String thur1,
        String thur2,
        String fri1,
        String fri2,
        String sat1,
        String sat2
        ) {
        this.id = id;
        this.name = name;
        this.timestamp = timestamp;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.tel = tel;
        this.description= description;
        this.apprenticeship = apprenticeship;
        this.website = website;
        this.email = email;

        this.sun1 = sun1;
        this.sun2 = sun2;
        this.mon1 = mon1;
        this.mon2 = mon2;
        this.tue1 = tue1;
        this.tue2 = tue2;
        this.wed1 = wed1;
        this.wed2 = wed2;
        this.thur1 = thur1;
        this.thur2 = thur2;
        this.fri1 = fri1;
        this.fri2 = fri2;
        this.sat1 = sat1;
        this.sat2 = sat2;
    }
}