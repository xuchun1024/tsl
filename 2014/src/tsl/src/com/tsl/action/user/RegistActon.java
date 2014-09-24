package com.tsl.action.user;

import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.tsl.dao.UserDAO;
import com.tsl.dao.impl.UserDAOImpl;
import com.tsl.entity.User;
import com.tsl.util.DegistUtil;

public class RegistActon {
	private User user;
	private boolean isSuccess=false;
	UserDAO userDao = new UserDAOImpl();
	public String execute() {
		String idInput_reg=ServletActionContext.getRequest().getParameter("idInput_reg");
		String emailInput_reg=ServletActionContext.getRequest().getParameter("emailInput_reg");
		String password_reg=ServletActionContext.getRequest().getParameter("password_reg");;
		String pwd = DegistUtil.produceDegistCode(password_reg);
		try {
			user=new User();
			user.setIdInput_reg(idInput_reg);
			user.setEmailInput_reg(emailInput_reg);
			user.setPassword_reg(pwd);
			userDao.save(user);
			Map<String, Object> map=ActionContext.getContext().getSession();
			map.put("user", user);
			isSuccess=true;
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			isSuccess=false;
			return "error";
		}
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public boolean isSuccess() {
		return isSuccess;
	}
	public void setSuccess(boolean isSuccess) {
		this.isSuccess = isSuccess;
	}
	
}
