package ma.zs.stocky.zynerator.security.service.facade;

import java.util.List;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;

import ma.zs.stocky.zynerator.security.bean.User;

public interface UserService extends UserDetailsService {

   String cryptPassword(String value);

   boolean changePassword(String username, String newPassword);

    List<User> findAll();

    User findByUsername(String username);

    User findById(Long id);

    void deleteById(Long id);

    User save(User user);

    User update(User user);

    int delete(Long id);

    User findByUsernameWithRoles(String username);

    int  deleteByUsername(String username);

    public UserDetails loadUserByUsername(String username)  ;

}
