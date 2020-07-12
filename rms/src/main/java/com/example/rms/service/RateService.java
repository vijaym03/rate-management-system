package com.example.rms.service;

import com.example.rms.model.Rate;

public interface RateService {
    Iterable<Rate> getAllRates();
    void addRate(Rate rate);
    void deleteRate(Long id);
    void updateRate(Rate rate);
}
