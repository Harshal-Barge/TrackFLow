package com.project_manager.TrackFlow.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.ArrayList;

public class JwtTokenValidator extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        String jwt = request.getHeader(JwtConstants.JWT_HEADER); //Extracting the Authorization header

        if(jwt != null){
            jwt = jwt.substring(7); //Trimming the "bearer" from header
            try{
                SecretKey key = Keys.hmacShaKeyFor(JwtConstants.JWT_HEADER.getBytes());
                Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJwt(jwt).getBody();

                String email = claims.getSubject();

                Authentication authentication = new UsernamePasswordAuthenticationToken(email,null,new ArrayList<>());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }catch (Exception e){
                throw new BadCredentialsException("Invalid Token");
            }
        }
        filterChain.doFilter(request,response); // Continues the FilterChain
    }
}
