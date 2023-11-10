package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "mmimin")
public class Mmap{

    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String sido;
    private String sigungu;
    private String agencyname;
    private String address;
    private String location;
    private String phoneNumber;
    private String target;
   // @Column(name = "fatherUsage")
    private String fatherUsage;
    private Double longitude;
    private Double latitude;

    // 생성자
//    public Mmap() {
//    }

    public Mmap(int id, String sido, String sigungu, String agencyname, String address, String location,
                     String phoneNumber, String target, String fatherUsage, Double longitude, Double latitude) {
        
    	this.id =id;
        this.sido = sido;
        this.sigungu = sigungu;
        this.agencyname = agencyname;
        this.address = address;
        this.location = location;
        this.phoneNumber = phoneNumber;
        this.target = target;
        this.fatherUsage = fatherUsage;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    // Getter와 Setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSido() {
        return sido;
    }

    public void setSido(String sido) {
        this.sido = sido;
    }

    public String getSigungu() {
        return sigungu;
    }

    public void setSigungu(String sigungu) {
        this.sigungu = sigungu;
    }

    public String getAgencyname() {
        return agencyname;
    }

    public void setAgencyname(String agencyname) {
        this.agencyname = agencyname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    
    public String getFatherUsage() {
        return fatherUsage;
    }

    public void setFatherUsage(String fatherUsage) {
        this.fatherUsage = fatherUsage;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }
}
