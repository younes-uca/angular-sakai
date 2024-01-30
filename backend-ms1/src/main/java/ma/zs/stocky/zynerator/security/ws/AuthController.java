package ma.zs.stocky.zynerator.zynerator.security.ws;


import jakarta.validation.Valid;
import ma.zs.stocky.zynerator.security.bean.Role;
import ma.zs.stocky.zynerator.security.bean.User;
import ma.zs.stocky.zynerator.security.common.SecurityParams;
import ma.zs.stocky.zynerator.security.dao.RoleDao;
import ma.zs.stocky.zynerator.security.dao.UserDao;
import ma.zs.stocky.zynerator.security.jwt.JwtUtils;
import ma.zs.stocky.zynerator.security.payload.request.LoginRequest;
import ma.zs.stocky.zynerator.security.payload.request.SignupRequest;
import ma.zs.stocky.zynerator.security.payload.response.JwtResponse;
import ma.zs.stocky.zynerator.security.payload.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserDao userRepository;

  @Autowired
  RoleDao roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("login")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = jwtUtils.generateJwtToken(authentication);
    User userDetails = (User) authentication.getPrincipal();
    List<String> roles = userDetails.getAuthorities().stream()
            .map(item -> item.getAuthority())
            .collect(Collectors.toList());

    HttpHeaders headers = new HttpHeaders();
    headers.add(SecurityParams.JWT_HEADER_NAME,SecurityParams.HEADER_PREFIX+jwt);
    return ResponseEntity.ok()
            .headers(headers)
            .body(new JwtResponse(jwt,
                    userDetails.getId(),
                    userDetails.getUsername(),
                    userDetails.getEmail(),
                    roles));
  }

}
