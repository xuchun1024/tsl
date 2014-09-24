package com.tsl.entity;

import java.io.Serializable;

public class User implements Serializable {
	private static final long serialVersionUID = -8407720149294568697L;
	private Integer id;
	private String idInput_reg;
	private String emailInput_reg;
	private String password_reg;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIdInput_reg() {
		return idInput_reg;
	}

	public void setIdInput_reg(String idInput_reg) {
		this.idInput_reg = idInput_reg;
	}

	public String getEmailInput_reg() {
		return emailInput_reg;
	}

	public void setEmailInput_reg(String emailInput_reg) {
		this.emailInput_reg = emailInput_reg;
	}

	public String getPassword_reg() {
		return password_reg;
	}

	public void setPassword_reg(String password_reg) {
		this.password_reg = password_reg;
	}

	@Override
	public String toString() {
		return "User[idInput_login="+idInput_reg+","+emailInput_reg+"]";
	}
}
