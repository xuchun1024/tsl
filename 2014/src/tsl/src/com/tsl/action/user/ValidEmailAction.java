package com.tsl.action.user;

import org.apache.struts2.ServletActionContext;

import com.tsl.dao.UserDAO;
import com.tsl.dao.impl.UserDAOImpl;
import com.tsl.entity.User;

public class ValidEmailAction {

	private boolean ok = false;
	UserDAO userDao = new UserDAOImpl();

	public String execute() {
		try {
			String emailInput_reg = ServletActionContext.getRequest()
					.getParameter("emailInput_reg");
			User user = userDao.findByEmail(emailInput_reg);
			if (user == null) {
				ok = true;
			} else {
				ok = false;
			}
			return "success";
		} catch (Exception e) {
			e.printStackTrace();
			ok = false;
			return "error";
		}

	}

	public boolean isOk() {
		return ok;
	}

	public void setOk(boolean ok) {
		this.ok = ok;
	}
}
