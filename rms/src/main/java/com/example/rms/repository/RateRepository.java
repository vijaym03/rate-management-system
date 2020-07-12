package com.example.rms.repository;

import com.example.rms.model.Rate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RateRepository extends CrudRepository<Rate, Long> {
}
