package com.tsl.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.tsl.dao.UserDAO;
import com.tsl.entity.User;
import com.tsl.util.DBUtil;


public class UserDAOImpl implements UserDAO{
	private static final String INSERT = "insert into user(name,email,password) values(?,?,?)";
	private static final String GETBYEMAIL = "select * from user where email=?";
	@Override
	public void save(User user) throws Exception {
		Connection conn = DBUtil.getConnetion();
		PreparedStatement pst = conn.prepareStatement(INSERT);
		pst.setString(1, user.getIdInput_reg());
		pst.setString(2, user.getEmailInput_reg() );
		pst.setString(3, user.getPassword_reg());
		pst.executeUpdate();	
	}
	@Override
	public User findByEmail(String email) throws Exception {
		User user = null;
		Connection conn = DBUtil.getConnetion();
		PreparedStatement pst = conn.prepareStatement(GETBYEMAIL);
		pst.setString(1, email);
		ResultSet rs = pst.executeQuery();
		if(rs.next()){
			user = new User();
			user.setEmailInput_reg(rs.getString("email"));
			user.setPassword_reg(rs.getString("password"));
		}
		return user;
	}

}
