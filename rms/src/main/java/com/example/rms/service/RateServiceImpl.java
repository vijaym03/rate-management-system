package com.example.rms.service;

import com.example.rms.model.Rate;
import com.example.rms.repository.RateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RateServiceImpl implements RateService {

    @Autowired
    private RateRepository rateRepository;

    @Override
    public Iterable<Rate> getAllRates() {
        return rateRepository.findAll();
    }

    @Override
    public void addRate(Rate rate) {
        rateRepository.save(rate);
    }

    @Override
    public void deleteRate(Long id) {
        rateRepository.deleteById(id);
    }

    @Override
    public void updateRate(Rate rate) {
        Optional<Rate> rateNew = rateRepository.findById(rate.getId());
        if(rateNew.isPresent()) {
            Rate currentRate = rateNew.get();
            currentRate.setAmount(rate.getAmount());
            currentRate.setRateDescription(rate.getRateDescription());
            rateRepository.save(currentRate);
        }
    }
}
