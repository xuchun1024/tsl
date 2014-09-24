package com.tsl.dao;

import com.tsl.entity.User;

public interface UserDAO {
public void save(User user) throws Exception;
public User findByEmail(String email) throws Exception;
}
