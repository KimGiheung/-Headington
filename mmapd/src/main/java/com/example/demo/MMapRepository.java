package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MMapRepository extends JpaRepository<Mmap, Integer> {
    List<Mmap> findAll(); // 모든 엔터티 리스트 조회
   // List<Mmap> findBySido(String sido);
}
