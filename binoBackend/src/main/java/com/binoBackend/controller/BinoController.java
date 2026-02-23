package com.binoBackend.controller;



import com.binoBackend.dto.BinoRequest;
import com.binoBackend.util.BinoUtil;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class BinoController {

    @PostMapping("/generateLink")
    public String generateLink(@RequestBody BinoRequest req) {
        String message = BinoUtil.formatMessage(req);
        return BinoUtil.generateWhatsappLink(message);
    }
}