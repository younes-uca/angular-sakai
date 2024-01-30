package ma.zs.stocky.zynerator.security.bean;

import ma.zs.stocky.zynerator.bean.Etablissement;
import ma.zs.stocky.zynerator.audit.AuditBusinessObject;

import java.time.LocalDateTime;
import java.util.*;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.Transient;
import jakarta.persistence.Table;

import org.springframework.security.core.userdetails.UserDetails;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
@Table(name = "user_app")
@Inheritance(strategy = InheritanceType.JOINED)
public class User  extends AuditBusinessObject  implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected Long id;
    protected boolean credentialsNonExpired = true;
    protected boolean enabled = true;
    protected LocalDateTime createdAt;
    protected LocalDateTime updatedAt;
    protected String email;
    protected boolean accountNonExpired = true;
    protected boolean accountNonLocked = true;
    protected String username;
    protected String password;
    protected boolean passwordChanged = false;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "users_roles", joinColumns = {@JoinColumn(name = "USER_ID")}, inverseJoinColumns = {
    @JoinColumn(name = "ROLE_ID")})
    protected Collection<Role> roles = new ArrayList<>();

    @ManyToOne
    protected Etablissement etablissement;
    @Transient
    protected Collection<Role> authorities;


    public User() {
         super();
    }

    public User(String username) {
        this.username = username;
        this.password = username;
        this.email = username;
    }


    public boolean getCredentialsNonExpired() {
    return credentialsNonExpired;
    }

    public boolean getEnabled() {
    return enabled;
    }

    public boolean getAccountNonExpired() {
    return accountNonExpired;
    }

    public boolean getAccountNonLocked() {
    return accountNonLocked;
    }

    public boolean getPasswordChanged() {
    return passwordChanged;
    }


    public Long getId() {
    return id;
    }

    public void setId(Long id) {
    this.id = id;
    }

    public boolean isCredentialsNonExpired() {
    return credentialsNonExpired;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
    this.credentialsNonExpired = credentialsNonExpired;
    }

    public Etablissement getEtablissement() {
    return etablissement;
    }

    public void setEtablissement(Etablissement etablissement) {
    this.etablissement = etablissement;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
    this.roles = roles;
    }

    public boolean isEnabled() {
    return enabled;
    }

    public void setEnabled(boolean enabled) {
    this.enabled = enabled;
    }

    public LocalDateTime getCreatedAt() {
    return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
    return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
    this.updatedAt = updatedAt;
    }

    public String getEmail() {
    return email;
    }

    public void setEmail(String email) {
    this.email = email;
    }

    public boolean isAccountNonExpired() {
    return accountNonExpired;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
    this.accountNonExpired = accountNonExpired;
    }

    public boolean isAccountNonLocked() {
    return accountNonLocked;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
    this.accountNonLocked = accountNonLocked;
    }

    public String getUsername() {
    return username;
    }

    public void setUsername(String username) {
    this.username = username;
    }


    public Collection<Role> getAuthorities() {
    if (this.authorities == null)
    this.authorities = this.roles;
    return authorities;
    }

    public void setAuthorities(Collection<Role> authorities) {
    this.authorities = authorities;
    }

    public String getPassword() {
    return password;
    }

    public void setPassword(String password) {
    this.password = password;
    }

    public boolean isPasswordChanged() {
    return passwordChanged;
    }

    public void setPasswordChanged(boolean passwordChanged) {
    this.passwordChanged = passwordChanged;
    }

}
