package com.tsl.action.user;

import java.util.Map;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.tsl.dao.UserDAO;
import com.tsl.dao.impl.UserDAOImpl;
import com.tsl.entity.User;
import com.tsl.util.DegistUtil;

public class LoginAction {
	private User user;
	private String login_success;
	private String login_fail;
	UserDAO userDao = new UserDAOImpl();
  
	public String execute() {
		try {
			String emailInput_login=ServletActionContext.getRequest().getParameter("emailInput_login");
			String password_login=ServletActionContext.getRequest().getParameter("password_login");
			user = userDao.findByEmail(emailInput_login);
			Map<String, Object> map = (Map<String, Object>) ActionContext
					.getContext().getSession();
			map.put("user", user);
			password_login = DegistUtil.produceDegistCode(password_login);
			System.out.println("password_login=" + password_login);
			if (user != null) {
				System.out.println("user.getPassword_reg()="+user.getPassword_reg());
				if (user.getPassword_reg().equals(password_login)) {
					return "success";
				} else {
					return "password_regerror";
				}
			}else{
				return "password_regerror";
			}
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getLogin_success() {
		return login_success;
	}

	public void setLogin_success(String login_success) {
		this.login_success = login_success;
	}

	public String getLogin_fail() {
		return login_fail;
	}

	public void setLogin_fail(String login_fail) {
		this.login_fail = login_fail;
	}

}
