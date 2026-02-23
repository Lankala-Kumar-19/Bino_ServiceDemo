package com.binoBackend.util;

import com.binoBackend.dto.BinoRequest;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

public class BinoUtil {

    public static String formatMessage(BinoRequest req) {
        return String.format(
                "Category: %s\nQuery: %s\nLocation: %s",
                req.getCategory(), req.getQuery(), req.getLocation()
        );
    }

    public static String generateWhatsappLink(String message) {
        String encoded = URLEncoder.encode(message, StandardCharsets.UTF_8);
        return "https://wa.me/9800081110?text=" + encoded;
    }
}
