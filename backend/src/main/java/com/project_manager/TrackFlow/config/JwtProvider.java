package com.project_manager.TrackFlow.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;

import javax.crypto.SecretKey;
import java.util.Date;

public class JwtProvider {

    private static final SecretKey key = Keys.hmacShaKeyFor(JwtConstants.SECRET_KEY.getBytes());

    public static String generateToken(Authentication authentication){
        return Jwts.builder().setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+86400000))
                .claim("email", authentication.getName())
                .signWith(key).compact();
    }

    public static String getEmailFromToken(String jwtToken){
        Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJwt(jwtToken).getBody();
        return String.valueOf(claims.get("email"));
    }

}