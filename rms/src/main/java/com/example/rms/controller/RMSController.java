package com.example.rms.controller;

import com.example.rms.model.Rate;
import com.example.rms.service.RateServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/rms")

@RestController
public class RMSController {

    @Autowired
    private RateServiceImpl rateService;

    @GetMapping(path="/all")
    public
    Iterable<Rate> getAllRates() {
        return rateService.getAllRates();
    }

    @PostMapping(path="/add")
    public
    void addRate(@RequestBody Rate rate) {
        rateService.addRate(rate);
    }

    @PutMapping(path="/update")
    public
    void updateRate(@RequestBody Rate rate){
        rateService.updateRate(rate);
    }

    @DeleteMapping(path="/delete/{id}")
    public
    void deleteRate(@PathVariable Long id){
        rateService.deleteRate(id);
    }

}
